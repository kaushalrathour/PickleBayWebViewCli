import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, View, ImageBackground, Text, Animated, LayoutChangeEvent } from "react-native";
import { styles } from "./styles";
import { IMAGES } from "../../constants/IMAGES";

export default function SplashScreen() {
    const [text1, setText1] = useState("");
    const [showImage, setShowImage] = useState(false);

    const displayText = useCallback(()=>{
        const fullText1 = "Picklebay";
        let index1 = 0;
        const interval = setInterval(() => {
            if (index1 < fullText1.length) {
                setText1((preText) => {
                    index1++;
                    return preText + fullText1[index1 - 1];
                });
            }
        },50);
        return ()=> clearInterval(interval);
    },[])

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setShowImage(true);
            displayText();
        },200)
        return ()=> clearTimeout(timeout);
    }, []);



    return (
        <View style={styles.container}>
            <View style={styles.contentContainer} >
            {showImage && <Image source={IMAGES.Logo} style={styles.splashImageLogo} />}
                
                <View>
                    <Text style={[styles.text]}>{text1}</Text>
                </View>
            </View>
        </View>
    );
}
