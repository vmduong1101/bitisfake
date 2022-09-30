import React from 'react'
import Container from '../Container'
import { products } from '../../Products'

export default function Boy({ page }) {
    const type = 'Bé trai'

    return (
        <Container products={products.filter((item) => item.category.sex === 'Bé trai')} type={type} page={page} />
    )
}
