import Header from '../component/Header'
import ParticlesBackground from '../component/ParticlesBackground'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
const Contact = ()=>{
    return <div  style={{padding:10}}>
{/* Header */}
{/* <ParticlesBackground/> */}
<Header dark/>
<div class="container" style={{paddingTop:30}}>
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
  <Button  variant="contained" endIcon={<SendIcon />}>
      SUBMIT
      </Button>
  
  </div>

 
    

 
 </form>
</div>
    </div>
  }
  
  export default Contact