import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View
      style={{
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/peter.jpg")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150 / 2,
          borderWidth: 5,
          borderColor: "#651E32",
        }}
        // resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop: 20,
          // marginTop: 30,
        }}
      >
        <Text>Name:</Text>
        <Text style={styles.text}>Insigna Media</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop: 20,
          // marginTop: 30,
        }}
      >
        <Text>Buiness Name:</Text>
        <Text style={styles.text}>Pick A Studio</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop: 20,
          // marginTop: 30,
        }}
      >
        <Text>Position:</Text>
        <Text style={styles.text}>MD</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop: 20,
          // marginTop: 30,
        }}
      >
        <Text>Location:</Text>
        <Text style={styles.text}>Ikeja</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
});
export default Profile;
