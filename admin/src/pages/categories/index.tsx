import Link from 'next/link';
import { AdminLayout } from '@layout'
import { Card, Table, Modal, Button } from 'react-bootstrap'
import { GetStaticProps } from 'next';
import { Product } from '../../types';
import { categoryService } from '../../_services';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';


interface ProductsProps {
  products: Product[];
}


const ProductsPage: React.FC<ProductsProps> = ({ products: initialProducts }) => {

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDelete = (id) => {


    const del = categoryService.deletecategory(id).then(res => {
      if (res.status == true) {
        const updatedProducts = products.filter((product) => product._id !== id);
        setProducts(updatedProducts);
        setShowSuccessModal(true);
      } else {
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
          Category deleted successfully!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>

        <Card.Header>Category Listing <Link legacyBehavior href={`/createcategory`}>
          <button className="btn btn-secondary ml-3 cr-new-butn">Create New Category</button>
        </Link></Card.Header>
        <Card.Body>
          <Table responsive bordered hover>
            <thead className="bg-light">
              <tr>

                <th>Name</th>
                <th>Type</th>
                <th>Edit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {products.map((product) => (
                <tr key={product._id}>

                  <td>{product.name}</td>
                  <td>{product.type}</td>



                  <td><Link legacyBehavior href={`/editcategory/${product._id}`}>
                    <button className="btn btn-secondary ml-3 cr-new-butn">Edit</button>
                  </Link></td>
                  <td className='delete-col'>

                    <button onClick={() => handleDelete(product._id)}><FaTrash /></button>

                  </td>
                </tr>

              ))}
            </tbody>
          </Table>

        </Card.Body>
      </Card>
    </AdminLayout>

  );
};

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {



  const allproduct = await categoryService.allcategories();

  const products: Product[] = allproduct;




  return {
    props: {
      products,
    },
  };


};

export default ProductsPage;
