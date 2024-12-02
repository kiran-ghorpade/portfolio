/* eslint-disable react/prop-types */
import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
} from "@mui/material";

export default function Dialog({ value, open, handleClose, children }) {
  return (
    <MuiDialog open={open} onClose={handleClose}>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button size="small" color="primary" onClick={() => handleClose(value)}>
          Close
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}
