import * as yup from 'yup';


export const LoginValidate = yup.object().shape({
     username:yup.string().trim().required('Username is required').email(
         'Username must be a valid email'),
     password: yup
         .string()
         .trim()
         .required('Password is required')
         .min(4, 'Password must be at least 4 characters')
         .max(20, 'Password must be at most 20 characters'),
});