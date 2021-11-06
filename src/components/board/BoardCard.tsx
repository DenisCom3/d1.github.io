import React, { FC, ReactChild, ReactNode, useContext } from 'react'
import ThemeContext from '../../context'
import { Board } from '../../types/types'

interface Props {
	children: ReactChild | ReactNode
	onDragOver: (e:React.DragEvent<HTMLDivElement>) => void
	onDrop: (e:React.DragEvent<HTMLDivElement>) => void
	board: Board


}

const BoardCard:FC<Props> = ({children, onDragOver,onDrop, board }) => {

	const {theme} = useContext(ThemeContext)

	return (
		<div
		className={theme ? 'board board_dark' : 'board' }
		onDragOver={onDragOver}
		onDrop={onDrop}
		>
			<div className="board__title">
				{board.title}
			</div>
			{children}
		</div>
	)
}

export default BoardCard
