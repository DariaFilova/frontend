import React, { useState } from 'react';
import './App.scss'

const App = () => {

  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark');
    }
    else {
      setTheme('light');
      document.body.classList.remove('dark');
    }
    console.log('changed state');
  }


  return (
    <div className='App'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla possimus hic, dignissimos porro sint sunt repellat tempora itaque labore necessitatibus quas! Laboriosam, deleniti similique. Voluptas odit aliquid cupiditate officiis!</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default App;
