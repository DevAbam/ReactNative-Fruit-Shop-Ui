import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Bars3BottomLeftIcon } from "react-native-heroicons/solid";
import { ShoppingCartIcon } from "react-native-heroicons/solid";

import { categories } from "../../constants/data";
import { useState } from "react";
import FruitCard from "@/components/FruitCard";
import { carouselContent } from "@/constants/data";
import TodaysSales from "@/components/TodaysSales";

type TfruitCard = {
  id: number;
  name: string;
  image: any;
  bgColor: string;
  price: number;
  isFavourite: boolean;
};
type TCategories = {
  id: number;
  fruitName: string;
};

const home = () => {
  const [activeCat, setActiveCat] = useState<string>("coconut");
  const [cardItems, setCardItems] = useState<TfruitCard[] | []>(
    carouselContent
  );
  const [favFruit, setFavFruit] = useState([]);

  return (
    <SafeAreaView className=" ml-5 mt-3">
      <StatusBar style="dark" />
      <View className="flex-row  justify-between items-center">
        <Bars3BottomLeftIcon size={30} color={"black"} />
        <View className=" bg-slate-50 mr-5 h-9 w-9 p-2 rounded-lg flex items-center justify-center">
          <ShoppingCartIcon size={30} color={"green"} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-3xl font-semibold text-slate-700">Seasonal</Text>
        <Text className="text-3xl font-semibold text-slate-800">
          Fresh Fruits
        </Text>
        <ScrollView
          className="mb-5"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item: TCategories, index: number) => {
            return (
              <Pressable
                key={item.id}
                onPress={() => {
                  setActiveCat(item.fruitName);
                }}
              >
                <Text
                  style={
                    item.fruitName == "coconut" ? { color: "green" } : null
                  }
                  className={
                    item.fruitName == activeCat
                      ? "mr-5 mt-5 text-green-500 font-medium text-lg"
                      : "mr-5 mt-5 text-slate-500 font-medium text-lg"
                  }
                >
                  {item.fruitName}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cardItems.map((card: TfruitCard, index: number) => {
            return <FruitCard card={card} key={index} index={index} />;
          })}
        </ScrollView>
        <Text className="text-lg font-semibold text-slate-700 mt-4">
          Today's Sales
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TodaysSales />
          <TodaysSales />
          <TodaysSales />
          <TodaysSales />
          <TodaysSales />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default home;
