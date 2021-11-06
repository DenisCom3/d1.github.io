import { mount, ReactWrapper, shallow } from 'enzyme'
import ToDoCard from '../../components/ToDoCard/ToDoCard'


describe('ToDoCard', () => {
  let mountWrapper: ReactWrapper
  let shallowWrapper: any

  const card = {id:1,title:'todo.test', completed: false}

  const changeCheck = jest.fn()
  const deleteClick = jest.fn()

	describe('correct Render', () => {
		beforeEach(() => {
			mountWrapper = mount(<ToDoCard
									id={1}
									title='todo test'
									completed={false}
									card={card}
									setCardStatus={changeCheck}
									deleteCard={deleteClick}
											/>)
			
			shallowWrapper = shallow(<ToDoCard
				id={1}
				title='todo test'
				completed={false}
				card={card}
				setCardStatus={changeCheck}
				deleteCard={deleteClick}
						/>)
		});


		it('should render someyhing', () => {
			expect(mountWrapper).not.toBeNull()
		});
	
		it.skip('should callback call if event change update', () => {
			expect(changeCheck).toBeCalledTimes(0)
			mountWrapper.find('input').simulate('change')
			expect(changeCheck).toBeCalledTimes(1)
			mountWrapper.find('input').simulate('change')
			mountWrapper.find('input').simulate('change') 
			mountWrapper.find('input').simulate('change')
			mountWrapper.find('input').simulate('change') 
			mountWrapper.find('input').simulate('change')
			expect(changeCheck).toBeCalledTimes(6)
		});

		it('should callback call if event click update', () => {
			expect(deleteClick).toBeCalledTimes(0)
			mountWrapper.find('.trash').simulate('click')
			expect(deleteClick).toBeCalledTimes(1)

		});

		it('should correct render text', () => {
			const title = shallowWrapper.find('.title')
			expect(title).not.toBeUndefined()
			expect(title).not.toBeNull()
			expect(title.text()).toEqual('1. todo test') 
		});
 
	});

	
})