//main
import React, { useContext } from "react";

//components
import { StyleSheet, Text, View } from "react-native";

//context
import { Context } from "../globalContext/GlobalContext";

const BlogShowScreen = () => {
  const data = useContext(Context);
  console.log(data);
  console.log("asd");
  return (
    <View>
      <Text>Blog Showasd</Text>
    </View>
  );
};

export default BlogShowScreen;

const styles = StyleSheet.create({});
