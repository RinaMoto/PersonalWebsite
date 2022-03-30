import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#ffa9ff',
        main:'#8E9C6A',
        dark: '#92A06E',
        contrastText: '#000000',
      },
    },
    typography : {
      fontFamily: [
        'Averia',
        'Serif',
        'Libre'
      ].join(',')
    }, 
});
  
export default theme;