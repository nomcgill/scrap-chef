import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Tooltip is a question mark in the upper-right corner of the app. 
// The simplicity of the app prevents much room for questions, but nonetheless this 
// component serves as a short explanation if a user feels directionless in the app.
export default class Tooltip extends React.Component {

  render(){
    const MySwal = withReactContent(Swal)
    return (
      <div id="tooltip" onClick={()=> {
        MySwal.fire({
          title: <p>Hello World</p>,
          footer: 'Copyright 2018',
          onOpen: () => {
            MySwal.clickConfirm()
          }
        }).then(() => {
          return MySwal.fire(
            {
              title: 'Welcome To Your Kitchen!',
              text: "Trying to put some specific kitchen ingredients to use? The Scrap Chef can help! Fill up your virtual kitchen here to find what's on your menu.",
              type: '',
              confirmButtonText: `Get Cookin'`
            }
          )
        })
      }}
      >?</div>
    );
  }
}
