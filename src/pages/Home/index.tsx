import React from 'react'
import { Card } from '../../components/Card/index'
import { Container } from './styles'

type Props = {

}

export const Home: React.FC = (props: Props) => {
  return (
    <>
      <Container>
        <Card
         title='Books'
         image='https://cdn-icons-png.flaticon.com/512/5365/5365760.png'
         route='/books'
         />
        <Card 
          title='Borrows'
          image='https://pngimage.net/wp-content/uploads/2018/05/borrow-icon-png-3.png'
          route='/borrows'
         />
        <Card
          title='Cashier' 
          image='http://cdn.onlinewebfonts.com/svg/img_507209.png'
          route='/cashier'
         />
      </Container>
    </>
  )
}
