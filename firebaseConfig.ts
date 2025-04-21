import { getAnalytics } from "@react-native-firebase/analytics";
import { initializeApp } from "@react-native-firebase/app";


const credentials = {
    apiKey: "AIzaSyDqwFWQRCfms_aQBhUYvZZgqVLeW9HsjxA",
    projectId: "picklebay-968f9",
    appId: "1:793175627487:android:b4babcac4cad192b63bb6a"
 };

const app = initializeApp(credentials);

export const analytics = getAnalytics(app);

