import {object, string} from 'yup';
import * as yup from 'yup';
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const emailRules = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//register form validation
const userRegisterSchemaValidation = object({
  firstName: string()
    .required('First Name field is required')
    .matches(/^[A-Za-z ]*$/, 'Please enter a valid first name'),
  lastName: string()
    .required('Last Name field is required')
    .matches(/^[A-Za-z ]*$/, 'Please enter a valid last name'),
  email: string()
    .required('Email field is required')
    .matches(emailRules, 'Please enter a valid email')
    .email('Please enter a valid email'),
  password: string()
    .required('Password field is required')
    .matches(passwordRules, {
      message:
        'Password should have at least 8 character and contain one uppercase, one lowercase, one number and one special character',
    }),
  confirmPassword: string()
    .required('Confirm password field is required')
    .matches(passwordRules, {
      message:
        'Password should have at least 8 character and contain one uppercase, one lowercase, one number and one special character',
    })
    .oneOf(
      [yup.ref('password')],
      'Password and Confirm Password does not match',
    ),
});

//login form validation
const loginInputValidation = object({
  email: string()
    .required('Email feild is required')
    .matches(emailRules, 'Please enter a valid email')
    .email('Please enter a valid email'),
  password: string().required('Password feild is required'),
});

//forgot password form validation
const forgotPasswordInputValidation = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(emailRules, 'Please enter a valid email')
    .email('Please enter a valid email'),
});

export {
  userRegisterSchemaValidation,
  loginInputValidation,
  forgotPasswordInputValidation,
};
