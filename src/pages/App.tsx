import axios from 'axios';
import React, { useState, useEffect, ChangeEvent, useContext, } from 'react';
import '../App.css';
import ToDoForm from '../components/addTodo/ToDoForm';
import Button from '../components/button/Button';
import { InputFilter } from '../components/input/InputFilter';
import List from '../components/list/List';
import Modal from '../components/modal/Modal';
import MySelect from '../components/select/MySelect';
import ToDoCard from '../components/ToDoCard/ToDoCard';
import ThemeContext from '../context';
import { useFilter } from '../hooks/useFilter';
import useGeneratorId from '../hooks/useGenerator';
import { ToDo, Variable } from '../types/types';

function App() {

  // Изменение темы приложения
  const { theme } = useContext(ThemeContext)
  function setThemeMod(className: string) {
    const classes = [className]
    if (theme) classes.push(`${className}__dark`)
    return classes.join(' ')
  }


  const [cards, setCards] = useState<ToDo[]>([{
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },])


  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [variable, setVariable] = useState<Variable>(Variable.any)


  // Задает вариант сортировки в зависимости от выбранного в MySelect элемента
  const setVar = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {

      case ('any'):
        setVariable(Variable.any)
        break;

      case ('great'):
        setVariable(Variable.great)
        break;

      case ('fail'):
        setVariable(Variable.fail)
        break;
    }
  }

  // Генератор значений id, для уникальности ключей списка

  const IdValue = useGeneratorId(cards)


  //Возвращает новый отсортированный список
  const setVariableSort = () => {
    let sortedCards: ToDo[]


    switch (variable) {
      case Variable.any:
        sortedCards = cards
        break;

      case Variable.great:
        sortedCards = cards.filter(card => card.completed === true)
        break;

      case Variable.fail:
        sortedCards = cards.filter(card => card.completed === false)
        break;

    }

    return sortedCards
  }

  // Получение нового списка по двум фильтрациям (поиск по тексту/фильтр по статусу) 
  const FiltredCards = useFilter(setVariableSort(), filter.sort, filter.query)


  useEffect(() => {
    fetchToDo()
  }, [])

  const fetchToDo = async () => {
    try {
      const response = await axios.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setCards(response.data)
    } catch (error) {
      console.error(error);
    }
  }


  // Изменить значение Todo.completed (завершено/не завершено)
  const setCardStatus = (id: number) => {
    const newCards = cards.map(card => (
      card.id === id ? { ...card, completed: !card.completed } : card
    ))
    setCards(newCards)
  }

  // Отображение модального окна с новой задачей
  const [modal, setModal] = useState(false)

  const createTodo = (newToDo: ToDo) => {
    setCards([...cards, newToDo])
    setModal(false)
  }

  // Удаление из списка задач
  const deleteToDo = (todo: ToDo) => {
    setCards(prev => prev.filter(p => p !== todo))
  }




  return (
    <div className={setThemeMod('App')}>

      <div className={setThemeMod("input-container")} >
        <InputFilter filter={filter} setFilter={(e: ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.target.value })} />
        <MySelect
          value={variable}
          options={[
            { value: Variable.any, name: 'Все' },
            { value: Variable.great, name: 'Выполненные' },
            { value: Variable.fail, name: 'Незавершенные' },
          ]}
          onChange={setVar} />

        <Button onClick={() => setModal(true)}>Добавить задачу</Button>
      </div>

      <Modal visible={modal} setVisible={setModal} >
        <ToDoForm idValue={IdValue} create={createTodo} />
      </Modal>
        <List items={FiltredCards}
          renderItem={(card: ToDo) =>

            <ToDoCard setCardStatus={setCardStatus} key={card.id}
              id={card.id}
              title={card.title}
              completed={card.completed}
              card={card}
              deleteCard={deleteToDo} />

               }   />
    </div>
  );
}

export default App;
