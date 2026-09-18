import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Count: {count}</Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{
          marginTop: 12,
          padding: 12,
          backgroundColor: "black",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>Increase</Text>
      </TouchableOpacity>
    </View>
  );
}
