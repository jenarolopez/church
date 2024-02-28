const api = {
  USER_GET_ALL: "users",
  USER_CREATE: "users/register",
  USER_GET: (member_id)=>`users/${member_id}`,
  USER_UPLOAD: "users/upload",
  SIGN_IN:"public/sign-in",
  VALIDATE_TOKEN:"public/token/validate"
};

export default api;
