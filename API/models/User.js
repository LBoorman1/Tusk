import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import JoiPasswordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  password: { type: String, required: true },
  verified: { type: Boolean, required: true, default: false },
  jobsCompleted: { type: Number, required: true, default: 0 },
  timesHired: { type: Number, required: true, default: 0 },
  jobsPurchased: { type: Number, required: true, default: 0 },
  freelancerRating: { type: Number, required: true, default: 0 },
  customerRating: { type: Number, required: true, default: 0 },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("firstName"),
    lastName: Joi.string().required().label("lastName"),
    emailAddress: Joi.string().email().required().label("emailAddress"),
    password: JoiPasswordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

export { User, validate };
