import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Box,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Grid
} from '@mui/material';

// List of Sri Lankan districts and provinces
const districts = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya", "Galle",
  "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu",
  "Batticaloa", "Ampara", "Trincomalee", "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa",
  "Badulla", "Moneragala", "Ratnapura", "Kegalle"
];

const provinces = [
  "Western", "Central", "Southern", "Northern", "Eastern", "North Western", "North Central", "Uva", "Sabaragamuwa"
];

const PermitVerificationAndApplication = () => {
  const [permitType, setPermitType] = useState('');
  const [isDistribute, setIsDistribute] = useState(false);

  const handlePermitTypeChange = (event) => {
    const selectedPermitType = event.target.value;
    setPermitType(selectedPermitType);
    setIsDistribute(selectedPermitType === 'distribute');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Permit Verification Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Permit Verification
        </Typography>
        <TextField
          label="Search Permit Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary">
          Search Permit
        </Button>
      </Box>

      {/* Permit Application Section */}
      <Typography variant="h5" gutterBottom>
        Apply for a Permit
      </Typography>
      <Box sx={{ mb: 3 }}>
        <TextField label="Full Name" variant="outlined" fullWidth sx={{ mb: 3 }} />
        <TextField label="NIC Number" variant="outlined" fullWidth sx={{ mb: 3 }} />
        <TextField label="Mobile Number" variant="outlined" fullWidth sx={{ mb: 3 }} />
        <TextField label="Address" variant="outlined" fullWidth sx={{ mb: 3 }} />
        
        {/* District Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>District</InputLabel>
          <Select defaultValue="" label="District">
            {districts.map((district, index) => (
              <MenuItem key={index} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Province Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Province</InputLabel>
          <Select defaultValue="" label="Province">
            {provinces.map((province, index) => (
              <MenuItem key={index} value={province}>
                {province}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Permit Type Checkboxes */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={<Checkbox checked={permitType === 'distribute'} onChange={handlePermitTypeChange} value="distribute" />}
            label="Permit for Distribute"
          />
          <FormControlLabel
            control={<Checkbox checked={permitType === 'mining'} onChange={handlePermitTypeChange} value="mining" />}
            label="Permit for Mining"
          />
        </Box>

        {/* Conditional Inputs for Distribute Permit */}
        {isDistribute && (
          <Box sx={{ mb: 3 }}>
            <TextField label="Distribute Vehicle Number" variant="outlined" fullWidth sx={{ mb: 3 }} />
            <TextField label="From" variant="outlined" fullWidth sx={{ mb: 3 }} />
            <TextField label="To" variant="outlined" fullWidth sx={{ mb: 3 }} />
          </Box>
        )}

        {/* Permit For What Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Permit For</InputLabel>
          <Select defaultValue="" label="Permit For">
            <MenuItem value="sand">Sand</MenuItem>
            <MenuItem value="gravel">Gravel</MenuItem>
            <MenuItem value="soil">Soil</MenuItem>
            <MenuItem value="black stone">Black Stone</MenuItem>
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button variant="contained" color="primary" fullWidth>
          Apply for Permit
        </Button>
      </Box>
    </Container>
  );
};

export default PermitVerificationAndApplication;
