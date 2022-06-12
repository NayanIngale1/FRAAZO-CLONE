import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import {
  setLoginLoading,
  setLoginError,
  addUserData,
  setLoggedIn,
} from "../../Redux/user/action";
import { toast } from "react-toastify";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  width: 420,
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

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [signupForm, showSignupForm] = useState(false);

  const handleLoginForm = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleLogin = (loginData) => {
    fetch("https://fraazo-clone.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res:", res);
        if (res.errors) {
          let error = res.errors[0];
          // console.log("error:", error);
          toast.error(error.msg);
        } else if (res.message !== "Login Successful") {
          toast.error(res.message);
        } else {
          toast.success(res.message);

          dispatch(setLoginLoading(true));
          dispatch(addUserData(res));
          dispatch(setLoggedIn(true));
          handleClose();
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSignup = (userData) => {
    fetch("https://fraazo-clone.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.errors) {
          let error = res.errors[0];
          // console.log("error:", error);

          toast.error(error.msg);
        } else if (res.message !== "User created successfully") {
          toast.error(res.message);
        } else {
          toast.success(res.message + "\n Now Login....!");
          showSignupForm(!signupForm);
        }
      })
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
                type="email"
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
                  type="email"
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
