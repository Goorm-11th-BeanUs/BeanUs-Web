import { createTheme } from '@mui/material'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: '2px',
          textTransform: 'none',
        },
        outlined: {
          background: '#fff',
        },
        sizeSmall: {
          padding: '4px 16px',
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          padding: '32px 24px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          background: '#fff',
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          '& + &': {
            marginTop: '16px',
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {},
      styleOverrides: {
        root: {
          // transform: 'translate(14px, 9px) scale(1)',
        },
        shrink: {
          fontWeight: '800',
          // color: 'secondary.main',
          transform: 'none',
          position: 'static',
          flexShrink: 0,
          minWidth: '160px',
          lineHeight: '36px',
          // marginTop: '4px',
        },
        asterisk: {
          color: '#EC7969',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          minWidth: '300px',
          // borderRadius: '4px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E6E8F0',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        // variant: 'outlined',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '.MuiFormControlLabel-asterisk': {
            fontSize: 0,
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
      defaultProps: {
        elevation: 4,
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          a: {
            fontWeight: 'bold',
            display: 'block',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          '.MuiTableCell-root': {
            borderTop: '1px solid #111',
            borderBottom: '1px solid #111',
            color: '#111',
          },
          // borderBottom: 'none',
          '& .MuiTableCell-root': {
            // borderBottom: 'none',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: 1,

            // letterSpacing: 0.5,
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiTableRow: {
      defaultProps: {
        hover: true,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #eee',
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          minWidth: '300px',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: 'center',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: '12px',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
  typography: {
    button: {
      fontWeight: 600,
    },
    // fontFamily:
    //   '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375,
    },
  },
})

theme = createTheme(theme, {
  palette: {
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    action: {
      active: '#6B7280',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(55, 65, 81, 0.04)',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      disabled: 'rgba(55, 65, 81, 0.26)',
    },
    background: {
      default: '#F9FAFC',
      paper: '#FFFFFF',
    },
    divider: '#E6E8F0',
    primary: {
      main: '#26A86C', // 더 밝은 색상으로 변경
      light: '#D1F2E1', // main 색상을 기준으로 더 밝은 색상
      dark: '#71B08A', // main 색상을 기준으로 더 어두운 색상
      contrastText: '#000000', // 밝은 배경에 어울리는 어두운 텍스트 색상
    },
    secondary: {
      main: '#10B981',
      light: '#3FC79A',
      dark: '#0B815A',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#14B8A6',
      light: '#43C6B7',
      dark: '#0E8074',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2196F3',
      light: '#64B6F7',
      dark: '#0B79D0',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFBF4C',
      light: '#FFBF4C',
      // dark: '#B27B16',
      dark: '#FFB020',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: '#FFFFFF',
    },
    reject: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#353535',
      secondary: '#65748B',
      disabled: 'rgba(55, 65, 81, 0.48)',
    },
    // default state
    state_ENABLED: theme.palette.augmentColor({ color: { main: '#10B981' } }),
    state_DISABLED: theme.palette.augmentColor({ color: { main: '#353535' } }),

    // admin-request
    state_WAITING: theme.palette.augmentColor({ color: { main: '#1E90FF' } }),
    state_ACCEPTED: theme.palette.augmentColor({ color: { main: '#10B981' } }),
    state_REJECTED: theme.palette.augmentColor({ color: { main: '#D14343' } }),
    state_CANCEL: theme.palette.augmentColor({ color: { main: '#757575' } }),

    // reservation
    state_FAILED: theme.palette.augmentColor({ color: { main: '#D14343' } }),
    state_CANCELED: theme.palette.augmentColor({ color: { main: '#757575' } }),
    state_READY: theme.palette.augmentColor({ color: { main: '#1E90FF' } }),
    state_PENDING: theme.palette.augmentColor({ color: { main: '#ffeb3b' } }),
    state_VERIFIED: theme.palette.augmentColor({ color: { main: '#ff9800' } }),
    state_COMPLETED: theme.palette.augmentColor({ color: { main: '#10B981' } }),
    state_CONFIRMED: theme.palette.augmentColor({ color: { main: '#8A2BE2' } }),
    state_IN_PROGRESS: theme.palette.augmentColor({ color: { main: '#5A2D0C' } }),
    state_USED: theme.palette.augmentColor({ color: { main: '#6B4226' } }),
  },
})

export { theme }
