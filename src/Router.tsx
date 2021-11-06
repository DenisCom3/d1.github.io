import React, { FC, } from 'react'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import App from './pages/App'
import About from './pages/About'
import Trello from './pages/Trello'
import SwitchTheme from './components/switchTheme/SwitchTheme'







const Router:FC = () => {



	return (
		<BrowserRouter>

		<div className="nav">
			<div className="nav__container">

				<NavLink className="link about" to='/about'>About</NavLink> 
				<NavLink className="link app" to='/app'>App </NavLink>
				<NavLink className="link app" to='/trello'>Trello</NavLink>
			</div>
			<SwitchTheme />
		</div>
	
			
		<Switch>
			<Route exact path="/" component={About}  />
			<Route path="/app" component={App} /> 
			<Route path="/trello" component={Trello} />
			<Redirect to='/'/>
		</Switch>	
		
			
		</BrowserRouter>
	)
}

export default Router
