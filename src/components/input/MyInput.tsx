import React, { FC } from 'react'
import style from '../input/MyInput.module.css'

interface Props {
	value: string
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	
}

const MyInput: FC<Props> = ({ onChange,value, placeholder}) => {


	const maxLength = 75
	
	return (
		<div className={style.container} >
		<input className={value.length ===maxLength ?style.inputWArning : style.input} value={value} onChange={onChange} type='text' placeholder={placeholder}/>
		<span>{value.length===maxLength ? "Допускается не более 75 символов" : ""  }
		</span>
		</div>
	)
}

export default MyInput
