import classnames from 'classnames'
import React from 'react'
import './styles.scss'

const Main = () => {
  return (
    <div className={classnames('main')}>
      <div className={classnames('cover')}>
        <h3 className={classnames('title')}>Main Page</h3>
      </div>
    </div>
  )
}

export default Main