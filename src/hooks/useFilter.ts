import { useMemo } from "react";
import { ToDo } from "../types/types";

 

 export const useFiltredToDo = (todos: ToDo[], sort: any) => {
	 return useMemo(() => {
		if (sort){
			return [...todos].sort((a,b) => a.title[sort].localeCompare(b.title[sort]))
		}
		return todos
	},[todos, sort])
}


export const useFilter = (todos: ToDo[], sort: any, query: string) => {
  const filtredTodo = useFiltredToDo(todos, sort)

  return useMemo(() => {
	return filtredTodo.filter(todo =>todo.title.toLowerCase().includes(query))
  },[query, filtredTodo])
}



