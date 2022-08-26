import classnames from 'classnames'
import React from 'react'
import './styles.scss'

const Fantastic = () => {
  return (
    <div className={classnames('fantastic')}>
      <div className={classnames('cover')}>
        <h3 className={classnames('title')}>Fantastic</h3>
      </div>
    </div>
  )
}

export default Fantastic