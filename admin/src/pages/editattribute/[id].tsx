import { useEffect, useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@layout';
import { Card, Modal, Button } from 'react-bootstrap';
import { attributeService } from '../../_services';


interface Attribute {
  _id: string;
  name: string;
  description: string;
  units: [];
}

interface AttributeEditProps {
  attribute: Attribute;
}

const CategoryEditPage: React.FC<AttributeEditProps> = ({ attribute }) => {
  const router = useRouter();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [attributes, setAttribute] = useState({
    _id: '',
    name: '',
    description: ''
  });


  useEffect(() => {
    if (attribute) {
      console.log(attribute);
      setAttribute({
        _id: attribute._id,
        name: attribute.name,
        description: attribute.description,
      });
      console.log(attribute)
    }

    setTags(attribute.units);


  }, [attribute]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = event.target;
    console.log(name, value);
    console.log(attributes)
    setAttribute((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(attributes)
  };

  const close = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false)
    router.push('/brands');
  }
  const [tags, setTags] = useState<string[]>([]);

  const addTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value !== "") {
      setTags([...tags, event.currentTarget.value]);
      event.currentTarget.value = "";
    }
  };

  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  const submitbuttonclick = () => {

    console.log(tags, "tttt");
    const id = attribute._id;
    const test = {
      'name': attributes.name,
      'description': attributes.description,
      'units': tags
    }





    const createproduct = attributeService.editattribute(test, id).then(res=>{
     
       if(res.status==true){
        setShowSuccessModal(true)
            router.push('/attributes');
       }else{
        setShowErrorModal(true);
       }
    }
    );


  };

  return (
    <AdminLayout>
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Attribute updated successfully!
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
          Error on updating the attribute!
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
          <div className='container'>
            {/* <form onSubmit={handleSubmit} className='cr-form'> */}
            <div className="form-group fform-group">
              <label htmlFor="name">Attribute Name</label>
              <input className="form-control" type="text" id="name" placeholder='Enter Attribute Name' name="name" value={attributes.name} onChange={handleInputChange} />
            </div>

            <div className="form-group fform-group">
              <label htmlFor="name">Attribute Description</label>
              <input className="form-control" type="text" id="name" placeholder='Enter Attribute Description' name="description" value={attributes.description} onChange={handleInputChange} />
            </div>
            <div className="form-group fform-group list-attribute">
              {tags.map((tag, index) => (
                <li key={index}>
                  <span>{tag}</span>
                  <button
                    className="button-remove"
                    onClick={() => removeTags(index)}
                  >
                    X
                  </button>
                </li>
              ))}
            </div>
            <div className="form-group fform-group">
              <label htmlFor="name">Add Attribute Units</label>
              <input className="form-control" type="text" placeholder='Press Enter after typing to add different units' id="unit" name="unit" onKeyDown={addTags} />
            </div>

            <div className="form-group fform-group">
              <button className="btn btn-warning sub-butn" onClick={submitbuttonclick}>Update Attribute</button>
            </div>
            {/* </form> */}
          </div>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const attribute = await attributeService.getattribute(id);
    return {
      props: {
        attribute,
      },
    };
  } catch (error: any) {
    // Handle errors if the API call fails
    console.error('Error fetching attribute data:', error.message);
    return {
      notFound: true, // Return 404 page or error handling page
    };
  }


}

export default CategoryEditPage;

