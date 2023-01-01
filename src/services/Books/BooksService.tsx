import axios from 'axios';

const url = 'https://api.itbook.store/1.0/new'

const getBooks = ( async () => {
    try {
        const response = await axios.get(url)
        return response.data.books
    } catch (error) {
        console.log(error);        
    }
});

const BooksService = {
    getBooks
}

export default BooksService