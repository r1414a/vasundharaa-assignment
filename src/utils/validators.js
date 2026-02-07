export const isEmailValid = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); //directly took from google don't know anything about regex.

export const isUserIDValid = (userId) => /^\d{6}$/.test(userId)
export const isPasswordStrong = (password) => /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)
  // password.length >= 6;