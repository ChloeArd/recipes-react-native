import React, {useEffect} from "react";
import {Text, Image, StyleSheet, View, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {getSelectedRecipe} from "../../redux/selectors";
import {useFetchRecipes} from "../../api/recipes/useFetchRecipes";
import Ingredient from "./ingredient";

export default function RecipesDetails ({route}) {
    const {id} = route.params;
    const {getRecipeById} = useFetchRecipes();

    const recipe = useSelector(getSelectedRecipe);

    useEffect(() => {
        getRecipeById(id);
    }, []);

    if (!recipe) {
        return <View />
    }

    return(
        <ScrollView>
            <Image source={{uri: recipe.image}} style={styles.image} />
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.caption}>Ready in {recipe.readyInMinutes}</Text>
            <Text style={styles.caption}>{recipe.summary}</Text>
            <View style={styles.containerIng}>
                <Text style={styles.titleIng}>Ingredients:</Text>
                {recipe.extendedIngredients?.map(ing => (
                    <Ingredient ing={ing}/>
                    )
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    caption: {
        textAlign: "center"
    },
    containerIng: {
        marginHorizontal: 16,
        marginVertical: 10,
        borderTopColor: "grey",
        borderTopWidth: 1,
        padding: 6
    },
    titleIng: {
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 20
    }
});