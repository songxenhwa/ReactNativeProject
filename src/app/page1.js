import { router, Stack } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { Greet } from "./components/components";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    height: "300",
    width: "100%",
    borderWidth: 3,
    borderColor: "pink",
    paddingVertical: "12",

    flexWrap: "wrap",
    // alignItems: "stretch",
    alignContent: "space-evenly",
    justifyContent: "space-evenly",
  },

  button: {
    marginTop: "20",
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default function Page1() {
  return (
    <View style={styles.body}>
      <Stack.Screen
        options={{
          title: "Flex Content",
          headerLeft: () => (
            <Pressable
              onPress={() => router.replace("/home")}
              style={{ marginRight: 12 }}
            >
              <Text
                style={{
                  fontSize: 38,
                  fontWeight: "900",
                }}
              >
                ←
              </Text>
            </Pressable>
          ),
        }}
      />
      <View style={styles.content}>
        <Greet name="Box 1"></Greet>
        <Greet name="Box 2"></Greet>
        <Greet name="Box 3"></Greet>
        <Greet name="Box 4"></Greet>
        <Greet name="Box 5"></Greet>
        <Greet name="Box 6"></Greet>
        <Greet name="Box 7"></Greet>
        <Greet name="Box 8"></Greet>
        <Greet name="Box 9"></Greet>
        <Greet name="Box 10"></Greet>
        <Greet name="Box 11"></Greet>
        <Greet name="Box 12"></Greet>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => router.replace("/home")}
          title="Back Page"
        ></Button>
      </View>
    </View>
  );
}
