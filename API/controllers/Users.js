import { User, validate } from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { response } = validate(req.body);
    if (response) {
      return res
        .status(400)
        .send({ Message: response.error.details[0].message });
    }

    const emailCheck = await User.findOne({
      emailAddress: req.body.emailAddress,
    });
    if (emailCheck) {
      return res
        .status(409)
        .send({ message: "User with given email address already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.PASSWORD_SALT));

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      password: hashPassword,
    }).save();

    res.status(201).send({ message: "User created sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const getUserByEmailAddress = async (req, res) => {
  try {
    const user = await User.findOne({ emailAddress: req.body.emailAddress });
    if (!user) {
      return res
        .status(404)
        .send({ message: "There is no user with the given email address" });
    } else {
      return res
        .status(201)
        .send({ user, message: "User successfully returned" });
    }
  } catch (error) {
    console.log(error);
  }
};
