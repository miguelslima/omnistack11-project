import React, { Component } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';
import { ThemeProvider } from 'styled-components';

import Header from './header';
import Routes from './routes';

import './styles/global'

class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  };

  render() {

    return (
      
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme}/>
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <Header theme={theme} />
                <Routes theme={theme} />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>

    );
  } 
}


export default App;
