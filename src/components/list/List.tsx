import React, { useContext } from 'react'
import ThemeContext from '../../context'
import style from './List.module.css'

interface Props<T> {
	items: T[],
	renderItem: (item: T) => React.ReactNode
}
export default function List<T>(props: Props<T>){

	const {theme} = useContext(ThemeContext)

	return (
		
		<div className={theme ? [style.list, style.list__dark].join(' ') : style.list}>
			{props.items.map(props.renderItem)}

		</div>
	)
}
