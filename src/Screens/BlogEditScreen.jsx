//main
import React, { useContext } from "react";

//components
import { StyleSheet, View } from "react-native";
import BlogForm from "../Components/BlogForm";

//context
import { Context } from "../globalContext/GlobalContext";

const BlogEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlog } = useContext(Context);
  const blogPost = state.find((item) => (item.id = id));
  const editPost = (title, content) => {
    const editedPost = {
      id,
      title,
      content,
    };
    editBlog(editedPost, () => navigation.pop());
  };
  return (
    <View>
      <BlogForm
        submitForm={editPost}
        Title={blogPost.title}
        Content={blogPost.content}
        btnText="Edit Post"
      />
    </View>
  );
};
BlogEditScreen.navigationOptions = () => {
  return {
    title: "Blog Edit",
  };
};
export default BlogEditScreen;

const styles = StyleSheet.create({});
