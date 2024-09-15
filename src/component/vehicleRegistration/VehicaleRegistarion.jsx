import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Grid, Alert } from '@mui/material';

// Mock Data or API call for valid permits
const validPermitNumbers = {
  '12345': { vehicleNumber: 'AB-1234' },
  '67890': { vehicleNumber: 'CD-5678' },
};

const VehicleRegistration = () => {
  const [permitNumber, setPermitNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [address, setAddress] = useState('');
  const [vehicleLicense, setVehicleLicense] = useState(null);
  const [error, setError] = useState('');
  const [isPermitValid, setIsPermitValid] = useState(false);

  useEffect(() => {
    // Check if the permit number is valid
    if (permitNumber && validPermitNumbers[permitNumber]) {
      setVehicleNumber(validPermitNumbers[permitNumber].vehicleNumber);
      setIsPermitValid(true);
      setError('');
    } else if (permitNumber) {
      setVehicleNumber('');
      setIsPermitValid(false);
      setError('Invalid permit number. Please check and try again.');
    }
  }, [permitNumber]);

  // Handle vehicle license upload
  const handleVehicleLicenseUpload = (event) => {
    const file = event.target.files[0];
    setVehicleLicense(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent form submission if the permit is invalid
    if (!isPermitValid) {
      setError('Cannot register vehicle with an invalid permit number.');
      return;
    }

    // Process the form submission if valid
    console.log({
      permitNumber,
      vehicleNumber,
      supplierName,
      mobileNumber,
      whatsappNumber,
      address,
      vehicleLicense,
    });
    alert('Vehicle registered successfully!');
  };

  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Vehicle Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Permit Number */}
          <Grid item xs={12}>
            <TextField
              label="Permit Number"
              fullWidth
              value={permitNumber}
              onChange={(e) => setPermitNumber(e.target.value)}
              required
              error={!isPermitValid && permitNumber.length > 0}
              helperText={!isPermitValid && permitNumber.length > 0 ? 'Invalid permit number' : ''}
            />
          </Grid>

          {/* Auto-filled Vehicle Number */}
          <Grid item xs={12}>
            <TextField
              label="Vehicle Number"
              fullWidth
              value={vehicleNumber}
              disabled
            />
          </Grid>

          {/* Supplier Name */}
          <Grid item xs={12}>
            <TextField
              label="Supplier Name"
              fullWidth
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              required
            />
          </Grid>

          {/* Mobile Number */}
          <Grid item xs={12}>
            <TextField
              label="Mobile Number"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </Grid>

          {/* WhatsApp Number */}
          <Grid item xs={12}>
            <TextField
              label="WhatsApp Number"
              fullWidth
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>

          {/* Upload Vehicle License (File/Camera Access) */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ mb: 2 }}
            >
              Upload Vehicle License Photo
              <input
                type="file"
                accept="image/*"
                capture="environment"
                hidden
                onChange={handleVehicleLicenseUpload}
              />
            </Button>
            {vehicleLicense && (
              <Box>
                <img
                  src={vehicleLicense}
                  alt="Vehicle License"
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
              </Box>
            )}
          </Grid>

          {/* Error Message */}
          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={!isPermitValid}
            >
              Register Vehicle
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default VehicleRegistration;
