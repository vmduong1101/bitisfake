import React from 'react'
import Container from '../Container'
import { products } from '../../Products'

export default function Girl() {
    const type = 'nu'

    return (
        <Container products={products.filter((item) => item.category.sex === 'Nữ')} type={type} />
    )
}
