import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 200,
    margin: 5,
    marginTop: 30,
    borderRadius: 10,
},
  header: {
      textAlign: "center",
      fontSize: 25,
  },
  box_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  increaseButton: {
    backgroundColor: "#59CE8F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  decreaseButton: {
    backgroundColor: "#FF1E00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  count: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 30,
    fontWeight: 500
  },
});
