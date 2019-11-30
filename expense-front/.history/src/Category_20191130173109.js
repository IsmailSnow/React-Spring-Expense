import React, { Component } from 'react';

class Category extends Component {
    state = {
        isLoading: true,
        categories: []
    }
    async componentDidMount(){
        debugger;
        const response = await fetch('/api/catogories')
        const body = await response.json();
        this.setState({categories: body},{isLoading: false})
    } 

    render() { 
        const {categories, isLoading} = this .state
        if(isLoading){
            return (<div>Loading...</div>) 
        } 
        const  cathtml = categories.map(item =><div id={item.id}>{item.name}</div>)
        return (
         <div>
            <h2>Categories</h2>
             {cathtml}
         </div>

         );
    }
}
 
export default Category;