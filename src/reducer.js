import {ADD_TO_KITCHEN, REMOVE_FROM_KITCHEN, FIND_RECIPE, UPDATE_MENU, SAVE, LOG_IN, CREATE_USER, LOG_OUT, RESIZE, FIRST_CALL} from './actions';

let originalOptions = [
    {title: "Nothing yet!"},
    {title: "Add some ingredients from your kitchen!"}]

const initialState = {
    window: 800,
    username: false,
    _id: false,
    ingredients: ["Chicken", "Avocado", "Tomato"],
    options: originalOptions,
    recipes: [],
    selected: '',
    first: true
};

export const reducer = (state = initialState, action) => {
    if (action.type === RESIZE) {
        console.log("RESIZE")
        return Object.assign({}, state, {
            window: window.innerWidth
        })
    }

    if (action.type === LOG_OUT) {
        console.log("LOG_OUT")
        return initialState
    }

    if (action.type === ADD_TO_KITCHEN) {
        console.log("ADD_TO_KITCHEN")

        let ingredient = action.ingredient;
            
        return Object.assign({}, state, {
            ingredients: [...state.ingredients, ingredient]
        })
    }

    if (action.type === FIRST_CALL) {  
        console.log("FIRST_CALL")
        return Object.assign({}, state, {
            first: false
        })
    }

    if (action.type === REMOVE_FROM_KITCHEN) {
        console.log("REMOVE_FROM_KITCHEN")
        let array = [...state.ingredients]
        function checkIng(passed){
            return passed !== action.item
        }

        return Object.assign({}, state, {
            ingredients: array.filter(checkIng)
        })
    }

    if (action.type === UPDATE_MENU) {
        console.log("UPDATE_MENU")
        let newMenu = [...state.options].filter(function(passed){
            return passed === "None"
        })
        let newerMenu = [...newMenu, action.menu.results];
        let recipeStore = []
        newerMenu.forEach(function(food) {
            let href = food.href
            recipeStore.push(href)
        })
        // console.log(newMenu)
        return Object.assign({}, state, {
            options: newerMenu[0],
            recipes: recipeStore
        })
    }

    if (action.type === FIND_RECIPE) {
        console.log("FIND_RECIPE")
        let options = action.options
        let recipes = []
        options.map((option) => {
            recipes.push(option.href)
        })
        let choice = document.querySelector('input[name="meals"]:checked').value
        let recipeUrl = recipes[choice]
        if (choice){
            if (recipeUrl)
            window.open(recipeUrl)
        }
    }

    if (action.type === LOG_IN) {
        console.log("LOG_IN")
        let input = action.input

        return Object.assign({}, state, {
            username: input.user,
            ingredients: input.ingredients,
            _id: input._id,
            first: true
        })        
    }
    
    if (action.type === CREATE_USER) {
        console.log("CREATE_USER")
        return Object.assign({}, state, {
            username: action.newUser,
            _id: action.insertedId
        })   
    }

    if (action.type === SAVE) {
    }

    return state;

}