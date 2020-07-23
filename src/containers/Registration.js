import React, { Component } from 'react';
import { Form,Col,Button, Container, Table} from 'react-bootstrap';

 
class Registration extends Component{

    state = {
        items : [],
        firstname : '',
        lastname : '',
        contactnumber : '',
        address: '',
        selectedOption:''
        }
 
    
    onChangeAction = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onValueChange =(event) => {
        this.setState({
          selectedOption: event.target.value
        });
    }

    clickHandler = (event) => {
        event.preventDefault();
        const items = [...this.state.items];
        items.push({
            firstname: this.state.firstname,
            lastname:this.state.lastname,
            contactnumber:this.state.contactnumber,
            address:this.state.address,
            selectedOption: this.state.selectedOption
    } ) ;
        this.setState({items})
        
    }
    
    render() {
        const items = this.state.items.map(item =>{
            return <tr key={item.contactnumber}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td> 
            <td>{item.contactnumber}</td>
            <td>{item.address}</td>
            <td>{item.selectedOption}</td>
            </tr>
        })
        // return console.log(item) })

        return(
                <Container>
                <h3>Customer Details</h3>
                <Form >
                <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstname">
                    <Form.Control 
                    type="text" 
                    placeholder="First name" 
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChangeAction}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastname">
                    <Form.Control 
                    type="text" 
                    placeholder="Last name" 
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChangeAction}/>
                </Form.Group>
                </Form.Row>
                <Form.Group controlId="formContactNo">
                    <Form.Control 
                    type="text" 
                    placeholder="Contact Number" 
                    name="contactnumber"
                    value={this.state.contactnumber}
                    onChange={this.onChangeAction}/>
                </Form.Group>
                <Form.Group controlId="formGridAddress">
                    <Form.Control 
                    type="text" 
                    placeholder="Address" 
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAction}/>
                </Form.Group>
                {/* {console.log(this.state)} */}
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Male"
                        checked={this.state.selectedOption === "Male"}
                        onChange={this.onValueChange}
                        />
                        Male
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Female"
                        checked={this.state.selectedOption === "Female"}
                        onChange={this.onValueChange}
                        />
                        Female
                    </label>
                    </div>
                <Form.Group>
                    <Button variant="primary" type="submit" onClick={this.clickHandler}>Submit</Button>
                </Form.Group>
                </Form>
                <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Number</th>
                        <th>Address</th>
                        <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }

}
    

export default Registration;