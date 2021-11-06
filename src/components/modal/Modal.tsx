import React, { FC } from 'react'
import style from '../modal/Modal.module.css'

interface Props {
	
	visible: boolean
	setVisible: (v: boolean) => void

}

 const Modal: FC<Props> = ({children, visible, setVisible}) => {

	const styleClasses = [style.myModal]
		if(visible) styleClasses.push(style.active)

	return (
		<div>
			<div className={styleClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
		</div>
	)
}

export default Modal


