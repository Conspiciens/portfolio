import Image from "next/image";
import Navbar from "./navbar";
import about from "./about/page";
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid'; 
import { Card, CardMedia, Typography } from "@mui/material";

export default function Home() {
  return (
  <div style={{ position: 'relative', height: '100vh' }}> 
    <Card
      sx={{
        width: "100%", 
        height: "100%", 
        position: "absolute",
      }}
      >
      <CardMedia 
        component="img"
        image="/sunset_starship.jpg"
        sx = {{height: "100%", backgroundSize: 'cover'}}/>
      <div style={{position: "absolute", color: "white", top: 50, left: "50%", 
      transform: "translateX(-50%)", fontFamily: "monospace", fontSize: "15px"}}> 
          Aspiring Software/Machine Learning/Cybersecurity Engineer
      </div> 
      <div style={{position: "absolute", color: "#F2F0DF", top: 75, left: "50%",
      transform: "translateX(-50%)", fontFamily: "monospace", fontSize: "80px", fontWeight: "bold"}}>
        Johann Fernandez
      </div>
    </Card>
  </div>
  )
}
