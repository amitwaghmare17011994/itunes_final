import * as yup from 'yup';
export const loginSchema = yup.object().shape({
    

    email: yup.string().email('Enter valid email').required('Enter email'),
    password:yup.string().required('Enter password')
});