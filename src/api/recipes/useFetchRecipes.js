import axios from "axios";
import {useDispatch} from "react-redux";
import {addRecipes, selectedRecipe} from "../../redux/actions";

// const {getAllRecipes} =  userFetchRecipes()
// custom hook : une fonction qui va retourner un certain nombre de propriétés.

const BASE_URL_API = "https://api.spoonacular.com/recipes";
const API_KEY = "e05e1e28af864d0c93f96bafca65fc1a";
const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
    const dispatch = useDispatch();

    const getAllRecipes = async (page) => {
        try {
            const response = await axios.get(BASE_URL_API + "/complexSearch", {
                params: {
                    apiKey: API_KEY,
                    number: MAX_PER_PAGE,
                    offset: page * MAX_PER_PAGE
                }
            });
            dispatch(addRecipes(response.data.results));
        }
        catch (e) {
            console.log("Error in getAllRecipes", e);
        }
    }

    const getRecipeById = async (id) => {
        try {
            const response = await axios.get(BASE_URL_API + "/" + id + "/information", {
                params: {
                    apiKey: API_KEY,
                }
            });
            console.log("response = ", response.data);
            dispatch(selectedRecipe(response.data));
        }
        catch (e) {
            console.error("Error in getRecipeById", e)
        }
    }

    return {
        getAllRecipes,
        getRecipeById
    }
}