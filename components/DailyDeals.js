import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { picture } from "../Shared/Constant";
export default function DailyDeals() {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
        Your Daily Deals
      </Text>

      <ScrollView horizontal={true}>
        {picture.map((item) => {
          return (
            <View
              style={{
                // backgroundColor: "pink",
                // height: 150,
                // width: 150,
                marginRight: 10,
                marginBottom: 5,
                // borderRadius: 10,
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: 150,
                  width: 145,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
