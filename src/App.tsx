import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./components/Container/Container";
import WebView from "react-native-webview";
import { picklebayUrl } from "./constants/data";
import SplashScreen from "./components/Splash/Splash";
import { checkPermissions } from "./helpers/requestPermissions";
import { BackHandler, LogBox } from "react-native";
import WebViewScreen from "./WebViewScreen/WebViewScreen";


const App = ()=>{
  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    LogBox.ignoreAllLogs();
    const timer = setTimeout(()=>{
      setLoading(false);
    },3500)
    return ()=> clearTimeout(timer);
  },[]);

  useEffect(()=>{
    if(!loading) {
      checkPermissions();
    }
  },[loading]);
  
  
  return(
    <Container>
      {loading &&  <SplashScreen/> || <WebViewScreen/>}
    </Container>
  )
}

export default App;