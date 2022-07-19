import React from "react";
import {StyleSheet, Text, View} from "react-native";

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

export default function Header() {
    const date = new Date();

    return(
        <View style={styles.container}>
            <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
        paddingTop: 20
    },
    date: {
        fontSize: 26,
        fontWeight: "bold"
    }
});
