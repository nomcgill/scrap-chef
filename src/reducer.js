import {ADD_TO_KITCHEN, REMOVE_FROM_KITCHEN, FIND_RECIPE, UPDATE_MENU, SAVE, LOG_IN, CREATE_USER, LOG_OUT, RESIZE} from './actions';

var originalOptions = [
    {title: "Nothing yet!"},
    {title: "Add some ingredients from your kitchen!"}]

const initialState = {
    window: 800,
    username: false,
    _id: false,
    ingredients: ["banana", "bread", "strawberry"],
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
        let recipes = action.recipes
        var choice = document.querySelector('input[name="meals"]:checked').value
        var recipeUrl = recipes[choice]
        if (choice){
            window.open(recipeUrl)
        }
    }

    if (action.type === LOG_IN) {
        var input = action.input

        return Object.assign({}, state, {
            username: input.user,
            ingredients: input.ingredients,
            _id: input._id
        })
        
    }
    
    if (action.type === CREATE_USER) {

        return Object.assign({}, state, {
            username: action.newUser,
            _id: action.insertedId
        })   
    }
    
    if (action.type === SAVE) {
    }



    return state;

}