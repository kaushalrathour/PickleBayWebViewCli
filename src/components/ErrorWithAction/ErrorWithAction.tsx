import { memo, useState } from "react";
import { ErrorWithActionType } from "../../types/ErrorWithActionType";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, RefreshControl } from "react-native";


const ErrorWithAction = memo(({ title, description, action, actionTitle }: ErrorWithActionType) => {
    const [refresh, setRefreshing] = useState<boolean>(false);
    
    return (
        <ScrollView contentContainerStyle={styles.container} refreshControl={
            <RefreshControl refreshing={false} onRefresh={action}/>}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity style={styles.button} onPress={action}>
                    <Text style={styles.buttonText}>{actionTitle}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8d7da',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#721c24',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#721c24',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#c82333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ErrorWithAction;
