import React from 'react'
import {  Card, CardContent } from './style'

interface Props {
  title: string;
  subtitle: string;
  image: string;
  isbn13: string;
}

export const BooksCard: React.FC<Props> = ({title, subtitle, image, isbn13}) => {
  return (
      <div style= {
        { padding: '12px'}
      }>
      <Card>
        <CardContent>   
          <h1 style={{marginLeft: '5vw'}}>{title}</h1>
          <img src={image} alt="" />
        </CardContent>
        <span style={{fontSize: '1rem'}}>{subtitle}</span>
      </Card>
    </div>
  )
}
