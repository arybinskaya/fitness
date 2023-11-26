import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { TUser, users } from "../../data";
import { useFormik } from "formik";
import { validationSchema } from "./scheme";

const Authorization: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState<TUser | null>(null);

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      const authUser = users.find(
        (user) =>
          user.name === values.login && user.password === values.password
      );
      console.log(values);

      if (!authUser) {
        setIsAuth(false);
        return;
      }
      if (authUser) {
        setUser(authUser);
        setIsAuth(true);
      }
    },
  });

  return (
    <>
      asjdhaskjdhs
      {!user ? (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="login"
            label="Login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            error={!!formik.errors.login}
            helperText={formik.touched.login && formik.errors.login}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button type="submit" disabled={!formik.isValid} variant="contained">
            Войти
          </Button>
        </form>
      ) : (
        <p>{isAuth}</p>
      )}
      {!isAuth && <p>Введен неправильный логин и пароль</p>}
    </>
  );
};

export default Authorization;
