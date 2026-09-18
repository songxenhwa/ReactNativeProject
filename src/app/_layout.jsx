import { Stack } from "expo-router";

export default function RootLayout() {
  // follow file name
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="home" />
      <Stack.Screen name="explore" options={{ headerShown: false }} />
    </Stack>
  );
}
