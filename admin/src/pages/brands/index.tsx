import Link from 'next/link';
import { AdminLayout } from '@layout'
import { Card ,Table } from 'react-bootstrap'
import { GetStaticProps } from 'next';
import { Product } from '../../types';
import {brandService} from '../../_services';
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
          <Card.Header>Products Listing <Link legacyBehavior href={`/createbrand`}>
          <button  className="btn btn-secondary ml-3 cr-new-butn">Create New Brand</button>
          </Link></Card.Header>
        <Card.Body>
        <Table responsive bordered hover>
        <thead className="bg-light">
        <tr>
         
          <th>Name</th>
         
          
          <th></th>
        </tr>
      </thead>
      <tbody>
       
        {products.map((product) => (
           <tr key={product._id}>

         <td>{product.name}</td>
       
         
         
        
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
 
 
      
  const allproduct= await brandService.allbrands();
  
  const products: Product[] =allproduct; 
 
  


  return {
    props: {
      products,
    },
  };

  
};

export default ProductsPage;
