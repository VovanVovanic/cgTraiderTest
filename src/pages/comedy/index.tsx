import classnames from 'classnames'
import React from 'react'
import './styles.scss'

const Comedy = () => {
  return (
    <div className={classnames('comedy')}>
      <div className={classnames('cover')}>
        <h3 className={classnames('title')}>Comedy</h3>
      </div>
    </div>
  )
}

export default Comedy