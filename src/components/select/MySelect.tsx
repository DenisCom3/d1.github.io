import React, { ChangeEvent, FC } from 'react'
import { Variable } from '../../types/types'
import style from '../select/MySelect.module.css'

interface Option {
	value: Variable
	name: string
}

interface Props {
	value: Variable
	defaultValue?: string
	options: Option[]
	onChange: Function

}

const MySelect: FC<Props> = ({ value, options, onChange }) => {
	return (
		<span className={style.customDropdown} >
			<select value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e)}>
				{options.map(option =>
					<option key={option.value} value={option.value}>{option.name}</option>
				)}
			</select>
		</span>

	)
}

export default MySelect
