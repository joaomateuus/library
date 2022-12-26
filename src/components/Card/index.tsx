import React from 'react'
import { Container, CardDiv} from './style';
import { Link } from 'react-router-dom';

interface Props{
  title: string;
  image: string;
  route: string;
}


export const Card: React.FC<Props> = ({title, image, route}) => {
  return (
    <Container>
      <Link to={route} style={{textDecoration: 'none'}}>
        <CardDiv>
          <h1>{title}</h1>
          <img src={image} style={{ height: "40px", width: "40px" }} alt="" />
        </CardDiv>
      </Link>
    </Container>
  )
}
