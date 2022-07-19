import React from "react";
import {Pressable, Image, StyleSheet, Text, View} from "react-native";

export default function TaskTile({task, onUpdateTask, onDeleteTask}) {

    const onChangeStatus = () => {
        onUpdateTask(task.id);
    }

    const _onDeleteTask = () => {
        onDeleteTask(task.id);
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={onChangeStatus} style={styles.subContainer}>
                <Image style={styles.check} source={task.isCompleted ? require("../../../assets/icons/check_circle_FILL0_wght400_GRAD0_opsz48.png") : require("../../../assets/icons/circle_FILL0_wght400_GRAD0_opsz48.png")} />
                <Text style={styles.title}>{task.title}</Text>
            </Pressable>
            <Pressable onPress={_onDeleteTask}>
                <Image style={styles.check} source={require("../../../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.png")} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        marginLeft: 20,
        fontSize: 16
    },
    check: {
        width: 40,
        height: 40
    }
});
