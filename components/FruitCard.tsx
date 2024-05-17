import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";
type TfruitCard = {
  id: number;
  name: string;
  image: any;
  bgColor: string;
  price: number;
  isFavourite: boolean;
};
type FruitCardProps = {
  card: TfruitCard;
  index: number;
};

const FruitCard = ({ card, index }: FruitCardProps) => {
  return (
    <View
      style={{ backgroundColor: card.bgColor }}
      className="h-[320px] w-52 rounded-2xl mr-4   "
    >
      <View className=" flex justify-around items-center h-[92%] my-auto w-[92%] mx-auto">
        <View className="  flex items-end justify-center  h-[15%] w-full">
          <Pressable
            className=" p-2 bg-neutral-200 rounded-full"
            onPress={() => {}}
          >
            <HeartIcon size={25} color={"white"} />
          </Pressable>
        </View>
        <View className="   h-[70%] w-full">
          <Image
            source={card.image}
            resizeMode="contain"
            className=" h-[100%] w-[100%]"
          />
        </View>
        <View className=" flex  h-[20%] w-full">
          <Text className=" text-white text-2xl">{card.name}</Text>
          <Text className=" text-white text-lg">{`Ghc${card.price}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default FruitCard;
