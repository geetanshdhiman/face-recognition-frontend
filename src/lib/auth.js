export const loginUser = (username, password) => {
  if (username === "admin" && password === "1234") {
    return true;
  }
  return false;
};
