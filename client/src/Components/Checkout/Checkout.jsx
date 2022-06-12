import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckOutCartDetails from "./CheckOutCartDetails";
import CheckOutBillDetails from "./CheckOutBillDetails";
import CheckOutAddForm from "./CheckOutAddForm";
import CheckOutStripe from "./CheckOutStripe";
import { useSelector } from "react-redux";



const steps = [1, 2, 3];

export default function HorizontalLinearStepper() {


  useEffect(() => { window.scrollTo(0, 0);},[])
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === steps.length) {
      return;
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const userInfo = useSelector((state) => state.user.user);


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="checkout_wrapper">
      <div className="checkout_stepper_wrapper">
        <Stepper activeStep={activeStep} className="checkout_stepper">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                key={label}
                {...stepProps}
                sx={{ color: "green", fontSize: "30px" }}
              >
                <StepLabel {...labelProps}></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="checkout_main_container">
        <Box className="checkout_stepper_details">
          {activeStep == 0 && <CheckOutCartDetails />}
          {activeStep == 1 && <CheckOutAddForm userInfo={userInfo} />}
          {activeStep == 2 && <CheckOutStripe />}
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1 || cartItems.length<=0 }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        </Box>
        {cartItems.length>0 &&
          <div className="checkout_Cart_billing">
            <CheckOutBillDetails />
          </div>}
      </div>
    </div>
  );
}
