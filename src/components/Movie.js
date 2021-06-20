import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


export class Movie extends Component {
  
    render() {
      console.log(this.props.movieData);
      console.log('movie data',this.props);
        return (

            <>
          
          {   
          
          this.props.movieData.map(value => {
                 return(
                   
                    <Card style={{background: "#F6C6EA", width:'200px'}}>
                  <Card.Body>
                    <Card.Title>title: {value.title}</Card.Title>
                  <Card.Text>Overview :   {value.overview}   </Card.Text>
                 <Card.Text> Average Votes {value.averageVotes} </Card.Text>
                 <Card.Text> Released_on : {value.released}</Card.Text>
                 <Card.Text> Popularity : {value.popularity}</Card.Text>
                 <Card.Img style={{width : '50px' , height:'100px'}} variant="top" src={value.img}/>
                 </Card.Body>
                 </Card>

                 )
             })


          }
           
        </>
         
        )
    }
}

export default Movie