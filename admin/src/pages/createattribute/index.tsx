import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, KeyboardEvent } from 'react';
import { AdminLayout } from '@layout';
import { Card, Table } from 'react-bootstrap';
import { attributeService } from '../../_services';
import Link from 'next/link';



interface NewProductPageProps { }

const NewProductPage: NextPage<NewProductPageProps> = () => {
  const router = useRouter();
  const [attribute, setAttribute] = useState({
    name: '',
    discription: ''
  });

  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    // If the input name is 'unit', add the value to the 'unit' state
    if (name === 'unit') {
      setAttribute((prevProduct) => ({ ...prevProduct, [name]: [...prevProduct.unit, value] }));
    } else {
      setAttribute((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

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

    const test = {
      'name': attribute.name,
      'description': attribute.discription,
      'units': tags
    }





    const createproduct = attributeService.createattribute(test);

    router.push('/attributes');
  };

  return (
    <AdminLayout>
      <Card>
        <Card.Header>Create New Attribute   </Card.Header>
        <Card.Body>
          <div className='container'>
            {/* <form onSubmit={handleSubmit} className='cr-form'> */}
            <div className="form-group fform-group">
              <label htmlFor="name">Attribute Name</label>
              <input className="form-control" type="text" id="name" placeholder='Enter Attribute Name' name="name" value={attribute.name} onChange={handleInputChange} />
            </div>

            <div className="form-group fform-group">
              <label htmlFor="name">Attribute Description</label>
              <input className="form-control" type="text" id="name" placeholder='Enter Attribute Description' name="discription" value={attribute.discription} onChange={handleInputChange} />
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
              <button className="btn btn-warning sub-butn" onClick={submitbuttonclick}>Create Attribute</button>
            </div>
            {/* </form> */}
          </div>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default NewProductPage;
