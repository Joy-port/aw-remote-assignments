import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  state = {
    webLink:'https://www.google.com',
    isOpeningMenu: false
  }

  toggleMenuBtn = (e) => {
    e.preventDefault();
    const menu = document.querySelector('.mobile-menu')
    const menuList = document.querySelector('.mobile-menu-content')
    if (e.target.closest('button')) {
      this.setState({
        isOpeningMenu: !this.state.isOpeningMenu
      })
      if(this.state.isOpeningMenu) {
        menu.classList.remove('d-none');
        (setTimeout(()=> {
          menu.classList.add('mobile-menu-showUp')
          menuList.classList.add('mobile-menu-slideIn')
        }, 200))
      } else {
        menu.classList.remove('mobile-menu-showUp')
        menuList.classList.remove('mobile-menu-slideIn')
        (setTimeout(() => {
          menu.classList.add('d-none');
        }, 200))
      }
    }
    return

  }

  render() {
    return (
      <div>
        <Header
          webLink={this.state.webLink}
          toggleMenuBtn={this.toggleMenuBtn}
          isOpeningMenu={this.state.isOpeningMenu}></Header>
        <Main
          webLink={this.state.webLink}></Main>
      </div>
    );
  }
}

export default App;