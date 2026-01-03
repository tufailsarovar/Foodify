import { Grid, TextField } from "@mui/material";

export default function AddressForm({ address, setAddress }) {
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          required
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Mobile Number"
          name="phone"
          required
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Street Address"
          name="street"
          required
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="City"
          name="city"
          required
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Pincode"
          name="pincode"
          required
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
