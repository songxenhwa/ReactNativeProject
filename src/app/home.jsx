import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Greet } from "./components/components";

const placeholder = require("../../assets/images/meme/happy_cat.png");

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "700",
  },
  background: {
    flex: 1,
    backgroundColor: "white",
  },
  square: {
    width: "45%",
    aspectRatio: 1,
    backgroundColor: "white",
    justifyContent: "center", //vertical
    alignItems: "center",
    borderWidth: 1,
  },
  rectangle: {
    width: 180,
    paddingBottom: "12px",
    height: 100,
    backgroundColor: "lightblue",

    borderWidth: 2,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
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
    paddingVertical: 15,
  },
  modalBody: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 25,
    paddingBottom: 20,
    paddingHorizontal: 60,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  btn: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 22,
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default function HomePage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dogModalVisible, setDogModalVisible] = useState(false);

  return (
    <ScrollView style={styles.background}>
      <StatusBar backgroundColor="pink" barStyle="dark-content" />

      <View style={styles.column}>
        <View
          style={{
            width: "45%",
            shadowColor: "#333333",
            shadowOffset: {
              width: 6,
              height: 6,
            },
            shadowOpacity: 0.6,
            shadowRadius: 4,
            // for android shadow
            elevation: 10,
          }}
        >
          <Button
            title="Button 1"
            onPress={() => console.log("adasdada")}
            color="pink"
            disabled={isDisabled}
          ></Button>
        </View>
        <Greet name="sbfwfhwfiew"></Greet>
      </View>

      {/* first row */}
      <View style={styles.column}>
        <View style={[styles.square, { elevation: 10 }]}>
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
            <Text style={{ fontSize: 22, color: "black" }}>printing</Text>
          </ImageBackground>
        </Pressable>
      </View>

      {/* second row */}
      <View style={styles.column}>
        <Pressable
          onPress={() => setIsModalVisible(true)}
          style={styles.square}
        >
          <ImageBackground
            source={placeholder}
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
            imageStyle={{ opacity: 0.3 }}
          >
            <Text> Modal pOP up</Text>
          </ImageBackground>
        </Pressable>

        <CustomModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          image={placeholder}
          title="Modal Content"
          description="It's a happy cat"
          // buttonText="Close Dialog"
        />

        <View style={styles.square}>
          <Pressable
            onPress={() => setDogModalVisible(true)}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <ImageBackground
              source={{
                uri: "https://i.pinimg.com/474x/36/c6/5b/36c65ba561279d62671a738c44e9f73a.jpg",
              }}
              imageStyle={{ opacity: 0.3 }}
              style={[
                styles.image,
                { flex: 1, justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Text>SLide out pop up</Text>
            </ImageBackground>
          </Pressable>
        </View>

        <Modal
          visible={dogModalVisible}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View>
            <Text>adasdasd</Text>
            <ActivityIndicator
              size="large"
              color="pink"
              animating={true}
            ></ActivityIndicator>
            <Button
              title="close"
              onPress={() => setDogModalVisible(false)}
            ></Button>
          </View>
        </Modal>
      </View>

      {/* third row Alert */}
      <View style={styles.column}>
        <Pressable
          onPress={() => Alert.alert("Invalid data!")}
          style={styles.square}
        >
          <ImageBackground
            style={[
              styles.backgroundImg,
              { justifyContent: "center", alignItems: "center" },
            ]}
            imageStyle={{ opacity: 0.3 }}
            source={{
              uri: "https://i.pinimg.com/474x/36/c6/5b/36c65ba561279d62671a738c44e9f73a.jpg",
            }}
          >
            <Text>Alert</Text>
          </ImageBackground>
        </Pressable>

        <Pressable
          onPress={() =>
            Alert.alert(
              "Invalid data!",
              " Data Data Data Data Data Data Data Data ",
              [
                {
                  text: "Cancel",
                  style: "destructive",
                  onPress: () => console.log("Cancel"),
                },
                {
                  text: "Ok",
                  style: "default",
                  onPress: () => console.log("OK"),
                },
              ],
            )
          }
          style={styles.square}
        >
          <ImageBackground
            style={[
              styles.backgroundImg,
              { justifyContent: "center", alignItems: "center" },
            ]}
            imageStyle={{ opacity: 0.3 }}
            source={{
              uri: "https://i.pinimg.com/474x/36/c6/5b/36c65ba561279d62671a738c44e9f73a.jpg",
            }}
          >
            <Text>Alert 2</Text>
          </ImageBackground>
        </Pressable>
      </View>

      <View style={[styles.column, { marginBottom: "10%" }]}>
        <Pressable onPress={() => router.replace("/page1")}>
          <View style={styles.rectangle}>
            <Text>
              Page <Text style={{ color: "pink" }}>1</Text>
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => router.replace("/page1")}>
          <View style={styles.rectangle}>
            <Text>
              Option <Text style={{ color: "pink" }}>2</Text>
            </Text>
          </View>
        </Pressable>
      </View>

      {/* <View style={styles.rectangle}>
        <Text>
          Option <Text style={{ color: "pink" }}>2</Text>
        </Text>
      </View> */}
    </ScrollView>
  );
}

function CustomModal({ visible, onClose, image, title, description }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => onClose()}
      animationType="fade"
      // presentationStyle="pageSheet"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalBody}>
          <Image
            source={image}
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
          ></Image>
          <Text style={styles.header}>{title}</Text>
          <Text>{description}</Text>
          <Pressable onPress={() => onClose()}>
            <View style={styles.btn}>
              <Text>Close Diawslog</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
