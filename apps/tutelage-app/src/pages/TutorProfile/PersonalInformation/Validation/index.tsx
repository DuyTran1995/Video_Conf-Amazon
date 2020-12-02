import * as Yup from 'yup';

export const infoPersonValue = {
  name: '',
  gender: 'Female',
  phone: '',
  address: '',
  city: '',
  zipcode: '',
  state: '',
  country: '',
  timezone: '7',
};

export const infoPersonSchemaYup = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name Too Short!')
    .matches(/^[a-zA-Z ]+$/, 'Name is not valid (accept A-Z, a-z characters)!')
    .required('Name is Required'),
  gender: Yup.string(),
  phone: Yup.number().required('Phone is Required'),
  address: Yup.string().max(50, 'Address is Too Long!').required('Address is Required'),
  city: Yup.string().max(50, 'City is Too Long!').required('City is Required'),
  zipcode: Yup.number().required('ZipCode is Required'),
  state: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('State is Required'),
  country: Yup.string().max(50, 'Country is Too Long!').required('Country is Required'),
  timezone: Yup.string().max(50, 'Timezone is Too Long!'),
});
