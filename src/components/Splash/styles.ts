import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        opacity: 0.8,
    },
    contentContainer: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, 0)",
        gap: 20
    },
    splashImageLogo: {
        width: 57.89,
        height: 57.89
    },
    text: {
        color: "#1c4ba3",
        fontSize: 30,
        fontWeight: "900"
    }
})