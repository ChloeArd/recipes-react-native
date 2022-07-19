import {ADD_RECIPES, SELECTED_RECIPE, ADD_TASK, TOGGLE_TASK, DELETE_TASK} from "./actionsType";

// ALL RECIPES
export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    payload: {
        data
    }
});

// ONE RECIPE
export const selectedRecipe = (data) => ({
    type: SELECTED_RECIPE,
    payload: {
        data
    }
});

// ADD_TASK
export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: {
            title
        }
    }
}

// TOGGLE_TASK
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
});

// DELETE_TASK
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
});


