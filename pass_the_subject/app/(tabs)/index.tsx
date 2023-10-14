import {StyleSheet, SafeAreaView, ScrollView, Platform, RefreshControl} from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from "lottie-react-native";
import {createRandomUser} from "../../utils/generate-dommy-data";

export default function TabOneScreen() {
    const animationRef = React.useRef<Lottie>(null)
  return (
   <SafeAreaView style={{flex:1}}>
     <ScrollView
         contentContainerStyle={{
             paddingHorizontal: 10,
             paddingTop: Platform.select({android: 30}),
         }}
         refreshControl={
             <RefreshControl
                 refreshing={false}
                 onRefresh={() => {
                     animationRef.current?.resume();
                 }}
                 tintColor={"transparent"}
             />
         }
     >
       <Lottie
       ref={animationRef}
       source={require("../../lottie-animations/reload_anim.json")}
       loop={false}
       autoPlay
       style={{
         width: 90,
         height: 90,
         alignSelf: "center",
       }}
       /*onAnimationFinish={() => {
           alert("Animation finished");
       }}*/
       />
     </ScrollView>
   </SafeAreaView>
  );
}
