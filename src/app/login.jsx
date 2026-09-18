import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function loginPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "65%",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "black",
          paddingVertical: 25,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          This is a login page
        </Text>
        <TouchableOpacity
          onPress={() => router.replace("/home")}
          style={{
            backgroundColor: "lightgreen",
            borderRadius: 12,
            borderWidth: 2,
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginTop: 12,
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 23, fontColor: "black" }}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
