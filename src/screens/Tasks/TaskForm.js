import React, {useState} from "react";
import {StyleSheet, TextInput, Button, View} from "react-native";
import {useDispatch} from "react-redux";

import {addTask} from "../../redux/actions";

export default function TaskForm() {

    const [newTitle, setNewTitle] = useState();
    const dispatch = useDispatch();

    const onChangeText = (val) => {
        setNewTitle(val);
    }

    const onAddNewTask = () => {
        if (newTitle === "") return
        dispatch(addTask(newTitle));
        setNewTitle("");
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={newTitle} placeholder="Nouvelle tâche" />
            <Button title="Ajouter" onPress={onAddNewTask} color="blue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        margin: 20,
        color: "grey",
        width: "70%"
    }
});