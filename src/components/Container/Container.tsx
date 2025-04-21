import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { ContainerProp } from "../../types/Container";

const Container = ({ children, backgroundColor, padding }: ContainerProp) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View
      style={[
        styles.container,
        padding
          ? {
              paddingHorizontal: padding.paddingHorizontal,
              paddingVertical: padding.paddingVertical,
            }
          : "", backgroundColor ? { backgroundColor } : "",]}>
      {children}
    </View>
    </SafeAreaView>
  );
};

export default Container;
