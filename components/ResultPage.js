import React, { UseState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const ResultPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          textAlign: "left",
          marginTop: 15,
          marginLeft: 10,
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40, color: "#BDBDBD", fontWeight: "700" }}>
          Your order
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7q0dm8AEL3FCjCiTSJ---A6qS4hElX9bBrg&usqp=CAU",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>
            Chocolate Cupcake{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/8b/75/59/8b755920031191cb3d2715ae688f503c.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Blueberries</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/e0/2f/44/e02f44e2cb85f3f1dc8d64f74191f272.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Nuts</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/ce/f1/3d/cef13d17acf9f4123fbcf95d90b63c8a.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Milk Chocolate</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/16/d0/60/16d06047141312a4a71bcc8ccf37e129.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>
            Black Chocolate
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 17,
          }}
        >
          <Image
            style={styles.smallImg}
            source={{
              uri:
                "https://i.pinimg.com/564x/1c/69/69/1c696915a5877092b69136cece8548b1.jpg",
            }}
          />
          <Text style={{ fontSize: 20, color: "#BDBDBD" }}>Condensed Milk</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 25,

          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            marginLeft: 17,

            color: "#BDBDBD",
            textDecorationLine: "underline",
          }}
        >
          Price: 5600
        </Text>
        <View
          style={[styles.circle, { marginLeft: 40, backgroundColor: "#000" }]}
        >
          <Text style={{ fontSize: 40, color: "#fff", marginBottom: 4 }}>
            -
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginLeft: 20, color: "#BDBDBD" }}>
          1
        </Text>
        <View style={[styles.circle, { backgroundColor: "#000" }]}>
          <Text style={{ fontSize: 32, color: "#fff", marginBottom: 4 }}>
            +
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.logbtn}
          onPress={() => navigation.navigate("CompleteOrder")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#C5C4C4",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    textAlign: "center",
  },
  smallImg: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 27.5,
    borderColor: "#000",
    marginRight: 20,
  },
  logbtn: {
    backgroundColor: "#000",
    width: 250,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    padding: 10,
  },
});

export default ResultPage;
