import React, { UseState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const ChooseCupCakeCream = ({ navigation }) => {
  const arrowBack = "<";
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainLabel}>Choose cupcake cream</Text>
        <Image
          style={styles.mainImage}
          source={{
            uri:
              "https://i.pinimg.com/564x/26/74/78/26747859d57c08b6f5e216134d064fe2.jpg",
          }}
        />
        <Text style={{ color: "#BDBDBD", fontSize: 28, marginTop: 5 }}>
          Vanilla cream
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
          }}
        >
          <Image
            style={[styles.smallImg, { marginRight: 5 }]}
            source={{
              uri:
                "https://i.pinimg.com/564x/e7/7f/11/e77f11631d74835dc1c55036e7cc429e.jpg",
            }}
          />
          <Image
            style={[styles.smallImg, { marginLeft: 5 }]}
            source={{
              uri:
                "https://i.pinimg.com/564x/26/74/78/26747859d57c08b6f5e216134d064fe2.jpg",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 9,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ChooseCupCakeDrops")}
            style={[
              styles.logbtn,
              { marginRight: 15, backgroundColor: "#000" },
            ]}
          >
            <Text style={styles.textBtn}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.logbtn, { marginLeft: 15 }]}
            onPress={() => navigation.navigate("ChooseCupCakeDecorations")}
          >
            <Text style={styles.textBtn}>Next</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 23,
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <View style={styles.circle}>
            <Text style={{ color: "#000", fontSize: 20 }}>1</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ color: "#000", fontSize: 20 }}>2</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ fontSize: 20 }}>3</Text>
          </View>
          <View style={[styles.circle, { backgroundColor: "#000" }]}>
            <Text style={{ color: "#fff", fontSize: 20 }}>4</Text>
          </View>
          <View style={styles.circle}>
            <Text style={{ fontSize: 20 }}>5</Text>
          </View>
        </View>
      </View>
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
  mainContainer: {
    alignItems: "center",

    height: "95%",
    width: "100%",
  },
  mainLabel: {
    marginTop: "7%",
    marginBottom: "3%",
    fontSize: 28,
    fontWeight: "700",
    color: "#E0E0E0",
  },
  mainImage: {
    height: "40%",
    width: "80%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  smallImg: {
    height: 74,
    width: 74,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000",
  },
  logbtn: {
    backgroundColor: "#000",
    width: 130,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
    padding: 10,
  },
  textBtn: {
    color: "#fff",
    fontSize: 20,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChooseCupCakeCream;
