import { mount, ReactWrapper} from "enzyme";
import Delete from "../../components/delete/Delete";


describe('Delete', () => {
  
	let wrapper:ReactWrapper
	const click = jest.fn()

	describe('Correct render', () => {
	  
		beforeEach(() => {
			wrapper = mount(<Delete deleteClick={click} />)
		});

		it('should render something', () => {
			expect(wrapper).not.toBeNull()
		  })

		  it('should callback call if event click update', () => {
			expect(click).toBeCalledTimes(0)
			wrapper.find('div').simulate('click')
			expect(click).toBeCalledTimes(1)
		  })
	})
})