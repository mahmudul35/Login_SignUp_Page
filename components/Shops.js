import { View, Text, Image } from "react-native";
import React from "react";

export default function Shops() {
  return (
    <View
      style={{ paddingHorizontal: 16, paddingVertical: 10, marginBottom: 10 }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
        Shops
      </Text>
      <View
        style={{ flexDirection: "row", justifyContent: "flex-start", gap: 8 }}
      >
        {/* groceries start here */}
        <View>
          <View
            style={{
              backgroundColor: "#eae9e9",
              width: 70,
              height: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 60 }}
              source={require("../assets/groceries.png")}
            />
          </View>
          <View>
            <Text style={{ marginLeft: 3, fontWeight: "500" }}>Groceries</Text>
          </View>
        </View>
        {/* groceries start here */}
        <View>
          <View
            style={{
              backgroundColor: "#eae9e9",
              width: 70,
              height: 60,
              marginLeft: 8,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 60 }}
              source={require("../assets/convenience.png")}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "500" }}>Convenience</Text>
          </View>
        </View>
        {/* groceries start here */}
        <View>
          <View
            style={{
              backgroundColor: "#eae9e9",
              width: 70,
              height: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 60, resizeMode: "center" }}
              source={require("../assets/butchery.png")}
            />
          </View>
          <View>
            <Text style={{ marginLeft: 5, fontWeight: "500" }}>Butchery</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
