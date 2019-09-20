import React from 'react';
import {connect} from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { tryLogOut } from '../actions'
import { trySave } from '../actions'

//This profile page displays while user is logged in. User can save kitchen with trySave() or log out with logOut().
export function LoggedIn(props) {
    const username = props.username
    const MySwal = withReactContent(Swal)
    if (username){
        return (
            <div className="logged-in">
                <p>Logged in as:</p>
                <p className="chef">Chef <span className="current-username bold">{username}</span></p>
                <div className="log-out-options">
                    <button
                        type="button"
                        name="SAVE"
                        className="save"
                        onClick={() => {
                            props.dispatch(trySave(
                                props._id,
                                props.username,
                                props.ingredients
                            ))
                        }}>
                    Save Kitchen
                    </button>
                    or
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
                            props.dispatch(tryLogOut())
                        }}>Log Out
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (<div className="hidden"></div>)
    }
}

const mapStateToProps = state => ({
    username: state.username,
    ingredients: state.ingredients,
    _id: state._id
  });
  
export default connect(mapStateToProps)(LoggedIn);