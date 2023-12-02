import React, { useEffect, useState } from "react";


export const Header = () =>{
    const [theme,setTheme] =useState(JSON.parse(localStorage.getItem("theme")) || "dark")



    useEffect(() =>{
        localStorage.setItem("theme", JSON.stringify(theme))
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add(theme)
    },[theme])

    return(
        <header>
        <div className="logo">
            <span>TaskMate</span>
            {/* <img src={Logo} alt="image"></img> */}
        </div>
        <div className="themeSelector">
            <span  onClick={() => setTheme('light')} className={theme == 'light' ? 'light activeTheme': 'light'}></span>
            <span onClick={() => setTheme('medium')} className={theme == 'medium' ? 'light activeTheme': 'medium'}></span>
            <span onClick={() => setTheme('dark')} className="dark"></span>
            <span onClick={() => setTheme('gradientOne')} className="gradientOne"></span>
            <span onClick={() => setTheme('gradientTwo')} className="gradientTwo"></span>
            <span onClick={() => setTheme('gradientThree')} className="gradientThree"></span>
        </div>

        </header>
    )
} 