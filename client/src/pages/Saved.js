import React, {useState, useEffect } from 'react'
import API from "../utils/API"
import Card from "../components/Card"
import { Col, Row, Container } from "../../components/Grid";
import axois from 'axios'



function handleDelete(id) {
    //deleting book by id
    API.deleteBook(id)
    // filter id saying if current book does not include the id we are targeting then move on to the next id
    setBooks(books.filter((book)=> {
        return book.volumeInfo.id !== volumeInfo.id;
    }))
}

const [books, setBooks] = useState([])

useEffect(() => {
    API.getBooks()
    .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }, [])

function Saved({books}) {
    return (
        <Container>
        <Row>
            <div className="jumbotron">
                <h1>Google Books Search</h1>
            </div>
 

            <Col>
                <div>
                    <h2>Saved Results</h2>
                    <button onClick={handleDelete}>Delete Book</button>
                    {books.length > 0 ? books.map(book => {
                        return (
                            <Card key={book.volumeInfo.id}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                image={ book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.thumbnail : "https://lh3.googleusercontent.com/proxy/BiRVR9qoYFvNBRAukXex3NUXOkeIypFR4B-YNlFlr52qFSJVAt7OUT-H0xbLampxRjYhLBLjIfHdkbUiG9W0qsXIKFScsiodyTA4-mKG7HhQCvaFrn3zTRjCWyJMSRYXrg" }
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.previewLink}
                                book={book}
                                deleteBook={handleDelete}
                                >
                            </Card>
                            
                        )
                    }) : "No books saved"}




                   
                </div>
            </Col>


        </Row>
    </Container >
        
    )
}

export default Saved
