import { ImageBackground } from "expo-image";
import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const placeholder = require("../../assets/images/meme/happy_cat.png");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "gray",
  },
  square: {
    width: "45%",
    aspectRatio: 1,
    backgroundColor: "white",
    justifyContent: "center", //vertical
    alignItems: "center",
  },
  rectangle: {
    width: "30%",
    height: "30%",
    backgroundColor: "lightblue",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  backgroundImg: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  column: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: "15",
  },
});

export default function HomePage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView style={styles.background}>
      <View style={{ width: "50%" }}>
        <Button
          title="Button 1"
          onPress={() => console.log("adasdada")}
          color="pink"
          disabled={isDisabled}
        ></Button>
      </View>
      <View style={styles.column}>
        <View style={styles.square}>
          <Text>Option 1</Text>
        </View>

        <Pressable
          style={styles.square}
          onPress={() => console.log("aaaaaaaaaaaaaaaaa")}
        >
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/474x/36/c6/5b/36c65ba561279d62671a738c44e9f73a.jpg",
            }}
            imageStyle={{ opacity: 0.3 }}
            style={[
              styles.backgroundImg,
              {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text style={{ fontSize: 22, color: "black" }}>button 2</Text>
          </ImageBackground>
        </Pressable>
      </View>

      <View style={styles.column}>
        <Pressable
          onPress={() => console.log("asfsdfsdf")}
          style={styles.square}
        >
          <Image source={placeholder} style={styles.image}></Image>
        </Pressable>

        <Modal visible={isModalVisible}>
          <View style={{ flex: 1, backgroundColor: "green", padding: 50 }}>
            <Text>Modal Content</Text>
            <Text>Its a cat</Text>
          </View>
        </Modal>
        <View style={styles.square}>
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/36/c6/5b/36c65ba561279d62671a738c44e9f73a.jpg",
            }}
            style={styles.image}
          ></Image>
        </View>
      </View>

      <View style={styles.rectangle}>
        <Text>
          Option <Text style={{ color: "pink" }}>2</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
