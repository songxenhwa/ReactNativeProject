import { Image, StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },

  modalBody: {
    width: "80%",
    height: "50%",
    backgroundColor: "pink",
    paddingVertical: "20px",

    borderWidth: 2,
    borderColor: "pink",
    borderRadius: 12,

    justifyContent: "space-around",
    alignItems: "center,",
  },
});

export function Greet({ name }) {
  return (
    <View
      style={{
        justifyContent: "center",
        paddingVertical: "12",
        paddingHorizontal: "15",
        width: "20%",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: "8",

        borderWidth: 2,
      }}
    >
      <Text>{name}</Text>
    </View>
  );
}

export function PopUpModal({ title, description }) {
  return (
    <View style={styles.modalBg}>
      <View style={styles.modalBody}>
        <Image
          source={placeholder}
          style={{
            height: "200",
            width: "100%",
            resizeMode: "contain",
          }}
        ></Image>
        <Text style={{ fontWeight: "300", fontSize: 12 }}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
