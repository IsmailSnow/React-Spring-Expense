import React, { Component } from 'react';
import AppNav from './AppNav';

class Category extends Component {
    state = {
        isLoading: true,
        categories: []
    }
    async componentDidMount(){
        const response = await fetch('/api/categories')
        const body = await response.json();
        this.setState({categories: body,isLoading: false})
    } 

    render() { 
        const {categories, isLoading} = this .state
        if(isLoading){
            return (
            <div>Loading...</div>) 
        } 
        const cathtml = categories.map(item =><div id={item.id}>{item.name}</div>)
        return (
         <div>
             <AppNav/>
            <h2>Categories</h2>
             {cathtml}
         </div>
         );
    }
}
 
export default Category;