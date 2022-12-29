import React from 'react'
import { Container, TitleContainer } from './styles'
import { SearchBar } from '../../components/SearchBar'

export const Books: React.FC = () => {
  return (
    <div>
        <Container>
          <TitleContainer>
            <h1>Books</h1>
            <span>Here you can see and borrow all books that are avaible in our library</span>
          </TitleContainer>
          <SearchBar placeholder='Enter a name of a Book' />
        </Container>
    </div>
  )
}
