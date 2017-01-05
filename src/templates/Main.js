import React from 'react'
import Profile from '../components/Profile/Profile'
import Profile_info from '../components/Profile_info/Profile_info'


export default class Home extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <Profile name="Kirsten McKellar" location="Cape Town, RSA" 
          photo="https://s3.eu-central-1.amazonaws.com/assets-mkdev/courses/frontend/person-userpic.png"/>
          <Profile_info nickname="Killa Kella" tel="072 143 9920" 
          birthday="July 12, 1988" gender="Female" language="English" />
          <br/>
          <br/>
          <Profile name="Bart Simpson" location="Springfield, USA" 
          photo="http://abali.ru/wp-content/uploads/2014/01/Bart-Simpson-01-icon.png"/>
          <Profile_info nickname="Bartman" tel="555-55-55" 
          birthday="Apil 17, 1987" gender="Male" language="English" />
        </body>
      </html>
    )
  }
}