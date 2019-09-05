
import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

var herokuAPIEndpoint = "https://scrap-chef-server.herokuapp.com/"

export const updateState = (key, value)=> dispatch=>{
    dispatch({
          type:'UPDATE_STATE',
          key, value
        })
    return Promise.resolve()
    }

export const ADD_TO_KITCHEN = 'ADD_TO_KITCHEN';
export const addToKitchen = ingredient => ({
    type: ADD_TO_KITCHEN,
    ingredient
});

export const REMOVE_FROM_KITCHEN = 'REMOVE_FROM_KITCHEN';
export const removeFromKitchen = item => ({
    type: REMOVE_FROM_KITCHEN,
    item
});

export const FIND_RECIPE = 'FIND_RECIPE';
export const findRecipe = recipes => ({
    type: FIND_RECIPE,
    recipes
});

export const UPDATE_MENU = 'UPDATE_MENU';
export const updateMenu = menu => ({
    type: UPDATE_MENU,
    menu
});

export const fetchMenu = (ingredients) => dispatch => {
    console.log("FETCHING!!!")
    const recipePuppy = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api?i='
    var joinedIngredients = ingredients.join(', ')
    fetch(recipePuppy + joinedIngredients + '&p=' + 1)
        .then(res => {
            // console.log("fetched! waiting...")
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(menu => {
            dispatch(updateMenu(menu));
        });
}

export const LOG_IN = 'LOG_IN';
export const logIn = input => ({
    type: LOG_IN,
    input
});

export const atlasLogIn = (userInput) => dispatch => {
    const MySwal = withReactContent(Swal)
    var GETbyUsernameURL = herokuAPIEndpoint + `find?user=` + userInput
    fetch (GETbyUsernameURL)
    .then(response => {
        if (response.status === 404) {
            throw new Error (response.status + `: Username not found.`);
        }
        if (response.status === 200) {
            return response.json();
        }
    })
    .then(data => {
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
                text: "Welcome back, Chef " + data.user + "!",
                type: 'success',
                confirmButtonText: `Let's Get Cookin'.`
              }
            )
          })
          dispatch(logIn(data))
    })
    .catch (error => {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            onOpen: () => {
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(
              {
                title: 'Hmm...',
                text: error,
                type: 'error',
                confirmButtonText: 'Okay'
              }
            )
          })
    });
}

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
    type: LOG_OUT
});

export const RESIZE = 'RESIZE';
export const resize = () => ({
    type: RESIZE
});

export const SAVE = 'SAVE'
export const save = () => ({
    type: SAVE
})

export const trySave = (id, user, ingredients) => dispatch => {
    const MySwal = withReactContent(Swal)
    var postURL = herokuAPIEndpoint + `users/` + id
    var data = {
        _id: id,
        user: user,
        ingredients: ingredients
    };

    fetch(postURL, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error (response.statusText);
    })
    .then( response => {
        dispatch(save())
        return response
    })
    .then( response => {
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
                text: response.message,
                type: 'success',
                confirmButtonText: `Back to Cookin'.`
              }
            )
          })
    })
    .catch (error => {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            onOpen: () => {
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(
              {
                title: 'Hmm...!',
                text: error,
                type: 'error',
                confirmButtonText: 'Okay'
              }
            )
          })
    });
}

export const CREATE_USER = 'CREATE_USER';
export const createUser = (newUser, insertedId) => ({
    type: CREATE_USER,
    newUser,
    insertedId
});

export const atlasCreate = (userInput, ingredients) => dispatch => {
    const MySwal = withReactContent(Swal)
    var postURL = herokuAPIEndpoint + `users/`
    var data = {
        user: userInput,
        ingredients: ingredients
    };
    console.log(data)

    fetch(postURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        console.log(response.statusText)
        throw new Error (response.statusText);
    })
    .then(response => {
        if (response.message === "User already exists."){
            throw new Error (response.message)
        }
        return response
    })
    .then( response => {
        dispatch(createUser(response.newUser, response.insertedId))
        return response
    })
    .then( response => {
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
                text: "Welcome, Chef " + response.newUser + "!",
                type: 'success',
                confirmButtonText: `Let's Get Cookin'.`
              }
            )
          })
    })
    .catch (error => {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            onOpen: () => {
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(
              {
                title: 'Hmm...!',
                text: error,
                type: 'error',
                confirmButtonText: 'Okay'
              }
            )
          })
    });

}
