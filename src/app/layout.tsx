"use client"

import Navbar from './navbar'
import {Card, CardMedia} from '@mui/material'
import { usePathname } from 'next/navigation'

export default function Layout(
  { children }: { children: React.ReactNode }
) {
  const path = usePathname();

  return (
    <html lang="en">
      <body>
          <Navbar />
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
                    filter: path == '/' ? 'none' : 'blur(3px)'
                  }}
                />
              </Card>
            </div> 
          {children}
      </body> 
    </html>
  )
}