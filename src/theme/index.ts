import { createTheme } from '@mui/material';

const PROJECT_THEME = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#CBCBCB',
      light: '#F3F3F3',
      dark: '#505050',
    },
    success: {
      main: '#A5F951',
      dark: '#6ABD81',
    },
    error: {
      main: '#EB3838',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    htmlFontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: '700',
    },
    h2: {
      fontSize: '1.7rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: '600',
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: '500',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '400',
    },
    'body1-bold': {
      fontSize: '1rem',
      fontWeight: '700',
      fontFamily: 'Inter, sans-serif',
    },
    subtitle1: {
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    button: {
      fontSize: '1rem',
      fontWeight: '500',
    },
    'button-sml': {
      fontSize: '0.8rem',
      fontWeight: '500',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            padding: '12px 24px',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: '500',
            backgroundColor: '#A5F951',
            color: '#000000',

            '&:hover': {
              backgroundColor: '#6ABD81',
            },
          },
        },
        {
          props: {
            variant: 'contained-sml',
          },
          style: {
            padding: '8px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: '500',
            backgroundColor: '#A5F951',
            color: '#000000',

            '&:hover': {
              backgroundColor: '#6ABD81',
            },
          },
        },
        {
          props: {
            variant: 'contained-sml-red',
          },
          style: {
            padding: '8px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: '500',
            backgroundColor: '#EB3838',
            color: '#000000',

            '&: hover': {
              backgroundColor: '#B82C2C',
              color: '#FFFFFF',
            },
          },
        },
        {
          props: {
            variant: 'text',
          },
          style: {
            fontSize: '1rem',
            fontWeight: '700',
            color: '#6ABD81',
          },
        },
      ],
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#505050',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: '500',
          textTransform: 'capitalize',
          border: 'none',
          textAlign: 'left',

          '&:hover': {
            backgroundColor: '#6ABD81',
          },

          '&.Mui-selected': {
            backgroundColor: '#A5F951',
            color: '#000000',

            '&:hover': {
              backgroundColor: '#6ABD81',
            },
          },
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'button-sml': React.CSSProperties;
    'body1-bold': React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'button-sml'?: React.CSSProperties;
    'body1-bold'?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'button-sml': true;
    'body1-bold': true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'contained-sml': true;
    'contained-sml-red': true;
  }
}

export default PROJECT_THEME;
