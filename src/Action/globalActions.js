import { ADD_BLOG, EDIT_BLOG, DEL_BLOG } from "./../Constant/globalConstant";

// add blog
export const addBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch(addBlogSuccess(title, content));
    if (callback) {
      callback();
    }
  };
};
const addBlogSuccess = (title, content) => {
  return {
    type: ADD_BLOG,
    payload: {
      title,
      content,
    },
  };
};

//edit blog
export const editBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch(editBlogSuccess(title, content));
    if (callback) {
      callback();
    }
  };
};
const editBlogSuccess = (title, content) => {
  return {
    type: EDIT_BLOG,
    payload: {
      title,
      content,
    },
  };
};

//del blog
export const delBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch(delBlogSuccess(title, content));
    if (callback) {
      callback();
    }
  };
};
const delBlogSuccess = (title, content) => {
  return {
    type: DEL_BLOG,
    payload: {
      title,
      content,
    },
  };
};
