import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    for_name: Yup.string()
    .min(2, "Минимум 2 символа*")
    .max(40, "Максимум 40 символов*")
    .required('Обязательное поле*'),

    from_name: Yup.string()
    .min(2, "Минимум 2 символа*")
    .max(40, "Максимум 40 символов*")
    .required('Обязательное поле*'),

    for_email: Yup.string()
    .email("Некорректный Email адрес*")
    .required('Обязательное поле*'),

    from_email: Yup.string()
    .email("Некорректный Email адрес*")
    .required('Обязательное поле*'),

    theme: Yup.string()
    .min(2, "Минимум 2 символа*")
    .max(30, "Максимум 30 символов*")
    .required('Обязательное поле*'),

    message: Yup.string()
    .min(2, "Минимум 2 символа")
    .max(300, "Максимум 300 символов*")
    .required('Обязательное поле*'),
  
});
export default BasicFormSchema;