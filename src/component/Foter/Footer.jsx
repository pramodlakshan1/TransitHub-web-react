import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          About This App
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          TransitHub is a transport management system tailored specifically for Sri Lanka. It aims
          to streamline the process of managing permits, vehicle registrations, and locating reliable material suppliers. The app is designed to address the key challenges in material transportation and supply chain management, contributing to a more efficient and eco-friendly logistics sector.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Creator & Designer
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          This application was created and designed by [Your Name], a student at [Your University]. The goal was to develop a comprehensive solution for transportation management using modern web technologies and user-friendly design principles.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Developer Details
        </Typography>
        <Typography variant="body1" align="center">
          Developed by [Your Name]. For inquiries or support, contact via{' '}
          <Link href="mailto:your.email@example.com" color="inherit">
            your.email@example.com
          </Link>
          .
        </Typography>
        <Typography variant="body2" color="inherit" align="center" sx={{ mt: 3 }}>
          © 2024 TransitHub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
