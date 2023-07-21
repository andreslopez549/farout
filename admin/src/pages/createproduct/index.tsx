import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AdminLayout } from '@layout';
import { Card, Alert } from 'react-bootstrap';
import { productService, brandService, categoryService } from '../../_services';
import Link from 'next/link';



interface NewProductPageProps { }

interface Brands {
  name: string;
}
interface Category {
  name: string,
  type: string
}


const NewProductPage: NextPage<NewProductPageProps> = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    discription: '',
    sku: '',
    brand: '',
    type: '',
    category: '',
    inventory: ''
  });

  const producttype = ["Men", "Women", "Kids"];

  const [image, setImage] = useState<File | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showdangerAlert, setShowdangerAlert] = useState(false);
  const [showvariants, setShowvariants] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [brands, setBrands] = useState<Brands[]>([]);
  const [category, setcategory] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch brands from api

    const getbrands = brandService.allbrands().then(res => {
      setBrands(res);
    });

    const getcategory = categoryService.allcategories().then(res => {
      setcategory(res);
    });



  }, []);

  const handleVariantbuttonclick = () => {

    console.log("Variant clicked");
    setShowvariants(true);

  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
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

  const handletypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {


  };



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {


    event.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('inventory', product.inventory);
    formData.append('brand', product.brand);
    formData.append('discription', product.discription);
    formData.append('sku', product.sku);
    formData.append('type', product.type);
    formData.append('image', image as File);

    const createproduct = productService.createproduct(formData).then(response => {
      if (response.status == 200) {
        setShowSuccessAlert(true);
      } else if (response.status == 400) {
        setShowdangerAlert(true)
      } else {
        setShowdangerAlert(true)
      }
    });

    // router.push('/products');
  };

  return (
    <AdminLayout>
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          Product created successfully!
        </Alert>
      )}
      {showdangerAlert && (
        <Alert variant="danger" onClose={() => setShowSuccessAlert(false)} dismissible>
          Error  on Creating Product!
        </Alert>
      )}
      <Card>
        <Card.Header>Create new Product   </Card.Header>
        <Card.Body>
          <div className='container'>
            <form onSubmit={handleSubmit} className='cr-form'>

              <div className="form-group fform-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
              </div>
              <div className="form-group fform-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="discription" name="discription" value={product.discription} onChange={handleInputChange} />
              </div>
              <div className="form-group fform-group">
                <label htmlFor="price">Price</label>
                <input className="form-control" type="number" min="0" id="price" name="price" value={product.price} onChange={handleInputChange} />
              </div>
              <div className="form-group fform-group">
                <label htmlFor="inventory">Inventory</label>
                <input className="form-control" type="number" min="0" id="inventory" name="inventory" value={product.inventory} onChange={handleInputChange} />
              </div>

              <div className="form-group fform-group">
                <label htmlFor="imagelink">Select Product Type</label>
                <select className="form-control" id="type" name="type" value={product.type} onChange={handleInputChange} >
                  <option disabled></option>
                  {producttype.map((type, index) => (

                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group fform-group">
                <label htmlFor="imagelink">Select Brand</label>
                <select className="form-control" id="type" name="brand" value={product.brand} onChange={handleInputChange} >
                  <option disabled></option>
                  {brands.map((brand, index) => (

                    <option key={index} value={brand.name}>{brand.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group fform-group">
                <label htmlFor="imagelink">Select Category</label>
                <select className="form-control" id="category" name="category" value={product.category} onChange={handleInputChange} >
                  <option disabled></option>
                  {category.map((categ, index) => (

                    <option key={index} value={categ.name}>{categ.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group fform-group">
                <button className="btn btn-danger sub-butn" type="button" onClick={handleVariantbuttonclick}>Add Variants</button>
              </div>

              <div className="form-group fform-group">
                {showvariants && (
                  <div>
                  <label htmlFor="variant">Select Variant Type</label>
                  <select className="form-control" id="type" name="category"  onChange={handleInputChange} >
                  <option>Size</option>
                  <option>Colour</option>
                  </select>
                  </div>
                )}
              </div>

              <div className="form-group fform-group">

                <label htmlFor="sku">SKU</label>
                <input className="form-control" type="text" id="sku" name="sku" value={product.sku} onChange={handleInputChange} />
              </div>
              <div className="form-group fform-group" >
                <label htmlFor="imagelink" >Product Image</label>

                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {previewImage && <img src={previewImage} width="100" alt="Preview" className="image-preview" />}

              </div>

              <div className="form-group fform-group">
                <button className="btn btn-warning sub-butn" type="submit">Create Product</button>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>

    </AdminLayout>
  );
};

export default NewProductPage;
