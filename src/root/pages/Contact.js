import  React  ,{useState} from 'react';
import Header from '../component/Header'
import ParticlesBackground from '../component/ParticlesBackground'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = ()=>{
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    return <div  style={{padding:10}}>
{/* Header */}
{/* <ParticlesBackground/> */}
<Header dark/>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Form is submited !
        </Alert>
      </Snackbar>
<div class="container" style={{paddingTop:30,justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
  <h3 style={{marginBottom:50}}>Fill up a small form, and we will get back to you in 24*7</h3>
<form  class="row g-3">

  
  <div class="col-12">
  <TextField
  style={{width:"40%"}}
          required
          id="outlined-required"
          label="Name"
        //  defaultValue="Hello World"
        />
  </div>
  <div class="col-12">
  <TextField
  style={{width:"40%"}}
          required
          id="outlined-required"
          label="Email"
          
        //  defaultValue="Hello World"
        />
  </div>
  <div class="col-12">
  <TextField
  style={{width:"40%"}}
          required
        
          type={'number'}
          id="outlined-required"
          label="Mobile Number"
        //  defaultValue="Hello World"
        />
  </div>
  <div class="col-12">
  <TextField
  style={{width:"40%"}}
          required
          multiline
          minRows={3}
         
          id="outlined-required"
          label="Message"
        //  defaultValue="Hello World"
        />
  </div>
 
  <div class="col-3">
  <Button onClick={handleClick}  variant="contained" endIcon={<SendIcon />}>
      SUBMIT
      </Button>
  
  </div>

 
    

 
 </form>
</div>
    </div>
  }
  
  export default Contact