import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@layout';
import { Card, Modal, Button } from 'react-bootstrap';
import { categoryService } from '../../_services';


interface Category {
  _id: string;
  name: string;
  type: string; 
}

interface CategoryEditProps {
  category: Category;
}

const CategoryEditPage: React.FC<CategoryEditProps> = ({ category }) => {
  const router = useRouter();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formData, setFormData] = useState<Category>({
    _id: '',
    name: '',
    type: ''
  });


  useEffect(() => {
    if (category) {
      setFormData({
        _id: category._id,
        name: category.name,
        type: category.type,
      });
      console.log(category)
    }
  }, [category]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {

    console.log(formData)

    event.preventDefault();

    const editdata = categoryService.editcategory(formData).then(response => {
      // console.log(response)
      if (response.status == 200) {
        setShowSuccessModal(true);
        // Hide the error modal if it was open
        setShowErrorModal(false);
        router.push('/categories');
      } else {
        setShowErrorModal(true);
        // Hide the success modal if it was open
        setShowSuccessModal(false);
      }
    });

  };

  return (
    <AdminLayout>
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Category updated successfully!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Error on updating the category!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card>
        <Card.Header>Category Edit</Card.Header>
        <Card.Body>
          <div>
            <h1>Edit Category Details </h1>

          </div>

          <form name="edit-category" className='edit-cat-frm' onSubmit={handleSubmit}>
            <div className="form-group edit-frm">
              <label>Category Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group edit-frm">
              <label>Product Type</label>
              <select name="type" onChange={handleInputChange} value={formData.type}>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <div className="form-group edit-frm">
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const category = await categoryService.getcategories(id);
    return {
      props: {
        category,
      },
    };
  } catch (error: any) {
    // Handle errors if the API call fails
    console.error('Error fetching category data:', error.message);
    return {
      notFound: true, // Return 404 page or error handling page
    };
  }


}

export default CategoryEditPage;

