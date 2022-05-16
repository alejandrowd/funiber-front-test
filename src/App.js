import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors'
import { UserTable } from './components/UserTable'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MUIDataTable: {
      styleOverrides: {
        root: {
          padding: 20,
          backgroundColor: '#f2f3f8 !important',
        },
      },
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f2f3f8',
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0FFF0',
        },
      },
    },
    MUIDataTableSelectCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0FFF0',
        },
      },
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0FFF0',
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0FFF0',
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <UserTable />
      </div>
    </ThemeProvider>
  )
}

export default App
