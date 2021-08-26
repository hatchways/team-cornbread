import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  phoneText: {
    fontStyle: 'italic',
    fontSize: '0.5rem',
    fontWeight: 'bold',
  },
  label: {
    textAlign: 'right',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem',
    '& .MuiFormLabel-root': {
      color: '#000',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '0.7rem',
      marginRight: '0.5rem',
    },
  },
  header: {
    textAlign: 'center',
  },
  padding: {
    padding: '0.5rem',
    width: '60%',
    border: '1px solid #3f3f3f',
    borderRadius: '2px',
  },
  button: {
    width: '100%',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  phoneButton: {
    fontSize: '0.7rem',
  },
}));

export default useStyles;
