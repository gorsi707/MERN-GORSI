const { query } = require("express");
const authService = require("../services/authService");
const joi = require("joi");

const signUpSchema = joi.object().keys({
  firstName: joi.string().required().min(3),
  lastName: joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: joi.ref("password"),
});

module.exports = {
  signUp: async (req, res) => {
    try {
      const validate = await signUpSchema.validateAsync(req.body);
      console.log("validate", validate);
      const serviceResponse = authService.signUp();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },

  login: (req, res) => {
    try {
      console.log(req.query);
      const serviceResponse = authService.login();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },

  logout: (req, res) => {
    try {
      const serviceResponse = authService.logout();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
};
