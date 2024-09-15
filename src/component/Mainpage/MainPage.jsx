import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box
} from '@mui/material';
import PermitIcon from '@mui/icons-material/Verified'; // Example Icons
import VehicleIcon from '@mui/icons-material/DirectionsCar';
import SupplierIcon from '@mui/icons-material/Search';

const MainPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Welcome to TransitHub
      </Typography>
      <Typography variant="h6" gutterBottom align="center" sx={{ mb: 4 }}>
        Please choose an option below to proceed:
      </Typography>
      
      <Grid container spacing={4}>
        {/* Permit Verification Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <PermitIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h5" component="div" align="center">
                Permit Verification
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                Verify your permit status or apply for a new one.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" size="large">
                Verify Permit
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Vehicle Registration Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <VehicleIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h5" component="div" align="center">
                Vehicle Registration
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                Register your vehicle for transporting materials.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" size="large">
                Register Vehicle
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Find a Supplier Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <SupplierIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h5" component="div" align="center">
                Find a Supplier
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                Locate and contact a reliable material supplier.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" size="large">
                Find Supplier
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
