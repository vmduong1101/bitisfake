import React from 'react'
import Container from '../Container'
import { products } from '../../Products'

export default function Daughter({ page }) {
    const type = 'Bé gái'

    return (
        <Container products={products.filter((item) => item.category.sex === 'Bé gái')} type={type} page={page} />
    )
}
