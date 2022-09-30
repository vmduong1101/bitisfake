import React from 'react'
import Container from '../Container'
import { products } from '../../Products'

export default function Man({ page }) {
    const type = 'nam'
    return (
        <Container products={products.filter((item) => item.category.sex === 'Nam')} type={type} page={page} />
    )
}
