import { React, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import "./styles.css";

export default function ItemList({ product, showCheckbox, paid }) {
  const [checked, setChecked] = useState(product.selected)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <tr className={paid? 'table-paid' : 'table-not-paid'}>
      <td>
        {/* <img src={product.img} alt={product.name} /> */}
      </td>
      <td>
        {" "}
        <p> {product.name}</p>
      </td>
      <td>
        {" "}
        <p> £{product.price.toFixed(2)}</p>{" "}
      </td>
      {showCheckbox && <Checkbox checked={checked} onChange={handleChange} />}
    </tr>
  )
  }