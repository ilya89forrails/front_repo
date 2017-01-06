import React from 'react'
import styles from './Profile_top.css'

export default class ProfileTop extends React.Component {
  render() {
    return (
    	<div className={styles.profile} >
      		<img className={styles.image} src={this.props.photo} />
			<h3>{this.props.name}</h3>
			<label className={styles.location}>{this.props.location}</label>
			<hr />
		</div>
    )
  }
}