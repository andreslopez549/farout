import Link from 'next/link';
import { AdminLayout } from '@layout'
import { Card, Table ,Modal ,Button } from 'react-bootstrap'
import { GetStaticProps } from 'next';
import { Product } from '../../types';
import { productService } from '../../_services';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';


interface ProductsProps {
  products: Product[];
}


const ProductsPage: React.FC<ProductsProps> = ({ products : initialProducts}) => {

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDelete = (id) => {  


    const del = productService.deleteproduct(id).then(res => {
     if(res.status==true){
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
      setShowSuccessModal(true);
     }else{
      alert("Error deleting product")
      console.log(res);
     }
     

    });


  }

  return (  
    <AdminLayout>
         <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Product deleted successfully!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Card>

        <Card.Header>Products Listing <Link legacyBehavior href={`/createproduct`}>
          <button className="btn btn-secondary ml-3 cr-new-butn">Create New Product</button>
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
                <th></th>
              </tr>
            </thead>
            <tbody>

              {currentProducts.map((product) => (
                <tr key={product._id}>
                  <td> <img src={product.images ? `${process.env.NEXT_PUBLIC_API_BASE_URL}images/${product.images[0]}` : ''} width="120px" height="110px" alt={product.name} /></td>
                  <td>{product.name}</td>
                  <td><p>{product.discription}</p></td>
                  <td>${product.price}</td>
                  <td><Link legacyBehavior href={`/product/${product._id}`}>
                    <a >View Details</a>
                  </Link></td>

                  <td >
                    <Link legacyBehavior href={`/editproduct/${product._id}`}>
                      <a>Edit Product</a>
                    </Link>
                  </td>

                  <td className='delete-col'>

                    <button onClick={() => handleDelete(product._id)}><FaTrash /></button>

                  </td>

                </tr>

              ))}
            </tbody>
          </Table>

        </Card.Body>
        <div className="pagination">

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={pageNumber === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

        </div>
      </Card>
    </AdminLayout>

  );
};

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {



  const allproduct = await productService.allproducts();

  const products: Product[] = allproduct;




  return {
    props: {
      products,
    },
  };


};

export default ProductsPage;
