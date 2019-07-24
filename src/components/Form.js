import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'

export default class Form extends Component {

        
        render() {
            let logic
            {this.props.currentState?logic = <Button onClick={this.props.reset}>Search Again</Button>:logic = <div></div>}
             
            return(
                <form className='form' onChange={this.props.handleChange}
                onSubmit={this.props.handleSubmit} >
                    <label>First Name</label>
                    <Input type='text' name='firstName' id='firstName' />
                    <label>Last Name</label>
                    <Input type='text' name='lastName' id='lastName' />
                    <Input type='submit' value='Submit' />
                    {logic}
                </form>
            );
        };
}



