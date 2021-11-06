import React, {  FC, useState } from 'react'
import { ToDo } from '../../types/types'
import Button from '../button/Button'
import MyInput from '../input/MyInput'
import style from "../addTodo/ToDoForm.module.css"

interface Props {
	create: (v: ToDo) => void
	idValue: number
}

const ToDoForm: FC<Props> = ({idValue,create}) => {

	const emptyTodo: ToDo = {id: 0, title: '', completed: false}
	const [todo, setTodo] = useState<ToDo>(emptyTodo)

	


	const addNewToDo = (e: React.MouseEvent<HTMLButtonElement>) => {
	  e.preventDefault()
	  const newToDo ={
		...todo, id: idValue
	  }
	  create(newToDo)
	  setTodo(emptyTodo)
	}

	return (
		<form  className={style.form} >
			<MyInput value ={todo.title} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTodo({...todo, title: (e.target.value).slice(0,75)})} 
			placeholder='Что нужно сделать?'  />	
			<Button onClick={addNewToDo} >Create ToDo</Button>
		</form>
	)
}

export default ToDoForm
