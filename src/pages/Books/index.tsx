import React, {useEffect, useState} from 'react';
import { Container, TitleContainer } from './styles';
import { SearchBar } from '../../components/SearchBar';
import { BooksCard } from '../../components/BooksCard';
import axios from 'axios';
import BooksService from '../../services/Books/BooksService';

interface Books {
  title: string;
  subtitle: string;
  image: string;
  isbn13: string;
}

export const Books: React.FC = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect( () => {
    getBooks();
  }, [])

  const getBooks = (() => {
   try {
    BooksService.getBooks().then((response: Books[]) => {
      setBooks(response)
    })
   } catch (error) {
    console.log(error);
   }
  })

  const listBooks = books.map((book): React.ReactNode => {
    return (
        <BooksCard 
          key={book.isbn13}
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