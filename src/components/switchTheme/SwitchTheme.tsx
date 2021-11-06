import React, { FC, useContext} from 'react'
import ThemeContext from '../../context'
import style from './SwitchTheme.module.css'



const SwitchTheme:FC = () => {


	const {theme,setTheme} = useContext(ThemeContext)

	return (
		<div className={style.container} onClick={()=> setTheme(!theme)} >
		<input   checked={theme} onChange={()=> console.log('dark')}  type="checkbox" className={style.checkbox} id="checkbox" />
		<label  form= 'checkbox'  className={style.label}>
		<div  className={style.ball}></div>
    	</label> 
  		</div> 
	)
}

export default SwitchTheme
