import React from 'react';
import {connect} from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {logOut} from '../actions'

export function LoggedIn(props) {
    const username = props.username
    const MySwal = withReactContent(Swal)
    if (username){
        return (
            <div className="logged-in">
                <p>Logged in as:</p>
                <p className="chef">Chef <span className="current-username bold">{username}</span></p>
                <button 
                    type="button" 
                    name="Log Out" 
                    onClick={()=> {
                        MySwal.fire({
                            title: <p>Hello World</p>,
                            footer: 'Copyright 2018',
                            onOpen: () => {
                              MySwal.clickConfirm()
                            }
                          }).then(() => {
                            return MySwal.fire(
                              {
                                title: '',
                                text: "You've been logged out.",
                                type: 'info',
                                confirmButtonText: 'Okay'
                              }
                            )
                          })
                        props.dispatch(logOut())
                    }}>Log Out</button>
            </div>
        );
    }
    else {
        return (<div className="hidden"></div>)
    }
}

const mapStateToProps = state => ({
    username: state.username
  });
  
export default connect(mapStateToProps)(LoggedIn);