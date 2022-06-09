import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  outline: 0,
  boxShadow: 24,
  p: 6,
  borderRadius: "20px",
};

export default function Login({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  // console.log("userData:", userData);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  // console.log("loginData:", loginData);
  const [signupForm, showSignupForm] = useState(false);

  const handleLoginForm = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (loginData) => {
    console.log("loginData:", loginData);
    fetch(
      "http://localhost:4040/login",
      // "https://fraazo-clone.herokuapp.com/login",
      {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleSignup = (userData) => {
    console.log("userData:", userData);
    fetch("http://localhost:4040/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Welcome to Fraazo!
          </Typography>
          <Typography id="modal-modal-title" variant="p" component="p">
            Sign In to track your Order and More.
          </Typography>
          {!signupForm ? (
            <>
              <TextField
                label="Enter your Email"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="email"
                value={loginData.email}
                onChange={handleLoginForm}
                sx={{ mt: 4, width: "100%" }}
              />
              <TextField
                label="Enter your Password"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="password"
                value={loginData.password}
                type="password"
                onChange={handleLoginForm}
                sx={{ mt: 3, width: "100%" }}
              />
            </>
          ) : (
            <>
              <TextField
                label="Enter Fist Name"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="firstName"
                value={userData.firstName}
                onChange={handleUserData}
                sx={{ mt: 4, width: "100%" }}
              />
              <TextField
                label="Enter Last Name"
                id="standard-size-normal"
                variant="standard"
                color="success"
                value={userData.lastName}
                name="lastName"
                onChange={handleUserData}
                sx={{ mt: 3, width: "100%" }}
              />{" "}
              <TextField
                label="Enter your Email"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="email"
                value={userData.email}
                onChange={handleUserData}
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Enter your Password"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="password"
                type="password"
                value={userData.password}
                onChange={handleUserData}
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Enter your Phone"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="phone"
                value={userData.phone}
                onChange={handleUserData}
                sx={{ mt: 3, width: "100%" }}
              />
            </>
          )}
          <Box
            sx={{ mt: 2, cursor: "pointer" }}
            onClick={() => showSignupForm(!signupForm)}
          >
            <Typography id="modal-modal-title" variant="p" component="p">
              {!signupForm
                ? "New to Fraazo.!  Click here to Create Your Account...!"
                : "Already Have Account.!  Click here for SignIn..!"}
            </Typography>
          </Box>
          <div style={{ textAlign: "center", mt: 2 }}>
            {signupForm ? (
              <Button
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  width: "200px",
                  borderRadius: "50px",
                  pt: 2,
                  pb: 2,
                }}
                onClick={() => handleSignup(userData)}
              >
                Create Account
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  width: "200px",
                  borderRadius: "50px",
                  pt: 2,
                  pb: 2,
                }}
                onClick={() => handleLogin(loginData)}
              >
                LOGIN
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
