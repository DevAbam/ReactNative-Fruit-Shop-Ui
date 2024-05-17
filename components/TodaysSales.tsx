import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const TodaysSales = () => {
  return (
    <View className="mt-5">
      <View className=" bg-lime-100 h-20 w-20 flex items-center justify-around mr-6 rounded-xl">
        <View className="my-auto h-[75%] w-[90%] ">
          <Image
            source={require("../assets/strawberryPic.png")}
            resizeMode="contain"
            className="h-full w-full"
          />
        </View>
        <Text>Ghc2.99</Text>
      </View>
    </View>
  );
};

export default TodaysSales;
