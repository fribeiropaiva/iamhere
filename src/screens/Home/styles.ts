import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10
  },
  eventName: {
    fontSize: 22,
    color: "#fff",
    marginTop: 50
  },
  date: {
    fontSize: 12,
    color: "grey"
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 36,
    marginBottom: 42
  },
  nameInput: {
    paddingLeft: 16,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    flex: 1
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 24
  }
});
