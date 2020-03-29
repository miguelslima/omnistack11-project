import React, { Component } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';
import { ThemeProvider } from 'styled-components';

import Header from './header';
import Routes from './routes';
import Footer from './footer';


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
      <div>
        
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme}/>
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <Header theme={theme} />
                <Routes />
                <Footer />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  } 
}


export default App;
