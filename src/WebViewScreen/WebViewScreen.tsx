import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  RefreshControl,
  ScrollView,
  Text,
  View
} from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
import { picklebayUrl } from "../constants/data";
import analytics from "@react-native-firebase/analytics";
import ErrorWithAction from "../components/ErrorWithAction/ErrorWithAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WebViewScreen = () => {
  const [uri, setUri] = useState(picklebayUrl);
  const [currentUri, setCurrentUri] = useState<string>("");
  const webviewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState<boolean>(false);
  const [networkError, setNetworkError] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const backButtonHandler = () => {
    if (canGoBack && webviewRef.current) {
      (webviewRef.current as WebView).goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    return () => backHandler.remove();
  }, [canGoBack]);

  const handleNavigationChange = async (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
    const { url } = navState;
    setCurrentUri(url);
    try {
      await analytics().logEvent("webview_navigation", {
        url,
      });
      console.log("Logged Event");
    } catch (err) {
      console.warn("Failed to log analytics event:", err);
    }
  };

  const handleLoading = ()=> {
    return(
      <View style={{flex: 1, alignItems: "center"}}>
          <Text>Loading...</Text>
          <ActivityIndicator size={"large"} color={"#1c4ba3"} />
      </View>
    )
  }

  const handleRetry = ()=> {
    setUri(picklebayUrl);
    setNetworkError(false);
  }

  const onRefresh = () => {
    if(currentUri === "") return;
    setRefreshing(true);
    setUri(currentUri);
    setRefreshing(false);
  }
  useEffect(()=>{
    const saveCurrentUri = async ()=> {
      if(currentUri === "") return;
      await AsyncStorage.setItem("currentUri", currentUri);
    }
    saveCurrentUri();
  },[currentUri]);

  useEffect(() => {
    const getLastVisitedUrl = async () => {
      try {
        const lastUrl = await AsyncStorage.getItem("currentUri");
        if (lastUrl) {
          setCurrentUri(lastUrl);
          setUri(lastUrl);
        }
      } catch (error) {
        console.warn("Failed to get last visited URL:", error);
      }
    };
    getLastVisitedUrl();
  }, []);
  
  return (
    <ScrollView contentContainerStyle={{flex: 1}} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {networkError && 
      <ErrorWithAction 
        title={"Network Error"} 
        description={"Please make sure that you're connected to the internet. Click on retry or pull to refresh"} 
        action={handleRetry} 
        actionTitle={"Retry"}
      /> ||
      <WebView
        style={{flex: 1}}
        ref={webviewRef}
        source={{ uri }}
        onNavigationStateChange={handleNavigationChange}
        startInLoadingState={true}
        onLoad={handleLoading}
        onError={({nativeEvent}: any)=>{
          if(nativeEvent.description==="net::ERR_INTERNET_DISCONNECTED") {
            setNetworkError(true);
          }
        }}
        pullToRefreshEnabled={true}
        removeClippedSubviews
        renderLoading={handleLoading}/>}
    </ScrollView>
  );
};

export default WebViewScreen;
