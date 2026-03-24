import React from "react";

export const SignUp = () => {
  return (
    <div>
      <div>
        <label htmlFor="name-input">Enter your name</label>
        <input type="text" name="name-input" />
      </div>
      <div>
        <label htmlFor="email-input">Enter your email</label>
        <input type="email" name="email-input" id="" />
      </div>
      <div>
        <label htmlFor="gender-input">Select your gender</label>
        <select name="gender-input" id="">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="password-input">Enter your password</label>
        <input type="password" name="password-input" id="" />
      </div>
      <div>
        <label htmlFor="dob-input">Enter your password</label>
        <input type="date" name="dob-input" id="" />
      </div>
    </div>
  );
};
