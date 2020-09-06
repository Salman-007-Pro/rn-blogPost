export const updateDelItemState = (oldState, id) => {
  const upadateState = oldState.filter((item) => item.id !== id);
  return [...upadateState];
};
export const createNewPost = (oldState, data) => {
  oldState.length > 0
    ? (data.id = oldState[oldState.length - 1].id + 1)
    : (data.id = 1);
  return [data, ...oldState];
};
export const editPost = (oldState, editedPost) => {
  const index = oldState.findIndex((el) => el.id === editedPost.id);
  oldState[index] = editedPost;
  return [...oldState];
};
