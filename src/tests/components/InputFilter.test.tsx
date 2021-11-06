import { mount, ReactWrapper } from "enzyme";

import { InputFilter } from "../../components/input/InputFilter";


let wrapper: ReactWrapper

const setFilter = jest.fn()

describe('Correct render', () => {
	beforeEach(() => {
		wrapper = mount(<InputFilter filter = {{sort: '',query:''}}	setFilter={setFilter}  />)
	})


	it('should render something', () => {
		expect(wrapper).not.toBeNull()
	  })

	  it('should callback call if event change update', () => {
		expect(setFilter).toBeCalledTimes(0)
		wrapper.find('input').simulate('change')
		expect(setFilter).toBeCalledTimes(1)
	  })


})