import { PermissionsAndroid, Platform } from "react-native";

const requestLocationAccess = async () => {
    try {
        if (Platform.OS === "android") {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return false;
    } catch (error) {
        console.error("Error requesting location access:", error);
        return false;
    }
};

const requestCameraAccess = async () => {
    try {
        if (Platform.OS === "android") {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return false;
    } catch (error) {
        console.error("Error requesting camera access:", error);
        return false;
    }
};

const requestMediaLibraryAccess = async () => {
    try {
        if (Platform.OS === "android") {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return false;
    } catch (error) {
        console.error("Error requesting media library access:", error);
        return false;
    }
};

const checkPermissions = async () => {
    const locationGranted = await requestLocationAccess();
    const cameraGranted = await requestCameraAccess();
    const mediaGranted = await requestMediaLibraryAccess();

    if (locationGranted) {
        console.log("Location access granted");
    } else {
        console.log("Location access denied");
    }

    if (cameraGranted) {
        console.log("Camera access granted");
    } else {
        console.log("Camera access denied");
    }

    if (mediaGranted) {
        console.log("Media library access granted");
    } else {
        console.log("Media library access denied");
    }
};


export { requestLocationAccess, requestCameraAccess, requestMediaLibraryAccess, checkPermissions };

