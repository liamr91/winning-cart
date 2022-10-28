import { React, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import "./styles.css"

export default function ItemList({ product }) {

  return (
    <div className="product">
        <img src={product.img} alt={product.name}/>
        <p> {product.name}</p>
        <p> {product.price}</p>
    </div>
  )
}
