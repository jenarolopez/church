const api = {
  USER_GET_ALL: "users",
  USER_CREATE: "users/register",
  USER_GET: (member_id)=>`users/${member_id}`,
  USER_UPLOAD: "users/upload"
};

export default api;
