import React, { Component} from "react";

class BillClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      tips: [5, 10, 15, 20],
      net: 0,
      newTip: 0,
      bill: 0,
      isSubmit: false
    }
  }
  
  componentDidMount() {
    const {tips} = this.state;
    this.setState({newTip: tips[0]})
  }

  render() {
    const {tips, net, newTip, bill, isSubmit} = this.state;

    const handleSubmit = () => {
      const {net, newTip} = this.state;
      const billWithTip = parseFloat(net) + parseFloat(net) * parseFloat(newTip) / 100;
      const billGross = parseFloat(billWithTip + (billWithTip*23/100)).toFixed(2)
      this.setState({bill: billGross, isSubmit: true});
    }

    const handleChange = (e) => {
      this.setState({net: e.currentTarget.value});
    }

    const handleSelect = (e) => {
      this.setState({newTip: e.currentTarget.value});
    }
    return (
      <>
      {isSubmit
      ? <div>
          <p>Net price: ${net}</p>
          <p>tip: ${parseFloat(net) * parseFloat(newTip) / 100}</p>
          <p>total incl. Tax(23%): ${bill}</p>
        </div>
      : <form onSubmit={handleSubmit}>
          <div>
            <label>
              Net price: 
              <input type="number" value={net} name="net" onChange={handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Tip: 
              <select onChange={handleSelect} value={newTip}>
                {tips.map(tip => (
                  <option key={tip} value={tip}>{tip} %</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <button type="submit">Calculate</button>
          </div>
        </form>}
      </>
    )
  }
}

export default BillClass;