import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Doit être supérieur à 2 caractères")
    .required("Champs requis"),
  lastname: yup
    .string()
    .min(2, "Doit être supérieur à 2 caractères")
    .required("Champs requis"),
  email: yup.string().email().required("champs requis"),
  message: yup
    .string()
    .min(10, "Doit être supérieur à 10 caractères")
    .max(400, "Ne peut être supérieur à 400 caractètes")
    .required("Champs requis"),
});
