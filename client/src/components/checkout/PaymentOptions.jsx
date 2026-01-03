import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function PaymentOptions({ payment, setPayment }) {
  return (
    <RadioGroup
      value={payment}
      onChange={(e) => setPayment(e.target.value)}
    >
      <FormControlLabel
        value="cod"
        control={<Radio />}
        label="Cash on Delivery"
      />
      <FormControlLabel
        value="online"
        control={<Radio />}
        label="Online Payment"
      />
    </RadioGroup>
  );
}
