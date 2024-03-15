import { View, Text, Image } from "react-native";
import React from "react";

export default function Sponsored() {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
      <View
        style={{
          backgroundColor: "#FEFBEA",
          height: 200,
          borderRadius: 10,
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View>
          <View style={{ justifyContent: "center", width: 160 }}>
            <Text style={{ marginBottom: 20 }}>Sponsored</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              মজাদার ম্যাগী এখন নতুন প্যাকে
            </Text>
            <Text style={{ marginTop: 5 }}>
              সবার প্রিয় ম্যাগী নুডুলস এখন নতুন প্যাকে
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#D70F64",
              width: 100,
              marginTop: 8,
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
              }}
            >
              জলদি কিনুন!
            </Text>
          </View>
        </View>
        <View style={{ height: 200, width: "50%" }}>
          <Image
            style={{ height: "90%", width: 180 }}
            source={require("../assets/maggi.png")}
          />
        </View>
      </View>
    </View>
  );
}
