import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState  } from 'react';
import { AdminLayout } from '@layout';
import { Card ,Table } from 'react-bootstrap';
import {categoryService} from '../../_services';
import Link from 'next/link';



interface NewProductPageProps {}

const NewProductPage: NextPage<NewProductPageProps> = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
   
    type:''
  });
  
  const producttype=["Men","Women","Kids"];

  const [image, setImage] = useState<File | null>(null);
const [previewImage, setPreviewImage] = useState<string | null>(null); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
  
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };



 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append('name', product.name);
    if(product.type==''){
      product.type='Men'
    }
    formData.append('type',product.type);
   

  

   const createproduct=categoryService.createcategory(formData);
       
  //  createproduct.then(res=>{
  //   console.log(res);
  //  });
    router.push('/categories');
  };

  return (
    <AdminLayout>
    <Card>
      <Card.Header>Create New Category   </Card.Header>
      <Card.Body>
     <div className='container'>
      <form onSubmit={handleSubmit} className='cr-form'>
      <div className="form-group fform-group">
          <label htmlFor="name">Category Name</label>
          <input  className="form-control" type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        
        <div className="form-group fform-group">
          <label htmlFor="imagelink">Select Product Type</label>
          <select  className="form-control" id="type" name="type" value={product.type} onChange={handleInputChange} >
          <option></option>
          { producttype.map((type, index) => (
                      
                      <option key={index} value={type} >{type}</option>
                                            )) }
          </select>
        </div>
   
        
        <div className="form-group fform-group">
        <button  className="btn btn-warning sub-butn" type="submit">Create Category</button>
        </div>
      </form>
    </div>
    </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default NewProductPage;
