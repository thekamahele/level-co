import React, { Component } from 'react'
import Header from './Header'
import Options from './Options'


class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Options />
        {this.props.children}
      </div>
      )
  }
}

export default Main