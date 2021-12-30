import React from 'react'
import Carl from '../img/Carl.JPG'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function BasicCard() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

// function ProfilCard() {
//     return (
//         <div className='profil-card'>
//             <h1>I am Carl, building stuff for the Web</h1>
//             <div className="image-box">
//                 <img src={Carl}/>
//                 <p>derzeit im Full-Stack Development-Kurs bei Ironhack. 
//                 Nach dem Aufbau von 2 Gastronomischen betrieben und der Arbeit für Space-time.tv als Broadcast operator möchte ich programmieren lernen. 
//                 Dabei ist es mir wichtig im sozialen Kontext zu arbeiten und bei der Digitalisierung mitzuwirken.</p>
//                 <ul>
//                     <li>Ironhack Bootcamp-Web Development</li>
//                     <li>Esther Schipper- Veranstaltungskaufmann</li>
//                 </ul>
//             </div>
            
//         </div>
//     )
// }

// export default ProfilCard
