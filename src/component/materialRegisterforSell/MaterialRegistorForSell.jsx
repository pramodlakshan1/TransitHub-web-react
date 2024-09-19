import React, { useState } from 'react';
import {
  Container, TextField, Button, Grid, Typography, MenuItem,
  InputLabel, Select, FormControl, Box, Card, CardMedia
} from '@mui/material';

const provinces = ['Western', 'Central', 'Eastern', 'Northern', 'Southern', 'North Western', 'North Central', 'Uva', 'Sabaragamuwa'];

const MaterialSellPage = () => {
  const [permitNumber, setPermitNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [permitFor, setPermitFor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handlePermitSearch = () => {
    // Here you'd make a request to the backend to validate the permit number
    // If valid, it would return the auto-fill data
    const isValidPermit = permitNumber === '123456'; // Simulated validation
    
    if (isValidPermit) {
      setVehicleNumber('WP-XYZ1234');
      setSupplierName('John Doe Construction');
      setPermitFor('Mining');
    } else {
      alert('Invalid permit number');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!price || !description || !image) {
      alert('Please fill in all the required fields.');
      return;
    }
    
    const formData = {
      permitNumber,
      vehicleNumber,
      supplierName,
      permitFor,
      price,
      description,
      image
    };
    
    console.log('Form Data:', formData);
    alert('Material posted successfully!');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Sell Your Material
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Permit Number"
            variant="outlined"
            fullWidth
            value={permitNumber}
            onChange={(e) => setPermitNumber(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={handlePermitSearch}>
            Verify Permit
          </Button>
        </Grid>

        {vehicleNumber && supplierName && permitFor && (
          <>
            <Grid item xs={12}>
              <TextField
                label="Vehicle Number"
                variant="outlined"
                fullWidth
                value={vehicleNumber}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Supplier Name"
                variant="outlined"
                fullWidth
                value={supplierName}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Permit For"
                variant="outlined"
                fullWidth
                value={permitFor}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </>
        )}

        {vehicleNumber && supplierName && permitFor && (
          <>
            <Grid item xs={12}>
              <TextField
                label="Price (LKR)"
                variant="outlined"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload Image
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
            </Grid>

            {image && (
              <Grid item xs={12}>
                <Card>
                  <CardMedia component="img" image={image} alt="Material" />
                </Card>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default MaterialSellPage;
