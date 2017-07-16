export function decodeToken(token) {
  try {
    if (token !== null && token !== undefined && token !== "")
      return token;
    else
      return null;
  }
  catch (e) {
    return null;
  }
}