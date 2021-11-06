
import React from 'react';

import{ ToDo } from '../../types/types';
import style from '../ToDoCard/ToDoCard.module.css'
interface Props {
	id: number | null,
	title: string,
	completed: boolean | null
	setCardStatus: (id: number) => void
	card: ToDo
	deleteCard: ((todo:ToDo) => void)

	
}

 const ToDoCard : React.FC<Props> = ({ id, title, completed, setCardStatus, card, deleteCard}) => {
	if(id ===null) return <div></div>

	return (
		<div className={completed ? style.success : style.fail}>
			<div className={style.title}>{id}. {title}</div>
			<div className={style.container}>
				<input type="checkbox" name="check" id="check" className={style.check} checked={completed ? completed : false} onChange={()=> setCardStatus(id)} />
				<div className={style.trash} onClick={() => deleteCard(card)}></div>
			</div>
			
		</div>
	
	)
}

export default ToDoCard;




