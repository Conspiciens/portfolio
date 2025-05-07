import Image from "next/image";
import Navbar from "./navbar";
import about from "./about/page";
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid'; 
import Link from 'next/link';
import { Card, CardMedia, Typography } from "@mui/material";

import linkedinImage from '../../public/linkedin-3-32.png'; 
import githubImage from '../../public/github-10-32.png';

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

      {/* 
        Interactive buttons for Johann Fernandez Profile 
      */}
      <Link href="https://www.linkedin.com/in/johann-fernandez-9143a4200/">
        <Image 
          src={linkedinImage} 
          alt="Linkedin Image"
          style={{
            position: "absolute", 
            bottom: "10%", 
            left: "49%"
          }}
        />
      </Link>
      <Link href="https://github.com/Conspiciens">
        <Image 
          src={githubImage} 
          alt="Github Image"
          style={{
            position: "absolute", 
            bottom: "10%", 
            left: "52%"
          }}
        />
      </Link>
    </Card>
  </div>
  )
}
