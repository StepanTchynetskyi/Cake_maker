import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import Providers from "./components";

export default function App() {
  return <Providers />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
