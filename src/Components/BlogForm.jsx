//main
import React, { useState } from "react";

//components
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogForm = ({ submitForm, Title, Content, btnText }) => {
  const [title, setTitle] = useState(Title);
  const [content, setContent] = useState(Content);
  const contentHandler = (value) => {
    setContent(value);
  };
  const titleHandler = (value) => {
    setTitle(value);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.labelStyle}>Title:</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter a Title"
          autoCorrect={false}
          value={title}
          onChangeText={titleHandler}
        />
        <Text style={styles.labelStyle}>Content:</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter a Content"
          autoCapitalize="none"
          autoCorrect={false}
          value={content}
          onChangeText={contentHandler}
        />
        <Button title={btnText} onPress={() => submitForm(title, content)} />
      </View>
    </View>
  );
};
BlogForm.defaultProps = {
  Title: "",
  Content: "",
};
export default BlogForm;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 30,
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputStyle: {
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});
