import React from 'react'
import { Card } from './Card'


export function Board() {    
    return (
        <div style={style}>
            {/* <Card icon="123">😂</Card> */}
            <Card>😂</Card>
            <Card>💕</Card>
            <Card>😁</Card>
            <Card>🍕</Card>
            <Card>🐳</Card>
            <Card>💕</Card>
            <Card>🍕</Card>
            <Card>🐳</Card>
            <Card>😁</Card>
            <Card>😂</Card>
        </div>
    )
}

const style = {
    backgroundColor: '#2f2f2f',
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gap: '1em',
    padding: '1em',
}