import React, {useState} from "react";
import Header from "../../components/Header";
import {FlatList, View, StyleSheet, SafeAreaView} from "react-native";
import TaskTile from "./TaskTile";
import TaskForm from "./TaskForm";
import FloatingBtn from "../../components/FloatingBtn";
import Counter from "../../components/Counter";
import {useSelector, useDispatch} from "react-redux";
import {getTasks} from "../../redux/selectors";
import {toggleTask, deleteTask} from "../../redux/actions";

export default function TasksScreen() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();

    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
    }

    const onDeleteTask = (id) => {
       dispatch(deleteTask(id))
    }

    const onUpdateTask = (id) => {
        dispatch(toggleTask(id));
    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                ListHeaderComponent={
                <>
                    <Header />
                    {isFormVisible && <TaskForm />}
                    <View style={styles.containerCounters}>
                        <Counter nb={tasks.length} title="Tâches crées" />
                        <Counter nb={tasks.filter(t => t.isCompleted === true).length} title="Tâches effectuées" />
                    </View>
                </>}

                // onEndReached={() => loadData()} // scroll de l'ecran de manière infini
                contentContainerStyle={{flexGrow: 1}}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerCounters: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: 20
    }
});