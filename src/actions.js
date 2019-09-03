
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
export const findRecipe = choice => ({
    type: FIND_RECIPE,
    choice
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
export const logIn = () => ({
    type: LOG_IN
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = () => ({
    type: CREATE_USER
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
    type: LOG_OUT
});

export const RESIZE = 'RESIZE';
export const resize = () => ({
    type: RESIZE
});