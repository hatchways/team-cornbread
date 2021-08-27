import StaticDatePicker from './DatePicker';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

const MySitters = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={`${classes.root} ${classes.dashboard}`}>
      <StaticDatePicker />
    </Grid>
  );
};

export default MySitters;
