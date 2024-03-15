import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { dishes, lunch } from "../Shared/Constant";

export default function PickUpRestaurant() {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Pick up at a restaurant near you
        <ImageBackground
          style={{ width: 320, paddingVertical: 15 }}
          source={require("../assets/map.jpg")}
        >
          <ScrollView horizontal={true}>
            {dishes.map((item) => {
              return (
                <View
                  style={{
                    backgroundColor: "white",
                    elevation: 1,
                    width: 250,
                    height: 250,

                    // borderBottomLeftRadius: 10,
                    // borderBottomRightRadius: 10,
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "70%",
                      resizeMode: "cover",
                      borderRadius: 10,
                    }}
                    source={item.pic}
                  />
                  {/* name,rating,sell */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 8,
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={{ fontWeight: "700" }}>{item.name} </Text>
                    <MaterialIcons
                      name="star-border-purple500"
                      size={20}
                      color="orange"
                    />
                    <Text>{item.rating} </Text>
                    <Text>{item.sell}</Text>
                  </View>
                  {/* taka,type */}

                  {/* fee,time */}
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ opacity: 0.6 }}> {item.distance} </Text>
                    <Text>| </Text>

                    <Text style={{ opacity: 0.6 }}> {item.pickTime}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </ImageBackground>
      </Text>
    </View>
  );
}
