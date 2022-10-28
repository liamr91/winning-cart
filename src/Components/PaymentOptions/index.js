import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PaymentButtons from "../PayNowButton";
import PayPal  from "../Paypal/Paypal";

export default function PaymentOptions({ splitPayment }) {
	const [selected, setSelected] = useState(null);
	const [clicked, setClicked] = useState(false);

	// const controlProps = (item) => ({
	// 		checked: selectedValue === item,
	// 		onChange: handleChange,
	// 		value: item,
	// 		name: "color-radio-button-demo",
	// 		inputProps: { "aria-label": item },
	// 	});

	const onClick = () => {
		console.log("clicked");
		setClicked(true);
	};

	const handleSplitOnClick = () => {
		splitPayment()
	}

    function Payment() {
  if (clicked && selected === "PayPal") {
    return <PayPal/>;
  }
   if (clicked && selected === "Card") {
    return <div>Hi, You chose Card!</div>;
  }
}

	// 	if(selected === "PayPal"){
	// 		return (
	// 			<div>Hi, You chose PayPal!</div>
	// 		)
	// 	} if(selected === "Card"){
	// 		return (
	// 			<div>Hi, You chose Card!</div>
	// 		)
	// 	}
	// }
	const handleChange = (e) => {
		setSelected(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
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
						onChange={handleChange}
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
						onChange={handleChange}
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
			<PaymentButtons onClick={onClick} handleSplitOnClick={handleSplitOnClick}/>

  <Payment></Payment>
		</>
	);
}
