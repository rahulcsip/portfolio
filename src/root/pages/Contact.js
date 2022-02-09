import React, { useState, useRef } from "react";
import Header from "../component/Header";
import ParticlesBackground from "../component/ParticlesBackground";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";
import { emailJsConfig } from "../config/constants";
import { API } from "../api";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const form = useRef();
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q9l65oh",
        "template_a4igblk",
        form.current,
        "user_3d7MTuDQQUn7JCbL1KeaE"
      )
      .then(
        (result) => {
          setOpen(true);
        },
        (error) => {
          setOpenError(true);
        }
      );
    // sendEmailApi();
  };

  const sendEmailApi = async (e) => {
    e.preventDefault();
    var data = {
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.userId,
      template_params: {
        username: "abc",
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };

    await fetch(API.emailJs, {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function () {
        setOpen(true);
        setName("");
        setEmail("");
        setMessage("");
        setMobile("");
      })
      .catch(function (error) {
        setOpenError(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div style={{ padding: 10 }}>
      {/* Header */}
      {/* <ParticlesBackground/> */}
      <Header dark />
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          Form is submited !
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: "100%" }}>
          Form is not submited !
        </Alert>
      </Snackbar>
      <div
        class="container"
        style={{
          paddingTop: 30,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ marginBottom: 50 }}>
          Fill up a small form, and we will get back to you in 24*7
        </h3>
        <form style={{display:"flex",justifyContent:'center',alignItems:"center"}} ref={form} onSubmit={sendEmailApi} class="row g-3">
          <div style={{display:"flex",justifyContent:'center',alignItems:"center"}} class="col-12">
            <TextField
              style={{ width: "40%" }}
              required
              value={name}
              name="user_name"
              onChange={(text) => {
                setName(text.target.value);
              }}
              id="outlined-required"
              label="Name"
              //  defaultValue="Hello World"
            />
          </div>
          <div style={{display:"flex",justifyContent:'center',alignItems:"center"}} class="col-12">
            <TextField
              style={{ width: "40%" }}
              required
              value={email}
              id="outlined-required"
              onChange={(text) => {
                setEmail(text.target.value);
              }}
              label="Email"
              name="user_email"
              //  defaultValue="Hello World"
            />
          </div>
          <div style={{display:"flex",justifyContent:'center',alignItems:"center"}} class="col-12">
            <TextField
              style={{ width: "40%" }}
              required
              value={mobile}
              name="mobile"
              onChange={(text) => {
                setMobile(text.target.value);
              }}
              type={"number"}
              id="outlined-required"
              label="Mobile Number"
              //  defaultValue="Hello World"
            />
          </div>
          <div style={{display:"flex",justifyContent:'center',alignItems:"center"}} class="col-12">
            <TextField
              style={{ width: "40%" }}
              required
              multiline
              onChange={(text) => {
                setMessage(text.target.value);
              }}
              minRows={3}
              value={message}
              name="message"
              id="outlined-required"
              label="Message"
              //  defaultValue="Hello World"
            />
          </div>

          <div class="col-3">
            <Button
              type="submit"
              value="Send"
              //onClick={sendEmail}
              variant="contained"
              endIcon={<SendIcon />}
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
