import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#8D9B6A',
        main:'#8D9B6A',
        dark: '#8D9B6A',
        contrastText: '#000000',
      },
      neutral: {
        light: '#ffa9ff',
        main:'#8E9C6A',
        dark: '#8D9B6A',
        contrastText: '#000000',
      }
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