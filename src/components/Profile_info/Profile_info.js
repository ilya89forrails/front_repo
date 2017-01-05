import React from 'react'
import styles from './Profile_info.css'

export default class CoolButton extends React.Component {
  render() {
    return (
      <table className={styles.info}>
			<tr>
				<td className={styles.title}>Nickname:</td>
				<td className={styles.descr}>{this.props.nickname}</td>
			</tr>
			<tr>
				<td className={styles.title}>Tel:</td>
				<td className={styles.descr}>{this.props.tel}</td>
			</tr>
			<tr>
				<td className={styles.title}>Date Of Birth:</td>
				<td className={styles.descr}>{this.props.birthday}</td>
			</tr>
			<tr>
				<td className={styles.title}>Gender:</td>
				<td className={styles.descr}>{this.props.gender}</td>
			</tr>
			<tr>
				<td className={styles.title}>Language:</td>
				<td className={styles.descr}>{this.props.language}</td>
			</tr>
		</table>
    )
  }
}