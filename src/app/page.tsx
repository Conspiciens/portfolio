import Image from "next/image";
import Navbar from "./navbar";
import about from "./about/page";
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid'; 
import { Card, CardMedia, Typography } from "@mui/material";

export default function Home() {
  return (
    <Card
      sx={{
        width: "100%", 
        height: "100%", 
        position: "relative",
      }}
      >
      <CardMedia 
        component="img"
        image="/sunset_starship.jpg"/>
      <div style={{position: "absolute", color: "white", top: 10, left: "50%",
      transform: "translateX(-50%)"}}> 
          Aspiring Software/Machine Learning/Cybersecurity Engineer
      </div>
    </Card>
  )
}
