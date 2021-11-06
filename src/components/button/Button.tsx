import React, { FC, } from 'react'
import style from '../button/Button.module.css'

interface Props {
	
	onClick: ((e: React.MouseEvent<HTMLButtonElement>)=>void)
	
}

const Button: FC<Props> = ({onClick,  ...props}) => {
	return (
		<button {...props} onClick={onClick}  className={style.button}>
			
		</button>
	)
}

export default Button
