
import classnames from 'classnames'
import React from 'react'
import './styles.scss'
import Navigation from '../../components/navigation'
import { PageInfoType } from '../../types'

interface HeaderType{
  setPageInfo: (info: PageInfoType)=>void
}
const Header: React.FC<HeaderType> = ({setPageInfo}) => {
  return (
    <header className={classnames('header')}>
      <div className={classnames('overlay')}>
        <h1 className={classnames('title')}>90s Shop</h1>
        <Navigation setPageInfo={setPageInfo} />
      </div>
    </header>
  )
}

export default Header