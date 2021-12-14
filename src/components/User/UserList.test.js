import UserList from './UserList';
import { shallow } from 'enzyme';

describe('UserList component', () => {
  it('should render 10 elements when get 10 users', () => {
    const wrapper = shallow(<UserList/>);    
    setTimeout(() => {
      const elements = wrapper.find('.user');
      expect(elements.length).toBe(10);
    },2100);
  });
  it('should 0 elements when get 0 users', () => {
    const wrapper = shallow(<UserList/>);    
    setTimeout(() => {
      wrapper.setState({ users: []});
      const elements = wrapper.find('.user');
      expect(elements.length).toBe(0);
    },2100);
  })
})