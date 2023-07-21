import Link from 'next/link';
import { AdminLayout } from '@layout'
import { Card ,Table } from 'react-bootstrap'
import { GetStaticProps } from 'next';
import { Product } from '../../types';
import {productService} from '../../_services';
import { useState } from 'react';



interface ProductsProps {
  products: Product[];
}


const ProductsPage: React.FC<ProductsProps> = ({ products }) => {


  

  return (
    <AdminLayout>
      <Card>
        {/* <Card.Header>Products Listing  <Link legacyBehavior href={`/createproduct`}>
            <a>Create Product</a>
          </Link> </Card.Header> */}
          <Card.Header>Products Listing <Link legacyBehavior href={`/createproduct`}>
          <button  className="btn btn-secondary ml-3 cr-new-butn">Create New Product</button>
          </Link></Card.Header>
        <Card.Body>
        <Table responsive bordered hover>
        <thead className="bg-light">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Discription</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       
        {products.map((product) => (
           <tr key={product._id}>
         <td> <img src={product.images?`${process.env.NEXT_PUBLIC_API_BASE_URL}images/${product.images}`:''} width="100px" alt={product.name} /></td>
         <td>{product.name}</td>
          <td><p>{product.discription}</p></td>
          <td>${product.price}</td>
          <td><Link legacyBehavior href={`/product/${product._id}`}>
            <a >View Details</a>
          </Link></td>
        
          <td></td>
          
          </tr>
      
      ))}
      </tbody>
      </Table>
          
        </Card.Body>
      </Card>
    </AdminLayout>
    
  );
};

export  const getStaticProps: GetStaticProps<ProductsProps> = async () => {
 
 
      
  const allproduct= await productService.allproducts();
  
  const products: Product[] =allproduct; 
 
  


  return {
    props: {
      products,
    },
  };

  
};

export default ProductsPage;
