import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState  } from 'react';
import { AdminLayout } from '@layout';
import { Card ,Table } from 'react-bootstrap';
import {brandService} from '../../_services';
import Link from 'next/link';



interface NewProductPageProps {}

const NewProductPage: NextPage<NewProductPageProps> = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    discription: '',
    sku:'',
    brand:'',
    type:''
  });
  
  const producttype=["Men","Women","Kids"];

  const [image, setImage] = useState<File | null>(null);
const [previewImage, setPreviewImage] = useState<string | null>(null); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
  
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreviewImage(null);
    }
  };

 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append('name', product.name);
   
   

  

   const createproduct=brandService.createbrand(formData);
       
  //  createproduct.then(res=>{
  //   console.log(res);
  //  });
    router.push('/brands');
  };

  return (
    <AdminLayout>
    <Card>
      <Card.Header>Create New Brand   </Card.Header>
      <Card.Body>
     <div className='container'>
      <form onSubmit={handleSubmit} className='cr-form'>
      <div className="form-group fform-group">
          <label htmlFor="name">Brand Name</label>
          <input  className="form-control" type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
        </div>
   
        
        <div className="form-group fform-group">
        <button  className="btn btn-warning sub-butn" type="submit">Create Brand</button>
        </div>
      </form>
    </div>
    </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default NewProductPage;
