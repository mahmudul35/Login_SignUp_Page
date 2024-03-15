import { View, Text, Image } from "react-native";
import React from "react";

export default function Rewards() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 15,
        marginTop: 10,
      }}
    >
      <View
        style={{
          height: 90,
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 10,
          alignItems: "center",
          elevation: 1,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Try panda rewards!
          </Text>
          <Text>Earn points and win prize</Text>
        </View>
        <View>
          <Image
            style={{ height: 50, width: 70 }}
            source={require("../assets/picture1.png")}
          />
        </View>
      </View>
    </View>
  );
}
