import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { AdminLayout } from '@layout';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const Home: NextPage = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalcategories, setTotalcategories] = useState<number>(0);
  const [totalbrands, setTotalbrands] = useState<number>(0);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/count`); 
        console.log(response)
        setTotalProducts(response.data.totalProducts); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const fetchcategories = async () => {
      try {
        // const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/count`); 
        // console.log(response.data)
        // setTotalcategories(response.data.totalcategories); 
      
        setTotalcategories(8); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const fetchbrands = async () => {
      try {
        // const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}brand/count`); 
        // console.log(response.data)
        // setTotalbrands(response.data.totalbrands); 
      
        setTotalbrands(9); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the function to fetch the number of products
    fetchProducts();
    fetchcategories();
    fetchbrands();
  }, []);

  return (
    <AdminLayout>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <Card>
            <Card.Body>
              <h4>Total Products </h4>
            </Card.Body>
            <h5 className='dash-text'>{totalProducts}</h5>
          </Card>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Card>
            <Card.Body>
              <h4>Total Categories</h4>
            </Card.Body>
            <h5 className='dash-text'>{totalcategories}</h5>
          </Card>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Card>
            <Card.Body>
              <h4>Total Brands</h4>
            </Card.Body>
            <h5 className='dash-text'>{totalbrands}</h5>
          </Card>
        </div>
      </div>
      
       
    
    </AdminLayout>
  );
};

export default Home;
