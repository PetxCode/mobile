import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
// import { Button, MyButton } from "./MyButton";
import img1 from "../../assets/peter.jpg";
import { TextInput } from "react-native-paper";

import firebase from "firebase";
import { app } from "../../base";
import { AuthContext } from "../AuthPath/AuthState";

// import ImagePicker from "react-native-image-picker";
const studio = app.firestore().collection("studio");
const Post = () => {
  const { mgs, currentUser } = useContext(AuthContext);
  const [imageSource, setImageSource] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState("");
  const [desc, setDesc] = useState("");

  const pushOnline = async () => {
    const presentUser = app.auth().currentUser;

    if (presentUser) {
      await studio.doc().set({
        location,
        name,
        cost,
        desc,
        createdAt: firebase.firestore.FieldValue.serverTimestamp().toString(),
        createdBy: presentUser.uid,
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.response}>
          <Text>Hello</Text>
          <Text>{mgs}</Text>
        </View>

        <View>
          <TextInput
            placeholder="Item Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
          <TextInput
            placeholder="Cost"
            style={styles.input}
            value={cost}
            onChangeText={setCost}
          />
          <TextInput
            placeholder="Description"
            style={styles.input}
            value={desc}
            onChangeText={setDesc}
          />
        </View>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "red",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            pushOnline();
            console.log("Push Online");
          }}
        >
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Push Online
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: "center",
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    fontSize: 13,
  },
});

export default Post;
