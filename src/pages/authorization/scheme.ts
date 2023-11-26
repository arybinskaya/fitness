import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  login: Yup.string().required("Поле обязательно для заполнения"),
  password: Yup.string().required("Поле обязательно для заполнения"),
});
