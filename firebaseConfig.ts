import { getAnalytics } from "@react-native-firebase/analytics";
import { initializeApp } from "@react-native-firebase/app";
import {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_APP_ID
} from '@env';

const credentials = {
    apiKey: FIREBASE_API_KEY,
    projectId: FIREBASE_PROJECT_ID,
    appId: FIREBASE_APP_ID
};

const app = initializeApp(credentials);

export const analytics = getAnalytics(app);

