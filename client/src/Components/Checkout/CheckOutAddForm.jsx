import React from "react";

import { Stack, Button, TextField } from "@mui/material";

const CheckOutAddForm = ({ userInfo }) => {
  return (
    <div className="checkout_address_form_wrapper">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          flexWrap: "wrap",
          width: "100%",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="First Name"
          defaultValue={userInfo.firstName}
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="Last Name"
          defaultValue={userInfo.lastName}
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="Phone"
          defaultValue={userInfo.phone}
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="Address line 1"
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="Address line 2"
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="Zip Code"
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="City"
          variant="standard"
        />
        <TextField
          sx={{ width: "250px" }}
          id="standard-basic"
          label="State"
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Message for delivery"
          multiline
          maxRows={4}
          variant="standard"
          sx={{ width: "250px" }}
        />
      </Stack>
    </div>
  );
};

export default CheckOutAddForm;
