import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import Colors from "../Shared/Colors";

export default function Header() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "#D70F64",
        // height: 100,
      }}
    >
      <StatusBar backgroundColor="#D70F64" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="menu-outline" size={28} color="white" />
        <View style={{ marginHorizontal: 16 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Jor Bangla Road
          </Text>
          <Text style={{ color: "white" }}>Pabna</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <EvilIcons name="heart" size={28} color="white" />
        <Ionicons name="cart-outline" size={28} color="white" />
      </View>
    </View>
  );
}
