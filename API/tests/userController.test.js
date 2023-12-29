import request from "supertest";
import { app } from "../index.js"; // Replace with the actual path to your Express app
import { User } from "../models/User.js"; // Replace with the actual path to your User model
import bcrypt from "bcrypt";
import jest from "jest";

describe("createUser API", () => {
  it("should create a new user", async () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john.doe@example.com",
      password: "securepassword",
    };

    // Mock the User.findOne method
    User.findOne = jest.fn().mockResolvedValue(null);

    // Mock bcrypt.genSalt and bcrypt.hash methods
    bcrypt.genSalt = jest.fn().mockResolvedValue("mockedSalt");
    bcrypt.hash = jest.fn().mockResolvedValue("mockedHash");

    const response = await request(app)
      .post("/api/users/create") // Replace with the actual endpoint
      .send(userData)
      .expect(201);

    expect(response.body.message).toBe("User created successfully");
    expect(User.findOne).toHaveBeenCalledWith({
      emailAddress: userData.emailAddress,
    });
    expect(bcrypt.genSalt).toHaveBeenCalledWith(
      Number(process.env.PASSWORD_SALT)
    );
    expect(bcrypt.hash).toHaveBeenCalledWith(userData.password, "mockedSalt");

    // You can add additional assertions if needed
  });

  it("should return 400 if validation fails", async () => {
    // Implement a test case for validation failure
  });

  it("should return 409 if user already exists", async () => {
    // Implement a test case for existing user
  });

  it("should handle errors gracefully", async () => {
    // Implement a test case for error handling
  });
});
