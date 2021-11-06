import { mount, ReactWrapper } from "enzyme";
import Button from "../../components/button/Button";



describe('Button', () => {
	let wrapper: ReactWrapper
	const click = jest.fn()


	describe('Correct render', () => {
	  beforeEach(() => {
		  wrapper = mount(<Button onClick={click} />)
	  });

	  it('should render something', () => {
		expect(wrapper).not.toBeNull()
	  })

	  it('should callback call if event click update', () => {
		expect(click).toBeCalledTimes(0)
		wrapper.find('button').simulate('click')
		expect(click).toBeCalledTimes(1)
	  })
	})
  
})