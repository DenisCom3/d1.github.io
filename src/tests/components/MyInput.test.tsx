import { mount, ReactWrapper } from "enzyme";
import MyInput from "../../components/input/MyInput";



let wrapper: ReactWrapper

const onChange = jest.fn()

let value ='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nisi repellen'

describe('Correct render', () => {
	beforeEach(() => {
		wrapper = mount(<MyInput value = {value}
								onChange = {onChange}  />)
	});

	it('should render something', () => {
		expect(wrapper).not.toBeNull()
	  })

	it('should callback call if event change update', () => {
	  expect(onChange).toBeCalledTimes(0)
	  wrapper.find('input').simulate('change')
	  expect(onChange).toBeCalledTimes(1)
	})

	it('should correct render text', () => {
		expect(wrapper.find('span')).not.toBeNull()
		expect(wrapper.find('span')).not.toBeUndefined()
		expect(wrapper.find('span').text()).toEqual("Допускается не более 75 символов")

	});




	



})
