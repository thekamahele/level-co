import React, { Component } from 'react'
import Header from './Header'
import Options from './Options'
import { styles } from '../styles/styles'

const Main = ({children}) => {
  return (
    <div>
      <div style={styles.mainContainer}>
        <Header />
        <Options />
      </div>
      {children}
    </div>
  )
}

export default Main

