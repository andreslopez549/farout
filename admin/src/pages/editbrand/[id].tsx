import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@layout';
import { Card, Modal, Button } from 'react-bootstrap';
import { brandService } from '../../_services';


interface Brand {
  _id: string;
  name: string;
}

interface CategoryEditProps {
  brand: Brand;
}

const CategoryEditPage: React.FC<CategoryEditProps> = ({ brand }) => {
  const router = useRouter();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formData, setFormData] = useState<Brand>({
    _id: '',
    name: ''
  });


  useEffect(() => {
    if (brand) {
      setFormData({
        _id: brand._id,
        name: brand.name
      });
      console.log(brand)
    }
  }, [brand]); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const close =()=>{
    setShowSuccessModal(false);
    setShowErrorModal(false)
    router.push('/brands');
  }

  const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {

    console.log(formData)

    event.preventDefault();

    const editdata = brandService.editbrand(formData).then(response => {
      // console.log(response)
      if (response.status == 200) {
        setShowSuccessModal(true);
        // Hide the error modal if it was open
        setShowErrorModal(false);
      
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
          Brand updated successfully!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Error on updating the brand!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card>
        <Card.Header>Brand Edit</Card.Header>
        <Card.Body>
          <div>
            <h1>Edit Brand Details </h1>

          </div>

          <form name="edit-brand" className='edit-cat-frm' onSubmit={handleSubmit}>
            <div className="form-group edit-frm">
              <label>Brand Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
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
    const brand = await brandService.getbrands(id);
    return {
      props: {
        brand,
      },
    };
  } catch (error: any) {
    // Handle errors if the API call fails
    console.error('Error fetching brand data:', error.message);
    return {
      notFound: true, // Return 404 page or error handling page
    };
  }


}

export default CategoryEditPage;

