import React, { FC, useContext } from 'react'
import ThemeContext from '../context'


const About:FC = () => {

	const {theme} = useContext(ThemeContext)

	return (
		<div className={theme ? 'About About__dark' : 'About'}>
			<h1>You are Welcome!</h1>
		</div>
	)
}

export default About
