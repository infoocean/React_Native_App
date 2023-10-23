//registration form input types
interface RegisterFormInputTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
//login form input types
interface LoginFormInputTypes {
  email: string;
  password: string;
}
//forgot password form input types
interface ForgotFormInputTypes {
  email: string;
}

export type {RegisterFormInputTypes, LoginFormInputTypes, ForgotFormInputTypes};
