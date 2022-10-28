import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function PaymentOptions() {

    // const controlProps = (item) => ({
	// 		checked: selectedValue === item,
	// 		onChange: handleChange,
	// 		value: item,
	// 		name: "color-radio-button-demo",
	// 		inputProps: { "aria-label": item },
	// 	});
        
	return (
		<FormControl>
			<FormLabel
				sx={{
					color: "white",
					"&.Mui-focused": {
						color: "white",
					},
				}}
				id="demo-radio-buttons-group-label"
			>
				Select Payment Method:
			</FormLabel>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				name="radio-buttons-group"
				sx={{
					color: "white",
					"&.Mui-focused": {
						color: "white",
					},
				}}
			>
				<FormControlLabel
					value="Card"
					control={
						<Radio
							sx={{
								color: "#D2212E",
								"&.Mui-checked": {
									color: "#D2212E",
								},
							}}
						/>
					}
					label="Card"
				/>
				<FormControlLabel
					value="PayPal"
					control={
						<Radio
							sx={{
								color: "#D2212E",
								"&.Mui-checked": {
									color: "#D2212E",
								},
							}}
						/>
					}
					label="PayPal"
				/>
			</RadioGroup>
		</FormControl>
	);
}
