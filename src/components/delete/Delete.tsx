import React, { FC } from 'react'

interface Props {
	deleteClick : ()=>void
}

const Delete:FC<Props> = ({deleteClick}) => {
	return (
		<div className="delete"
		 onClick={() =>deleteClick()}></div>
	)
}

export default Delete
