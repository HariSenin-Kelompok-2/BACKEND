const checkUsername = (username) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(username);
};

module.exports = checkUsername;
