import React, { FC, ReactChild, ReactNode} from 'react'
import { Item } from '../../types/types'

interface Props {
	item: Item
	color:() => string
	onDragOver: (e:React.DragEvent<HTMLDivElement>) => void
	onDragLeave: (e:React.DragEvent<HTMLDivElement>) => void
	onDragStart: (e:React.DragEvent<HTMLDivElement>) => void
	onDragEnd: (e:React.DragEvent<HTMLDivElement>) => void
	onDrop: (e:React.DragEvent<HTMLDivElement>) => void
	children: ReactChild | ReactNode

	
}

const ItemCard:FC<Props> = ({item,color,onDragOver,onDragLeave,onDragStart,onDragEnd,onDrop, children}) => {
	return (
		<div className='item'
		style={{background: color()}}
		draggable={true}
		onDragOver={onDragOver}
		onDragLeave={onDragLeave}
		onDragStart={onDragStart}
		onDragEnd={onDragEnd}
		onDrop={onDrop} >
			<div className="item__container">
				{item.title}
				{children}
			</div>
			
		</div>
	)
}

export default ItemCard
