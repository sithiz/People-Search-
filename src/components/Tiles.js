import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Tile = (props) => (
  props.DataPeople.map((position) =>{
  return (
        <div className='cards' >
        <Card >
            {
                // **********************
                // Planned to bring in image from db
                // **********************
            }
            <Image src='' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{
                //this is where the name should go
                position.firstname + ' ,' + position.lastname
            } 
            </Card.Header>
            <Card.Description>
            Age:
            {    position.age
                //Age should go here
            }
            </Card.Description>
            <Card.Content>
                Address:{
                    position.address
                    //Address should go here
                }
            </Card.Content>
            <Card.Content>
                Interest: {
                    position.interests
                    //interest goes here 
                }
            </Card.Content>
            </Card.Content>
            </Card>
        </div>
        
        )
    })
)

export default Tile