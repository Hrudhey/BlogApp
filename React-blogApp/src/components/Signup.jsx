import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{margin:'8%'}}>
         <Typography variant='h3' style={{color:'orange'}}>Signup</Typography>
         <br></br><br></br>
        <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Name' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Email' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Password' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Phone' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField fullWidth label='Address' variant='outlined' multiline rows={4}></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }} > 
  <Button variant='contained' color='warning'>Register</Button>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
   <Link to={'/'} style={{textDecoration:'none'}}>Alredy Registered? Login here</Link>
  </Grid>
</Grid>
    </div>
  )
}

export default Signup