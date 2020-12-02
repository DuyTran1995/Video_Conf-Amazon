import * as Yup from 'yup';

export const formikEducationCertificationValue = {
  graduateDegrees: [
    {
      collegeName: '',
      typeOfDegree: 'ABC',
      major: '',
    },
  ],
  certifications: [
    {
      certificationName: '',
      issuedDate: '',
      expiredDate: '',
      picture: '',
    },
  ],
};

export const formikEducationCertificationSchemaYup = Yup.object().shape({
  graduateDegrees: Yup.array()
    .of(
      Yup.object().shape({
        collegeName: Yup.string()
          .min(4, 'College Name too short')
          .required('College name is Required'),
        typeOfDegree: Yup.string()
          .min(3, 'Type Of Degree is too short')
          .required('Type Of Degree is Required'),
        major: Yup.string().required('major is required'),
      }),
    )
    .required('Graduate Degree is Required'),
  certifications: Yup.array()
    .of(
      Yup.object().shape({
        certificationName: Yup.string()
          .min(4, 'College Name too short')
          .required('certificate name is required'),
        issuedDate: Yup.string().required('Issued Date is Required'),
        expiredDate: Yup.string().required('Expired Date is Required'),
        picture: Yup.string().required('Picture is Required'),
      }),
    )
    .required('Certification is Required'),
});
