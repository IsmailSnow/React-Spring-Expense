import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Table, Container, Input, Button, Label, FormGroup, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Expense extends Component {
    emptyItem = {
        description : '' ,
        expensedate : new Date(),
        id:104,
        location : '',
        category : {id:1 , name:'Travel'}
    }


    
    render() {
        const title = <h3>Add Expense</h3>
        const {categories} = this.state
        const {expenses,isLoading} = this.state

        if (isLoading)
            return(<div>Loading....</div>)
        


        let optionList  =
                categories.map( (category) =>
                    <option value={category.id} key={category.id}>
                                {category.name} 
                    </option>
                )
        
        let rows=
            expsenses.map( expense =>
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.location}</td>
                <td><Moment date={expense.expensedate} format="YYYY/MM/DD"/></td>
                <td>{expense.category.name}</td>
                <td><Button size="sm" color="danger" onClick={() => this.remove(expense.id)}>Delete</Button></td>

              </tr>


            )




        return (
            <div>
                <AppNav />
                <Container>
                    {title}

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="description">Title</Label>
                            <Input type="description" name="description" id="description"
                                onChange={this.handleChange} autoComplete="name" />

                        </FormGroup>

                        <FormGroup>
                            <Label for="category" >Category</Label>
                            <select onChange={this.handleChange}>
                                {optionList}
                            </select>

                        </FormGroup>

                        <FormGroup>
                            <Label for="city">Date</Label>
                            <DatePicker selected={this.state.item.expensedate} onChange={this.handleDateChange} />
                        </FormGroup>

                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="location" onChange={this.handleChange} />
                            </FormGroup>

                        </div>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>


                {''}
                <Container>
                    <h3>Expense List</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Description</th>
                                <th width="10%">Location</th>
                                <th> Date</th>
                                <th> Category</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>

                    </Table>
                </Container>

                }
      
        </div>

        );
    }
}

export default Expsenses;