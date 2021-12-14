import Counter from './Counter';
import { shallow } from 'enzyme';

const COUNTER = {
  RESULT: '.counter__result',
  BUTTON: {
    INCREASE: '.counter__increase',
    DECREASE: '.counter__decrease',
    SET: '.counter__set',
    RESET: '.counter__reset'
  },
  INPUT: '.counter__input'
}

describe('Conter component', () => {
  it('should be 0 if props start not set', () => {
    const wrapper = shallow(<Counter/>);
    const result = wrapper.find(COUNTER.RESULT);
    expect(result.text()).toBe("0");
  })
  it('should be 10 if start set to 10', () => {
    const wrapper = shallow(<Counter start={10}/>);
    const result = wrapper.find(COUNTER.RESULT);
    expect(result.text()).toBe("10");
  })
  it('should render increase and decrease buttons', () => {
    const wrapper = shallow(<Counter/>);
    const increaseBtn = wrapper.find(COUNTER.BUTTON.INCREASE);
    const decreaseBtn = wrapper.find(COUNTER.BUTTON.DECREASE);
    expect(increaseBtn.length).toBe(1);
    expect(decreaseBtn.length).toBe(1);
  })
  it('should increase and decrease counter on button click', () => {
    const wrapper = shallow(<Counter/>);
    const increaseBtn = wrapper.find(COUNTER.BUTTON.INCREASE);
    const decreaseBtn = wrapper.find(COUNTER.BUTTON.DECREASE);
    let result = "";
    increaseBtn.simulate('click');
    result = wrapper.find(COUNTER.RESULT);
    expect(result.text()).toBe("1");
    decreaseBtn.simulate('click');
    result = wrapper.find(COUNTER.RESULT);
    expect(result.text()).toBe("-1");
  })
  it('should set counter to input value after button "Change" click', () => {
    const wrapper = shallow(<Counter/>);
    const input = wrapper.find(COUNTER.INPUT);
    input.simulate('change', { target: { value: 30 }});
    const setButton = wrapper.find(COUNTER.BUTTON.SET);
    setButton.simulate('click');
    const result = wrapper.find(COUNTER.RESULT);
    expect(result.text()).toBe("30");
  })
  it('should reset counter to start value', () => {
    const wrapper = shallow(<Counter/>);
    const increaseBtn = wrapper.find(COUNTER.BUTTON.INCREASE);
    increaseBtn.simulate('click');
    increaseBtn.simulate('click');
    const resetButton = wrapper.find(COUNTER.BUTTON.RESET);
    resetButton.simulate('click');
    const result = wrapper.find(COUNTER.RESULT);
    expect(result.text()).toBe("0");
  })
})