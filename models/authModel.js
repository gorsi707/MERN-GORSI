module.exports = {
  signUp: () => {
    try {
      return {
        reponse: "user signed up",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  login: () => {
    try {
      return {
        reponse: "user logged in",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  logout: () => {
    try {
      return {
        response: "you have logged-out",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
