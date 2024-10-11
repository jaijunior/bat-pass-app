import React, { useState } from "react";
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { Menu } from "../../components/Menu/Menu";

export default function Home() {
    return (
        <View style={styles.container}>
            <Menu></Menu>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

