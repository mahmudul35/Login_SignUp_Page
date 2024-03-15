import { View, Text } from "react-native";
import React from "react";

export default function Boucher() {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
      <View
        style={{
          backgroundColor: "#D70F64",
          height: 80,
          borderRadius: 10,
          paddingHorizontal: 12,
          paddingVertical: 15,
        }}
      >
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          Earn a Tk100 voucher
        </Text>
        <Text style={{ color: "white", marginTop: 5 }}>
          when you refer a friend
        </Text>
      </View>
    </View>
  );
}
