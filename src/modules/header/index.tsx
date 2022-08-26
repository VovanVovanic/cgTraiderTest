
import classnames from 'classnames'
import React from 'react'
import './styles.scss'
import Navigation from '../../components/navigation'

const Header = () => {
  return (
    <header className={classnames('header')}>
      <div className={classnames('overlay')}>
        <h1 className={classnames('title')}>90s Shop</h1>
      </div>
    </header>
  )
}

export default Header