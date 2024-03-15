import { View, Text, Image } from "react-native";
import React from "react";

export default function DeliveryOption() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            borderRadius: 10,
            padding: 10,
            width: "50%",
            height: 135,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Food Delivery
          </Text>
          <Text>Order food you love</Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <Image
              style={{ height: 100, width: 80 }}
              source={require("../assets/biriyani.png")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            width: "50%",
            height: 135,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Pick Up</Text>
          <Text>Save upto 40%</Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <Image
              style={{ height: 100, width: 90, resizeMode: "center" }}
              source={require("../assets/pickup.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            width: "50%",
            height: 85,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Dine in</Text>
            <Text>Get out to eat</Text>
            <Text>for 25% off</Text>
          </View>
          <View>
            <Image
              style={{
                height: 80,
                width: 80,
                resizeMode: "center",
                resizeMode: "center",
              }}
              source={require("../assets/foodFry.png")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            borderRadius: 10,
            padding: 10,
            width: "50%",
            height: 85,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Pandago</Text>
            <Text>Parcel gifts</Text>
            <Text>with 20% off!</Text>
          </View>
          <View>
            <Image
              style={{
                height: 80,
                width: 80,
                resizeMode: "center",
                resizeMode: "center",
              }}
              source={require("../assets/foodFry.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
