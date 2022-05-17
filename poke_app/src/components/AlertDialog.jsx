import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  
  const open = props.open;
  const setOpen = props.setOpen;
  const pokemon = props.pokemon;
  const confirmRemovePokemon = props.confirmRemovePokemon;

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    confirmRemovePokemon(pokemon.id);
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Release Pokemon"}
        </DialogTitle>
        <DialogContent>
          {pokemon && <DialogContentText id="alert-dialog-description">
            Are you sure you want to release this pokemon: {pokemon.pokemon.name} (LVL: {pokemon.level})
          </DialogContentText>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleConfirm} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
