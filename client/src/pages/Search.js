import React, { useState } from 'react'
import { Col, Row, Container } from "../components/Grid"
import API from "../utils/API"
import Card from "../components/Card"

function Search() {
    const [books, setBooks] = useState([])
    const [searchBook, setSearchBook] = useState("")

    //GET all books and set them to books state
    function getBooks() {
        API.getBooksByTitle(searchBook)
            .then(res => {

                console.log(res.data.items, "book")
                setBooks(res.data.items)
            })
            .catch(err => console.log(err))
    }

    //handle change function and set value to setSearchBook
    function handleChange(event) {
        const { value } = event.target;
        setSearchBook(value)
    }

    //handle search submit to use API once form is completed
    function handleSearchSubmit(event) {
        event.preventDefault();

        if (searchBook) {
            getBooks();
        }
    };

    //retrieves from API the book data to save the book
    function handleSaveSubmit(bookData) {
        API.saveBook({
            
            title:bookData.volumeInfo.title ,
            authors: bookData.volumeInfo.authors,
            image:bookData.volumeInfo.imageLinks.thumbnail ,
            description:bookData.volumeInfo.description ,
            link:bookData.volumeInfo.previewLink 
        })
    };



    return (
        <Container>
            <Row>
                <div className="jumbotron">
                    <h1>Google Books Search</h1>


                </div>
                <Col>
                    <form>

                        <input onChange={handleChange}
                            name="title"
                            placeholder="search for books">

                        </input>
                        <button onClick={handleSearchSubmit}>Search</button>
                    </form>

                </Col>

                <Col>
                    <div>
                        <h2>Search Results</h2>
                        {books.length > 0 ? books.map(book => {
                            return (
                                <Card key={book.volumeInfo.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    image={ book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.thumbnail : "https://lh3.googleusercontent.com/proxy/BiRVR9qoYFvNBRAukXex3NUXOkeIypFR4B-YNlFlr52qFSJVAt7OUT-H0xbLampxRjYhLBLjIfHdkbUiG9W0qsXIKFScsiodyTA4-mKG7HhQCvaFrn3zTRjCWyJMSRYXrg" }
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.previewLink}
                                    book={book}
                                    saveSubmit={handleSaveSubmit}>
                                </Card>

                            )
                        }) : "book not found"}




                       
                    </div>
                </Col>


            </Row>
        </Container >
    )
}

export default Search
