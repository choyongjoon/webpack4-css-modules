import React from 'react'

import classes from './GreenContainer.scss'

export default class GreenContainer extends React.Component {
  render () {
    return (
      <div className={`bg-primary ${classes.greenContainer}`} />
    )
  }
}
