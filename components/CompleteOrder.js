import React, { UseState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const CompleteOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, color: "#BDBDBD", fontWeight: "700" }}>
        Thank You For
      </Text>
      <Text style={{ fontSize: 48, color: "#BDBDBD", fontWeight: "700" }}>
        Your Order
      </Text>
      <TouchableOpacity
        style={styles.logbtn}
        onPress={() => navigation.navigate("ResultPage")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Main Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logbtn: {
    backgroundColor: "#000",
    width: 300,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    padding: 20,
  },
});

export default CompleteOrder;
