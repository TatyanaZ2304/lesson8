import React from 'react';
class Products extends React.Component{
    render(){
      const id = this.props.match.params.myId;
        return(
        <h2>Product {id}</h2>
      )}}
      export default Products;