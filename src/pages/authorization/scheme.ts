import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Поле обязательно для заполнения"),
  password: Yup.string().required("Поле обязательно для заполнения"),
});
