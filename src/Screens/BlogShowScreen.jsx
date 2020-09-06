//main
import React, { useContext } from "react";

//components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

//context
import { Context } from "../globalContext/GlobalContext";

//icon
import { AntDesign } from "@expo/vector-icons";

const BlogShowScreen = ({ navigation }) => {
  const { state, delBlog } = useContext(Context);
  console.log(state);
  return (
    <View style={{ marginTop: 10, flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {state.length > 0 ? (
          <FlatList
            data={state}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { id: item.id })}
              >
                <View style={styles.blogWrapper}>
                  <Text>
                    <Text style={styles.blogTitle}>Title:</Text> {item.title}
                  </Text>
                  <TouchableOpacity onPress={() => delBlog(item.id)}>
                    <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.noBlogContainer}>
            <AntDesign name="questioncircle" size={22} color="#ccc" />
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#ccc" }}>
              No Blog Posts
            </Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

BlogShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <View>
          <AntDesign
            name="plussquare"
            style={styles.createIcon}
            color="black"
          />
        </View>
      </TouchableOpacity>
    ),
  };
};
export default BlogShowScreen;

const styles = StyleSheet.create({
  blogWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
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
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  createIcon: {
    marginRight: 15,
    fontSize: 25,
  },
  noBlogContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
