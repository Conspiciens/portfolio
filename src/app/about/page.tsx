import { Box, Card, CardMedia, Grid } from '@mui/material';

const About = () => {

    return (
      <>
      <div style={{ 
        position: 'relative', 
        height: '100vh', 
        }}> 
        <Card sx={{
          width: "100%", 
          height: "100%", 
          position: "absolute",
          background: 'rgb(0, 0, 0, 0.6)', 
        }}>
          <CardMedia
            component="img"
            image="/sunset_starship.jpg"
            sx = {{
              height: "100%", 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',
              filter: 'blur(3px)'
            }}
          />
        </Card>
      </div> 
      </>
    ); 
}

export default About; 