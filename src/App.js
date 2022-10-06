import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{ position: "fixed", left: "50%", top: "50%" }}
        id="click"
      >
        Open dialog
      </Button>
      <Dialog open={open} onClose={handleClose} className="dialog">
        <DialogTitle>{"Let's test it with Cypress"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This dialog will disapear when you click "Agree" button
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus id="agree">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
