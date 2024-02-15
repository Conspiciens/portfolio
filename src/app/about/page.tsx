import { Box, Grid } from '@mui/material';

const About = () => {
    return(
    <>
      <div style={{ position: 'relative', marginTop: '50px'}}> 
        <Grid 
          container direction="row" 
          justifyContent="flex-end" 
          alignItems="center"> 
          <Box component="span" sx={{
            width: '40%',
            display: 'block', 
            p: 1,  
            m: 1, 
            border: '1px solid', 
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
          }}> 
              Johann Fernandez is an aspiring Software/Machine Learning/Cybersecurity engineer. When given his first 
              Python book he learn to code in his spare time. From there he tinkered with various projects and even 
              took time to learn about Cybersecurity. From here he expanded his knowledge fields to other domains in programming 
              such as MySQL, Flask, C++, AWS, C, Embedded Systems, Linux and Machine Learning. Johann is currently working on numerous projects 
              that can be found on this website. Such as an Flutter Application that uses Google Maps and Firebase for his backend. 
              Johann at his Internship at Endera Motors worked on serveral applications that required usiing S3 and Lambda from AWS. 
              Furthermore, he used Qt to ship a customized touch screen application for the Vehicle with Open Street Maps. He's also 
              experienced with Angular and TypeScript to write websites for engineers. Johann aspires to beocme a experience Software Engineer 
              or Machine Learning Engineer, whatever it takes. Aspiring to work for revolutionary projects that push humanity foward to 
              the stars.


          </Box>
        </Grid>
      </div> 
    </>
    ); 
}

export default About; 