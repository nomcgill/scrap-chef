import {ADD_TO_KITCHEN, REMOVE_FROM_KITCHEN, FIND_RECIPE, UPDATE_MENU, LOG_IN, CREATE_USER, LOG_OUT, RESIZE} from './actions';
import * as actions from './actions';

const Sarah = {
    username: "Sarah",
    ingredients: ["cilantro", "chicken", "sour cream"]
}

var originalOptions = [
    {title: "Nothing yet!"},
    {title: "Add some ingredients from your kitchen!"}]

const initialState = {
    window: 800,
    username: "Sarah",
    ingredients: ["eggs", "milk", "bread"],
    options: originalOptions,
    recipes: [],
    selected: ''
};

export const reducer = (state = initialState, action) => {
    if (action.type === RESIZE) {
        return Object.assign({}, state, {
            window: window.innerWidth
        })
    }

    if (action.type === LOG_OUT) {
        console.log("Log Out Click")
        return Object.assign({}, state, {
            window: window.innerWidth,
            username: false,
            ingredients: ["eggs", "milk", "bread"],
            options: originalOptions,
            selected: ''
        });
    }

    if (action.type === ADD_TO_KITCHEN) {
        let ingredient = action.ingredient;
                
        return Object.assign({}, state, {
            ingredients: [...state.ingredients, ingredient]
        })
    }

    if (action.type === REMOVE_FROM_KITCHEN) {
        let item = action.item;
        var array = [...state.ingredients]
        var index = state.ingredients.indexOf(item)
        array.splice(index, 1);

        return Object.assign({}, state, {
            ingredients: array
        })
    }

    if (action.type === UPDATE_MENU) {
        let newMenu = action.menu.results;
        var recipeStore = []
        newMenu.forEach(function(food) {
            var href = food.href
            recipeStore.push(href)
        })

        return Object.assign({}, state, {
            options: newMenu,
            recipes: recipeStore
        })
        
    }
    
    if (action.type === FIND_RECIPE) {
        let choice = action.choice;
        console.log("fetching " + choice)

        //API for finding recipe based on CHOICE
 
    }

    



    return state;

}