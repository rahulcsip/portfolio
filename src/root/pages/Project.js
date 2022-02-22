import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header, { HeaderTwo } from '../component/Header'

function Project() {
  return (
    <div>
        <HeaderTwo/>
        
<div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly" ,alignItems:"center",paddingTop:"5%"}}>
{
    [1,2,3].map(()=>{
        return  <Card style={{width:345}} >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://www.lifewire.com/thmb/1TH8lNQ29fa87uPKAWRF43zvjs8=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/desktopnexus-sunflowers-summer-wallpaper-58d554be3df78c516232fd1b.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    })
}

</div>
<div style={{display:"flex",flexDirection:"row",justifyContent:"space-around" ,alignItems:"center",paddingTop:"5%"}}>
{
    [1,2,3].map(()=>{
        return  <Card style={{width:345}} >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://www.lifewire.com/thmb/1TH8lNQ29fa87uPKAWRF43zvjs8=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/desktopnexus-sunflowers-summer-wallpaper-58d554be3df78c516232fd1b.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    })
}

</div>
    </div>
  )
}

export default Project