import React, {Component} from 'react';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      theme: 'light', 
      
    }

  }

  changeTheme = () => {
    if (this.state.theme == 'light') {
      this.setState({theme: 'dark'})
      document.body.classList.add('dark');
    }
    else {
      this.setState({theme: 'light'});
      document.body.classList.remove('dark');
    }
    
    
  }

  render () {
    return (
      <div className='App'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla possimus hic, dignissimos porro sint sunt repellat tempora itaque labore necessitatibus quas! Laboriosam, deleniti similique. Voluptas odit aliquid cupiditate officiis!</p>
        <button onClick={this.changeTheme}>Change Theme</button>
      </div>
    );
}
}

export default App;
