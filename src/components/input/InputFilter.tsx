import  React,{ ChangeEvent, FC, useContext } from "react"
import ThemeContext from "../../context"
import style from '../input/InputFilter.module.css'

interface Props {

	filter: {sort: string, query: string}
	setFilter: ((e: ChangeEvent<HTMLInputElement>) => void)
}

export const InputFilter:FC<Props> = ({ filter, setFilter}) => {
	
	const {theme} = useContext(ThemeContext)
	const classes = (theme ? [style.input, style.input__dark] : [style.input]).join(' ')
	
	return (
		
			<input className={classes} value={filter.query} onChange={setFilter} type="text" placeholder='Search...' />
		
	)
}
