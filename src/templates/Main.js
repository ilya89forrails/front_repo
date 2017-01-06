import React from 'react'
import Profile_top from '../components/Profile_top/Profile_top'
import Profile_info from '../components/Profile_info/Profile_info'


  var profiles = [
            {
                name: 'Kirsten McKellar',
                location: 'Cape Town, RSA',
                photo: 'https://s3.eu-central-1.amazonaws.com/assets-mkdev/courses/frontend/person-userpic.png',
                nickname: 'Killa Kella',
                tel: '072 143 9920',
                birthday: 'July 12, 1988',
                gender: 'Female',
                language: 'English'
            }, {
                name: 'Bart Simpson',
                location: 'Springfield, USA',
                photo: 'http://abali.ru/wp-content/uploads/2014/01/Bart-Simpson-01-icon.png',
                nickname: 'Bartman',
                tel: '555-55-55',
                birthday: 'Apil 17, 1987',
                gender: 'Male',
                language: 'English'
            }
        ];



  var gallery = profiles.map(function(person) {
      return (
        <div className="profile">
          
          <Profile_top name={person.name} location={person.location} 
          photo={person.photo}/>

          <Profile_info nickname={person.nickname} tel={person.tel} 
          birthday={person.birthday} gender={person.gender} language={person.language} />

        </div>
          )
    });




export default class Main extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          {gallery}
        </body>
      </html>
    )
  }
}

