import * as jwt from "jsonwebtoken";

export const APP_SECRET = "super_secret";

export const getUser = (token: string) => {
  try {
    if (token) {
      return jwt.verify(token, APP_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
};
