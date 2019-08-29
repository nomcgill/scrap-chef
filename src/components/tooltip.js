import React, { Component } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
              text: "This is Scrap Chef—an app where you can find options for ingredients that you're trying to put to use. Fill up your virtual kitchen here to find what's on your menu!",
              type: '',
              confirmButtonText: 'Sounds Good'
            }
          )
        })
      }}
      >?</div>
    );
  }
}
