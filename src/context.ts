import React from 'react';

const ThemeContext = React.createContext<{theme:boolean, setTheme:Function}>({theme: false, setTheme:()=>console.log()})

export default ThemeContext