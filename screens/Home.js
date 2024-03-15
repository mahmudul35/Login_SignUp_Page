import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DeliveryOption from "../components/DeliveryOption";
import DailyDeals from "../components/DailyDeals";
import Sponsored from "../components/Sponsored";
import PopularRestaurant from "../components/PopularRestaurant";
import OrderAgain from "../components/OrderAgain";
import PopularLunch from "../components/PopularLunch";
import PickUpRestaurant from "../components/PickUpRestaurant";
import BecomePro from "../components/BecomePro";
import Shops from "../components/Shops";
import Boucher from "../components/Boucher";
import Rewards from "../components/Rewards";
import Recommended from "../components/Recommend";

export default function Home() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "#D70F64" }}>
          <Header />
          <SearchBar />
        </View>
        <DeliveryOption />
        <Sponsored />
        <OrderAgain />
        <PopularRestaurant />
        <DailyDeals />
        <PopularLunch />
        <PickUpRestaurant />
        <BecomePro />
        <Shops />
        <Recommended />
        <Boucher />
        <Rewards />
      </ScrollView>
    </View>
  );
}
