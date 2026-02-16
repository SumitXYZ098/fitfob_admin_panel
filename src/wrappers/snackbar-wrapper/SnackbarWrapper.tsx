import { Alert, Snackbar } from "@mui/material";
import { Fragment } from "react";
import useSnackBarStore from "../../store/snackBar.store";

const SnackbarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { open, message, severity, closeSnackBar } = useSnackBarStore();

  const handleClose = () => {
    closeSnackBar();
  };

  return (
    <Fragment>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default SnackbarWrapper;
