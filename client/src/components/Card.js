import React from 'react'

function Card(props) {
    return (

        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} alt="..." />
                </div>
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.authors}</p>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"></p><a href={props.link}>View Book</a>
                        <button onClick={() => props.saveSubmit(props.book)} >Save Book</button>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
