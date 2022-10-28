import { Checkbox } from '@mui/material';
import {React, useState } from 'react'
import ItemList from '../ItemList'

const productList = [
    { id: 1, name: "Monster Munch", price: 0.5, quantity: 2, paid: false, selected: false },
    { id: 2, name: "Chicken Nuggets", price: 2.5, quantity: 1, paid: false, selected: false },
    { id: 3, name: "Pizza", price: 3, quantity: 1, paid: false, selected: false },
    { id: 4, name: "Burger", price: 2.5, quantity: 1, paid: false, selected: false },
    { id: 5, name: "Hash browns", price: 1.2, quantity: 2, paid: false, selected: false },
];

export default function List() {

    const [products, setProducts] = useState(productList)

    const handleCheckboxClick = (product) => {
        const productsB = products
        const productToUpdate = productsB.find(item => item.id === product.id)
        productToUpdate.selected = !product.selected
        setProducts(productsB)
        console.log(products, 'products in state')
    }

    return(
        <div>
            {products.map(product => {
                console.log(product, 'product in jsx')
               return (
                    <div>
                        <ItemList product={product} />
                        <Checkbox onChange={() => handleCheckboxClick(product)} checked={product.selected} />
                    </div>
                )
            })} 
        </div>
    )
}