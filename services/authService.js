const authModel = require("../models/authModel");

module.exports = {
  signUp: () => {
    try {
      const signUpResponse = authModel.signUp();
      if (signUpResponse.reponse) {
        return {
          response: signUpResponse.reponse,
        };
      }
      return {
        error: signUpResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  login: () => {
    try {
      const signUpResponse = authModel.login();
      if (signUpResponse.reponse) {
        return {
          response: signUpResponse.reponse,
        };
      }
      return {
        error: signUpResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  logout: () => {
    try {
      const logoutResponse = authModel.logout();
      if (logoutResponse.response) {
        return {
          response: logoutResponse.response,
        };
      }
      return {
        error: logoutResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
