import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-1 h-[90px] w-[90px] justify-betweenr items-center rounded-sm py-1">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-[50px] w-[50px] rounded"
      />
      <Text className="text-fonts font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
