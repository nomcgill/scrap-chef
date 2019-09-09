import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


// Missing is currently unused, but is a feature which will be implemented upon further app development.
// When menu item is selected, unused ingredients from the kitchen will be listed.
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
