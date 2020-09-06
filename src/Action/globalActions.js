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
  return (editPost, callback) => {
    dispatch(editBlogSuccess(editPost));
    if (callback) {
      callback();
    }
  };
};
const editBlogSuccess = (editPost) => {
  return {
    type: EDIT_BLOG,
    payload: {
      editPost,
    },
  };
};

//del blog
export const delBlog = (dispatch) => {
  return (id, callback) => {
    dispatch(delBlogSuccess(id));
    if (callback) {
      callback();
    }
  };
};
const delBlogSuccess = (id) => {
  return {
    type: DEL_BLOG,
    payload: {
      id,
    },
  };
};
