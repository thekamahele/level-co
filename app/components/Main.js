import React, { Component } from 'react'
import Header from './Header'
import Options from './Options'

const styles = {
  container: {
    width: '80%',
    border: 'solid 1px white',
    borderRadius: '10px',
    padding: '15px',
    margin: '0 auto'
  }
}
//TODO: refactor to stateless function component

class Main extends Component {

  render() {
    return(
      <div style={styles.container}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Header />
        <Options />
        </div>
        {this.props.children}
      </div>
      )
  }
}

export default Main

