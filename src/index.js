import styles from './app.css'

let element = 

`	<div class="${styles.profile}">
		<img class="${styles.profile__image}" src="https://s3.eu-central-1.amazonaws.com/assets-mkdev/courses/frontend/person-userpic.png">
			<h3>Kirsten McKellar</h3>
			<label class="${styles.profile__location}">Cape Town, RSA</label>
			<hr>
		<table class="${styles.profile_info}">
			<tr>
				<td class="${styles.profile_info__title}">Nickname:</td>
				<td class="${styles.profile_info__descr}">Killa Kella</td>
			</tr>
			<tr>
				<td class="${styles.profile_info__title}">Tel:</td>
				<td class="${styles.profile_info__descr}">072 143 9920</td>
			</tr>
			<tr>
				<td class="${styles.profile_info__title}">Date Of Birth:</td>
				<td class="${styles.profile_info__descr}">July 12, 1988</td>
			</tr>
			<tr>
				<td class="${styles.profile_info__title}">Gender:</td>
				<td class="${styles.profile_info__descr}">Female</td>
			</tr>
			<tr>
				<td class="${styles.profile_info__title}">Language:</td>
				<td class="${styles.profile_info__descr}">English</td>
			</tr>
		</table>
	</div>
`

document.write(element);