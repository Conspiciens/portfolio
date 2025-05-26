import {Card, CardMedia} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import githubImage from '../../../public/github-10-32.png';

export default function Projects() {
    return (
        <> 
            <div style={{ 
              position: 'relative', 
              height: '100vh', 
              }}> 
              <Card sx={{
                width: '100%', 
                height: '100%', 
                position: 'absolute',
                background: 'rgb(0, 0, 0, 0.6)', 
                borderRadius: '0%'
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

                <div id="bc-line">
                    <div id="bc-title" style={{ 
                          paddingTop: "2%",
                          position: 'absolute', 
                          top: "5%", 
                          left: "2%", 
                          color: "#F2F0DF",
                          fontFamily: "monospace", 
                          fontSize: '40px', 
                          fontWeight: 'bold',
                          width: '60%'
                        }}> 
                          Self Driving Vehicle: Behavior Cloning

                          <Link id="bc-link" 
                                      href="https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab/End-To-End-Network" 
                                      style={{
                                        marginTop: '1%',
                                        float: 'right'
                                      }}
                                  >
                                      <Image 
                                        src={githubImage}
                                        alt="Github Image"
                                      />
                          </Link>
                    </div> 
                </div> 
              
                <div id="bc-paragraph"
                  style={{
                    position: 'absolute',
                    top: '15%', 
                    left: '3%',
                    color: '#F2F0DF', 
                    fontSize: '15px',
                   
                  }}>
                  Led the research in building an End to End Neural Network, these models tend to focus on taking raw input 
                  without any form of annotation and then training a model.
                </div>

              </Card>
            </div> 
        </>
    )
}