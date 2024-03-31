export const isValidEmail = (email: string): boolean => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return EMAIL_REGEX.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return PASSWORD_REGEX.test(password);
};
