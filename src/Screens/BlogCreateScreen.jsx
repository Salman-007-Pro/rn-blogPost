//main
import React, { useContext } from "react";

//components
import { StyleSheet, View } from "react-native";
import BlogForm from "../Components/BlogForm";

//context
import { Context } from "../globalContext/GlobalContext";

const BlogCreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(Context);
  const createPost = (title, content) => {
    addBlog(title, content, () => navigation.pop());
  };
  return (
    <View>
      <BlogForm submitForm={createPost} btnText="Create Post" />
    </View>
  );
};
BlogCreateScreen.navigationOptions = () => {
  return {
    title: "Blog Create",
  };
};
export default BlogCreateScreen;

const styles = StyleSheet.create({});
