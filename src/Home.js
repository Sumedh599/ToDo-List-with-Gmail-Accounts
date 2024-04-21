import React from 'react'
import style from "./app.module.css";
import { Header, TodoInput, TodoList } from "./components";
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

 function Home() {
  const { theme } = useContext(ThemeContext);
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (

    <div className={style.app} data-theme={theme}>
    <div className={style.wrapper}>
      <Header />
      <TodoInput />
      <TodoList />
      <button onClick={logout} className='btnout'>SignOut</button>
    </div>
    </div>
  );
}
export default Home;