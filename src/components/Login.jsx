import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      navigate("/main");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      navigate("/main");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Auth</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="btn">
          <Button variant="primary" type="Submit">
            Log In
          </Button>
        </div>
      </Form>
      <hr />
      <div>
        <Button
          variant="danger"
          className="google-btn"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle className="me-2" size={20} /> Continue with Google
        </Button>
      </div>
      <div className="mt-3">
        <Button
          variant="primary"
          className="facebook-btn"
          onClick={handleFacebookSignIn}
        >
          <FaFacebookSquare className="me-2" size={20} /> Continue with Facebook
        </Button>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
