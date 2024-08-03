/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { Alert, Avatar, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutationService } from "../../api/services/useMutationService";
import { Typography } from "antd";

const Login = () => {
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const [error, setError] = useState("");

  const mutation = useMutationService({
    resource: ["login"],
  });
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    if (
      credentials.user.toLowerCase() === "admin" &&
      credentials.password === "admin"
    ) {
      mutation.mutate({
        user: credentials.user.toLowerCase(),
        password: credentials.password,
      });
    } else {
      setError("Invalid Credentials");
    }
  }, [credentials, setError]);

  useEffect(() => {
    if (mutation.data) {
      if (mutation.data.token) {
        localStorage.setItem("user", credentials.user.toLowerCase());
        navigate("/dashboard");
      } else {
        setError("Invalid Credentials");
      }
    }
  }, [mutation]);

  return (
    <div className="flex h-screen justify-center pt-40 bg-[#999184]">
      <div className="flex flex-col w-full mx-6 md:mx-0 h-[480px] lg:w-[400px] border rounded-xl px-12 pt-12 pb-28 items-center bg-[#c8bfae] border-[#c8bfae]">
        <Typography className="font-bold text-2xl capitalize mb-8">
          Sagu Music
        </Typography>
        <div className=" w-[200px] rounded-3xl flex justify-center">
          <Avatar src="/image/logo.jpeg" sx={{ width: 100, height: 100 }} />
        </div>
        <TextField
          id="standard-basic"
          label="User"
          variant="standard"
          onChange={(e) =>
            setCredentials({ ...credentials, user: e.target.value })
          }
        />
        <div className="mt-8">
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            variant="standard"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <div className="mt-12">
          <Button variant="contained" onClick={handleLogin}>
            SIGN IN
          </Button>
        </div>
        {error && (
          <Alert severity="error" className="mt-4">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
