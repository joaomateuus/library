import React, {useEffect, useState} from 'react';
import { Container, TitleContainer } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { BooksCard } from '../../components/BooksCard';
import axios from 'axios';
// import BookService from '../../services/Books';

interface Books {
  title: string;
  subtitle: string;
  image: string;
  isbn13: string;
}

export const Books: React.FC = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect( () => {
    const url = 'https://api.itbook.store/1.0/new'
    axios.get(url).then((response) => {
      setBooks(response.data.books)
      console.log(response.data.books)
    })
  }, [])

  const listBooks = books.map((book): React.ReactNode => {
    return (
        <BooksCard 
          {...book}
        />
      )
  })

  return (
    <div>
        <Container>
          <TitleContainer>
            <h1>Books</h1>
            <span>Here you can see and borrow all books that are avaible in our library</span>
          </TitleContainer>
          <SearchBar placeholder='Enter a name of a Book' />
        </Container>
        <div style={{background: '#add8e6'}}>
          {books ? listBooks : null}
        </div>
    </div>
  )
}