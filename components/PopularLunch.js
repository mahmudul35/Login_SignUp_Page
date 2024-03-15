import { View, Text, ScrollView, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { lunch } from "../Shared/Constant";

export default function PopularLunch() {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Popular for Lunch
      </Text>
      {
        <ScrollView horizontal={true}>
          {lunch.map((item) => {
            return (
              <View
                style={{
                  //backgroundColor: "pink",
                  width: 250,
                  height: 250,
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ opacity: 0.6 }}>{item.taka} </Text>
                  <Text style={{ opacity: 0.6 }}>{item.type}</Text>
                </View>
                {/* fee,time */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <EvilIcons name="clock" size={20} color="black" />
                  <Text style={{ opacity: 0.6 }}> {item.time} </Text>
                  <Text>| </Text>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={16}
                    color="black"
                  />
                  <Text style={{ opacity: 0.6 }}> {item.fee}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      }
    </View>
  );
}
