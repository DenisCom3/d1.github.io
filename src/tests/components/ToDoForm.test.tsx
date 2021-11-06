import { mount, ReactWrapper } from "enzyme";
import ToDoForm from "../../components/addTodo/ToDoForm";


describe('ToDoCard', () => {
	let mountWrapper: ReactWrapper

	const create = jest.fn()

	const length = 15

	describe('Correct render',() => {
	  beforeEach(() => {
		  mountWrapper = mount(<ToDoForm create={create} length={length} />)
	  });

	it('should render someyhing', () => {
		expect(mountWrapper).not.toBeNull()
	});

	it('should callback call if event click update', () => {
		expect(create).toBeCalledTimes(0)
		mountWrapper.find('button').simulate('click')
		expect(create).toBeCalledTimes(1)
	  })




	})


})