import "react-native-gesture-handler";
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./components/Routes";
import { AuthProvider } from "./components/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
