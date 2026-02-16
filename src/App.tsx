import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import LoaderWrapper from "./wrappers/loader-wrapper/LoaderWrapper";
import SnackbarWrapper from "./wrappers/snackbar-wrapper/SnackbarWrapper";
import { BrowserRouter } from "react-router";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarWrapper>
        <LoaderWrapper>
          <div className="app">
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </div>
        </LoaderWrapper>
      </SnackbarWrapper>
    </ThemeProvider>
  );
}

export default App;
