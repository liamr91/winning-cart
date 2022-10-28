import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PaymentButtons() {
        return (
						<Stack spacing={2} direction="row">
							<Button variant="contained">Pay Total</Button>
							<Button variant="outlined">Split Payment</Button>
						</Stack>
				);
    }


