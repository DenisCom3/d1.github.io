import React, { FC, useContext, useState } from 'react'
import BoardCard from '../components/board/BoardCard'
import Delete from '../components/delete/Delete'
import ItemCard from '../components/item/ItemCard'
import ThemeContext from '../context'
import { Board, Item } from '../types/types'



const Trello: FC = () => {

	const { theme } = useContext(ThemeContext)

	const [boards, setboards] = useState<Board[]>([
		{ id: 1, title: 'Не сделано', items: [{ id: 1, title: 'Пойти в магазин' }, { id: 2, title: 'Приготовить ужин' }, { id: 3, title: 'Почитать перед сном' }] },
		{ id: 2, title: 'Делаю', items: [{ id: 4, title: 'Обед' }, { id: 5, title: 'Послушать подкаст' },] },
		{ id: 3, title: 'Сделано', items: [{ id: 7, title: 'Сделать зарядку' }, { id: 8, title: 'Написать письмо' }, { id: 9, title: 'Заказать доставку' }] }
	])

	const [currentBoard, setCurrentBoard] = useState<Board>(boards[0])
	const [currentItem, setCurrentItem] = useState<Item | null>(null)

	const dragOverHandler = (e: React.DragEvent) => {
		e.preventDefault()

		const elem = e.target as HTMLElement
		if (elem.className === 'item') {
			elem.style.boxShadow = '0 4px 3px gray'
		}
	}

	const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		const elem = e.target as HTMLDivElement
		if (elem.className === 'item') {
			elem.style.boxShadow = "none"
		}
	}
	const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: Board, item: Item) => {
		setTimeout(() => {
			(e.target as HTMLDivElement).classList.add('hide')
		}, 0)
		setCurrentBoard(board)
		setCurrentItem(item)
	}

	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		const elem = e.target as HTMLDivElement
		elem.classList.remove('hide')
		if (elem.className === 'item') {
			elem.style.boxShadow = "none"
		}

	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, board: Board, item: Item) => {
		e.preventDefault()
		e.stopPropagation()

		const elem = e.target as HTMLDivElement
		elem.style.boxShadow = "none"

		if (currentItem !== null && currentBoard !== null) {
			const currentIndex = currentBoard.items.indexOf(currentItem)

			currentBoard.items.splice(currentIndex, 1)

			const dropIndex = board.items.indexOf(item)
			board.items.splice(dropIndex + 1, 0, currentItem)
			setboards(boards.map(b => {
				if (b.id === board.id) {
					return board
				}
				if (b.id === currentBoard.id) {
					return currentBoard
				}
				return b
			}))

		}
	}

	const dropCardHandler = (e: React.DragEvent<HTMLDivElement>, board: Board) => {
		if (currentItem !== null) {

			if ((e.target as HTMLDivElement).className !== 'item') {
				board.items.push(currentItem)
				const currentIndex = currentBoard.items.indexOf(currentItem)
				currentBoard.items.splice(currentIndex, 1)
				setboards(boards.map(b => {
					if (b.id === board.id) {
						return board
					}
					if (b.id === currentBoard.id) {
						return currentBoard
					}
					return b
				}))
			}


		}
	}

	const deleteItem = (item: Item) => {
		setboards(boards.map(b => {
			let index = b.items.indexOf(item)
			if (b === boards[2]) {
				b.items.splice(index, 1)
			}
			return b
		}))
	}

	const setColor = (board: Board) => {

		switch (board) {
			case boards[0]:
				return 'crimson'
			case boards[1]:
				return '#e1f415'
			case boards[2]:
				return 'lightgreen'
		}

		return 'white'
	}


	return (
		<div className={theme ? 'trello trello_dark' : 'trello'} >
			{boards.map(board =>

				<BoardCard
					board={board}
					onDragOver={e => dragOverHandler(e)}
					onDrop={e => dropCardHandler(e, board)}
					key={board.id}
				>
					{board.items.map(item =>
						<ItemCard
							key={item.id}
							item={item}
							color={() => setColor(board)}
							onDragOver={e => dragOverHandler(e)}
							onDragLeave={e => dragLeaveHandler(e)}
							onDragStart={e => dragStartHandler(e, board, item)}
							onDragEnd={e => dragEndHandler(e)}
							onDrop={e => dropHandler(e, board, item)}
						>
							{/* Отображение удаления записи на последней доске */}
							{board === boards[2] ? <Delete deleteClick={() => deleteItem(item)} /> : null}
						</ItemCard>
					)}
				</BoardCard>
			)}
		</div>
	)
}

export default Trello
