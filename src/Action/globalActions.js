//constant
import {
  ADD_BLOG,
  EDIT_BLOG,
  DEL_BLOG,
  GET_BLOG,
} from "./../Constant/globalConstant";

//json server
import JsonServer from "../Api/JsonServer";

// get blog from server
export const getBlog = (dispatch) => {
  return async () => {
    const response = await JsonServer.get("/blogposts");
    dispatch(getBlogSuccess(response.data));
  };
};
const getBlogSuccess = (blogPosts) => {
  return {
    type: GET_BLOG,
    payload: {
      blogPosts,
    },
  };
};

// add blog
export const addBlog = (dispatch) => {
  return async (title, content, callback) => {
    await JsonServer.post(`/blogposts`, {
      title,
      content,
    });
    // dispatch(addBlogSuccess(title, content));
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
  return async (editPost, callback) => {
    await JsonServer.put(`/blogposts/${editPost.id}`, {
      ...editPost,
    });
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
  return async (id) => {
    await JsonServer.delete(`/blogposts/${id}`);
    dispatch(delBlogSuccess(id));
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
