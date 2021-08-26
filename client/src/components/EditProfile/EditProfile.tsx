import { Container, Typography, Button, InputLabel, Grid, CardHeader, CardContent, Box } from '@material-ui/core/';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

const EditProfile: React.FC = () => {
  const classes = useStyles();

  const validate = Yup.object().shape({
    firstName: Yup.string().required('First name is required').max(15, 'Must be 15 characters or less'),
    lastName: Yup.string().required('Last name is required').max(15, 'Must be 15 characters or less'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    gender: Yup.string().required('Gender is required').oneOf(['Male', 'Female', 'Prefer not to say']),
    birthDate: Yup.string().required('Birth date required'),
    address: Yup.string().required('you address is required'),
  });

  interface FormValues {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    email: string;
    phone: string;
    address: string;
    about: string;
  }

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    email: '',
    phone: '',
    address: '',
    about: '',
  };

  return (
    <>
      <CardHeader title="Edit Profile" className={classes.header} />
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
          }}
        >
          <form>
            <Grid container>
              <Grid item xs={6} className={classes.label}>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="firstName" type="text" placeholder="John" className={classes.padding} />
              </Grid>
              <Grid item xs={6} className={classes.label}>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="lastName" type="text" placeholder="Doe" className={classes.padding} />
              </Grid>

              <Grid item xs={6} className={classes.label}>
                <InputLabel htmlFor="gender">Gender</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="gender" as="select" placeholder="Male" className={classes.padding}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="no">Prefer not to say</option>
                </Field>
              </Grid>
              <Grid item xs={6} className={classes.label}>
                <InputLabel htmlFor="birthDate">Birth Date</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="month" as="select" placeholder="June">
                  <option value=""></option>
                </Field>
                <Field name="day" as="select" placeholder="15">
                  <option value=""></option>
                </Field>
                <Field name="year" as="select" placeholder="1988">
                  <option value=""></option>
                </Field>
              </Grid>
              <Grid item xs={6} className={classes.label}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="email" type="text" placeholder="john-doe@gmail.com" className={classes.padding} />
              </Grid>
              <Grid item xs={6} className={classes.label}>
                <InputLabel htmlFor="phone">Phone Number</InputLabel>
              </Grid>
              <Grid item xs={2} className={classes.phoneText}>
                <Typography variant="body1">No Phone number entered</Typography>
              </Grid>
              <Grid item xs={3}>
                <Button variant="outlined" color="secondary" className={classes.phoneButton}>
                  Add a phone number
                </Button>
              </Grid>
              <Grid item xs={6} className={classes.label}>
                <InputLabel>Where you live</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="address" type="text" placeholder="Address" className={classes.padding} />
              </Grid>
              <Grid item xs={6} className={classes.label}>
                <InputLabel>Describe Yourself</InputLabel>
              </Grid>
              <Grid item xs={6}>
                <Field name="about" type="text" placeholder="About you" className={classes.padding} />
              </Grid>
              <Box textAlign="center" className={classes.button}>
                <Button type="submit" size="large" variant="contained" color="secondary">
                  Save
                </Button>
              </Box>
            </Grid>
          </form>
        </Formik>
      </CardContent>
    </>
  );
};

export default EditProfile;
