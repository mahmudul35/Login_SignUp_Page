import { View, Text, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

export default function SearchBar() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginHorizontal: 16,
        borderRadius: 50,
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <EvilIcons name="search" size={24} color="black" />
      <TextInput
        placeholder="Search for shops & restaurants"
        style={{ width: "100%" }}
      />
    </View>
  );
}
