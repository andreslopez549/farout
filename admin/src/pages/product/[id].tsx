import { useRouter } from 'next/router';
import { AdminLayout } from '@layout'
import { Card } from 'react-bootstrap'
import { Product } from '../../types';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetailsPage: React.FC<ProductDetailsProps> = ({ product }) => {

  return (
    <AdminLayout>
      <Card>
        <Card.Header>Products Listing</Card.Header>
        <Card.Body>
    <div>
      <h1>Product Details Page</h1>
      <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/${product.images}`} width="100px" alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.discription}</p>
      <p>Price: ${product.price}</p>
    </div>
    </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export async function getServerSideProps( {params} ) {
  // Fetch data for the given dynamic parameter (e.g., slug)
  
  const { slug } = params;
  console.log(params,"id")
    const productId = params.id;
  // You can fetch data from your API or any other data source based on the slug
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/${productId}`);
  const products = await res.json();
    const product=products.product;

  return {
    props: {
      product,
    },
  };
}



export default ProductDetailsPage;
