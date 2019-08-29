import React, { Component } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function Missing(props) {
    
    const theMissing = props.theMissing.join(', ')
    const MySwal = withReactContent(Swal)
    
    return (
        <div className="recipe-info-left">
            <p><u>Your kitchen still needs</u> :</p>
            <p className="missing-ingredients" 
            onClick={()=> {
                MySwal.fire({
                  title: <p>Missing Ingredients</p>,
                  footer: 'Copyright 2018',
                  onOpen: () => {
                    MySwal.clickConfirm()
                  }
                }).then(() => {
                  return MySwal.fire(
                    {
                      title: 'Missing from recipe:',
                      text: theMissing,
                      type: '',
                      confirmButtonText: 'Got it.'
                    }
                  )
                })
              }}
            >{theMissing}</p>
        </div>
    );
};

Missing.defaultProps = {
    text: 'None.'
};
