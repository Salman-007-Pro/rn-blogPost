//react
import React, { useContext } from "react";

//components
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//context
import { Context } from "../globalContext/GlobalContext";

//icon
import { Feather } from "@expo/vector-icons";

const BlogDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((item) => item.id === id);
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Title</Text>
        <Text>{blogPost.title}</Text>
      </View>

      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};
BlogDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <View>
          <Feather style={styles.createIcon} name="edit" color="black" />
        </View>
      </TouchableOpacity>
    ),
    title: "Blog Detail",
  };
};
export default BlogDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 15,
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
    borderRadius: 5,
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 10,
  },
  containerTitle: {
    alignSelf: "center",
    alignItems: "center",
    width: "60%",
    textAlign: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    textAlign: "justify",
  },
  createIcon: {
    marginRight: 15,
    fontSize: 25,
  },
});
