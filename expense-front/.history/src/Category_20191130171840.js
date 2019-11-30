import React, { Component } from 'react';

class Category extends Component {
    state = {
        isLoading: true,
        categories: []
    }
    async componentDidMount(){
        const response = await fetch('/api/catogories')
        const body = await response.json();
        this.setState({categories: body},{isLoading: false})
    } 

    render() { 
        const {categories, isLoading} = this .state
        if(isLoading){
            return (<div>Loading...</div>) 
        }

        return ( );
    }
}
 
export default Category;