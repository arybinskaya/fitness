import { TextField, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { TUser, users } from "../../data";
import { useFormik } from "formik";
import { validationSchema } from "./scheme";
import { useSignInForm } from "../../components/sighnIn/useSignInForm";

const Authorization: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState<TUser | null>(null);
  const { handleSubmit } = useSignInForm();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      handleSubmit(values);

      // const authUser = users.find(
      //   (user) =>
      //     user.name === values.login && user.password === values.password
      // );
      // console.log(values);

      // if (!authUser) {
      //   setIsAuth(false);
      //   return;
      // }
      // if (authUser) {
      //   setUser(authUser);
      //   setIsAuth(true);
      // }
    },
  });

  return (
    <>
      <Box
        sx={{
          margin: 30,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {!user ? (
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <TextField
                name="name"
                label="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={!!formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ fontSize: 30 }}
              />
            </Box>
            <Box>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
                sx={{ fontSize: 30 }}
              />
            </Box>
            <Box sx={{ textAlign: "center", padding: 3 }}>
              <Button
                type="submit"
                disabled={!formik.isValid}
                variant="contained"
                sx={{ fontSize: 20 }}
              >
                Войти
              </Button>
            </Box>
          </form>
        ) : (
          <p>{isAuth}</p>
        )}
        {!isAuth && <p>Введен неправильный логин и пароль</p>}
      </Box>
    </>
  );
};

export default Authorization;
