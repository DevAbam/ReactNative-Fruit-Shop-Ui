import { Link, router } from "expo-router";
import { useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashPage = () => {
  return (
    <View className=" mx-4 mb-2">
      <View className="flex justify-center items-center">
        <Image source={require("../assets/mainBG.jpg")} blurRadius={90} />
      </View>
      <SafeAreaView className="absolute mt-1 flex w-full items-center">
        <Text className="mt-20 text-5xl font-bold text-slate-300">FRUITY</Text>
        <Text className="text-slate-300">for everyone</Text>

        <View className="">
          <Link
            href="/Shop"
            className="text-center  mt-96  bg-white p-5 w-[90%] rounded-lg"
          >
            <Text>Lets's Explore</Text>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SplashPage;
