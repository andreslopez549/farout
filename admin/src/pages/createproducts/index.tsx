import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AdminLayout } from '@layout';
import { Card, Alert, Modal, Button } from 'react-bootstrap';
import { productService, brandService, categoryService, attributeService } from '../../_services';
import Link from 'next/link';



interface NewProductPageProps { }

interface Brands {
  name: string;
  _id: string
}
interface Category {
  name: string,
  type: string,
  _id: string
}

interface Attributes {
  name: string;
  units: [];
}

interface Variant {

  variantsize: string,
  variantstock: string,
  variantofferprice: string,
  variantsellingprice: string,
  variantdiscount: string,
  variantquantity: string

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
    inventory: '',
    variantvalue: ''
  });

  const producttype = ["Men", "Women", "Kids"];

  const [images, setImages] = useState<File[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showdangerAlert, setShowdangerAlert] = useState(false);
  const [showvariants, setShowvariants] = useState(false);
  const [showsizes, setShowsizes] = useState<boolean[]>([]);
  const [showoptionvalue, setShowoptionvalue] = useState<boolean[]>([]);
  const [selectBoxValues, setSelectBoxValues] = useState<string[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);
  const [attributes, setattributes] = useState<Attributes[]>([]);
  const [category, setcategory] = useState<Category[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [firstvariant, setfirstvariant] = useState({});
  const [Variants, setVariants] = useState([{}]);;



  const handleVariantbuttonclick = () => {
    setSelectBoxValues((prevValues) => [...prevValues, '']);
    setShowvariants(true);
    setShowsizes((prevSizes) => [...prevSizes, false]);
    setShowoptionvalue((prevSizes) => [...prevSizes, false]);
   
  };

  const handleRemoveVariant = (index) => {
    setVariants((prevVariants) => {
      const newVariants = [...prevVariants];
      newVariants.splice(index, 1);
      return newVariants;
    });
    setSelectBoxValues((prevValues) => {
      const newValues = [...prevValues];
      newValues.splice(index, 1);
      return newValues;
    });
    setShowsizes((prevSizes) => {
      const newSizes = [...prevSizes];
      newSizes.splice(index, 1);
      return newSizes;
    });
    setShowoptionvalue((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions.splice(index, 1);
      return newOptions;
    });
  };


  const handleVariantprice = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>) => {
    const { name, value  } = event.target;
   
    const variantIndex = parseInt(name.slice(-1), 10);

    if (name == `variantofferprice${variantIndex}`) {
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, variantofferprice: value } : variant))
      );
    }
    if (name == `variantsellingprice${variantIndex}`) {
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, variantsellingprice: value } : variant))
      );
    }
    if (name == `variantdiscount${variantIndex}`) {
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, variantdiscount: value } : variant))
      );
    }
    if (name == `variantquantity${variantIndex}`) {
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, variantquantity: value } : variant))
      );
    }

    if(name.includes("attribute")){
      // console.log("asas")
      let getkey=name;
      const newKey=getkey.replace("attribute","");
      const variantIndex= Number(getkey.replace(/\D/g, ""));
      // console.log(newKey);
      // const newKey = getkey;
      const newValue = value;
      const newKeyfilter=newKey.replace(/[0-9]/g, '');
      // console.log(newKeyfilter)
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, [newKeyfilter]: value } : variant))
      );

      // addKeyValuePair(newKey, newValue);
    }



  };





  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    // console.log(name, value)
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));

  };

  const addKeyValuePair = (key, value) => {
    setfirstvariant((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handlefirstvariant = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    // console.log(name, value)


    const previousdata = firstvariant;
    if(name.includes("attribute")){
      console.log("asas")
      let getkey=name;
      const newKey=getkey.replace("attribute","");
      console.log(newKey);
      // const newKey = getkey;
      const newValue = value;
      addKeyValuePair(newKey, newValue);
    }else{
      const newKey = name;
      const newValue = value;
      addKeyValuePair(newKey, newValue);
    }
    
   
   
    

    console.log(firstvariant)

    // setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));

  };


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newImages: File[] = [];

      for (let i = 0; i < files.length; i++) {
        newImages.push(files[i]);
      }

      setImages(prevImages => [...prevImages, ...newImages]);

      // Image previews using FileReader
      const newPreviews: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result && typeof reader.result === 'string') {
            newPreviews.push(reader.result);
            if (newPreviews.length === files.length) {
              setPreviewImages(newPreviews);
            }
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };





  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    console.log(Variants, "varassa")
    
    console.log(firstvariant,"first");
    event.preventDefault();


     const Variantdata=[firstvariant,...Variants];
     console.log(Variantdata)
    const variants = JSON.stringify(Variantdata);
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('inventory', product.inventory);
    formData.append('brand', product.brand);
    formData.append('discription', product.discription);
    formData.append('sku', product.sku);
    formData.append('type', product.type);
    formData.append('categories', product.category);


    formData.append('variants', variants);

   

    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }

    const createproduct = productService.createproduct(formData).then(response => {
      if (response.status == 200) {
        setShowSuccessModal(true);
        // Hide the error modal if it was open
        setShowErrorModal(false);
        router.push('/products');
      } else {
        setShowErrorModal(true);
        // Hide the success modal if it was open
        setShowSuccessModal(false);
      }
    });


  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !mounted) {
      // Fetch brands from api
      const getbrands = brandService.allbrands().then(res => {
        // console.log(res, "brands")
        setBrands(res);
      });

      const getcategory = categoryService.allcategories().then(res => {
        setcategory(res);
      });

      const getattributes = attributeService.allattributes().then(res => {
        console.log(res)
        setattributes(res);

      });


      // }



      setMounted(true);
    }
  }, [mounted]);




  return (
    <AdminLayout>
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Product created successfully!
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
          Error on creating the product!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>
        <Card.Header>Create new Product   </Card.Header>
        <Card.Body>
          <div className='container'>
            <form onSubmit={handleSubmit} className='cr-form'>
              <div className="form-group fform-group">

                <label htmlFor="sku">SKU</label>
                <input className="form-control" type="text" id="sku" name="sku" value={product.sku} onChange={handleInputChange} />
              </div>
              <div className="form-group fform-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" name="name" value={product.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group fform-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="discription" name="discription" value={product.discription} onChange={handleInputChange} />
              </div>
              <div className="form-group fform-group">
                <label htmlFor="price">Price</label>
                <input className="form-control" type="number" min="0" id="price" name="price" value={product.price} onChange={handleInputChange} />
              </div>
              {/* <div className="form-group fform-group">
                <label htmlFor="inventory">Inventory</label>
                <input className="form-control" type="number" min="0" id="inventory" name="inventory" value={product.inventory} onChange={handleInputChange} />
              </div> */}

              <div className="form-group fform-group">
                <label htmlFor="imagelink">Select Product Type</label>
                <select className="form-control" id="type" name="type" value={product.type} onChange={handleInputChange} >
                  <option disabled></option>
                  {
                    producttype.map((type, index) => (

                      <option key={index} value={type}>{type}</option>
                    ))}
                </select>
              </div>
              <div className="form-group fform-group">
                <label htmlFor="imagelink">Select Brand</label>
                <select className="form-control" id="type" name="brand" value={product.brand} onChange={handleInputChange} >
                  <option disabled></option>
                  {brands.map((brand, index) => (

                    <option key={index} value={brand._id}>{brand.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group fform-group">
                <label htmlFor="imagelink">Select Category</label>
                <select className="form-control" id="category" name="category" value={product.category} onChange={handleInputChange} >
                  <option disabled></option>
                  {category.map((categ, index) => (

                    <option key={index} value={categ._id}>{categ.name}</option>
                  ))}
                </select>
              </div>


              <div className="form-group fform-group">
                <label htmlFor="imagelink">Product Images</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  multiple // Allow multiple image selection
                  onChange={handleImageChange}
                />
                {previewImages.map((previewImage, index) => (
                  <img
                    key={index}
                    src={previewImage}
                    width="100"
                    alt={`Preview ${index + 1}`}
                    className="image-preview"
                  />
                ))}
              </div>


              <div className="form-group fform-group">

                <div className='var-opt'>
                  <h1 >Select Variant 1</h1>
                  {attributes.map((attribute, index) => (
                    <div className='var-option' key={index}>
                      <label key={index}>{attribute.name}</label>
                      <select className='variant-selectb'  name={`attribute${attribute.name}`} onChange={handlefirstvariant}>
                        <option >Select Unit</option>
                        {attribute.units.map((attributeunit, index) => (
                          <option key={index}>
                            {attributeunit}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}

                  <div className='var-option'>
                    <label>Stock</label>
                    <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Quantity ' type="text" id={`firstvariantquantity`} name={`variantquantity`} onChange={handlefirstvariant} />
                  </div>
                  <div className='var-option'>
                    <label>Offer Price</label>
                    <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Offer Price' type="text" id={`firstvariantofferprice`} name={`variantofferprice`} onChange={handlefirstvariant} />
                  </div>
                  <div className='var-option'>
                    <label>Regular  Price</label>
                    <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Selling Price' type="text" id={`firstvariantsellingprice`} name={`variantsellingprice`} onChange={handlefirstvariant} />
                  </div>
                  <div className='var-option'>
                    <label>Discount %</label>
                    <input className="form-control variant-selectb fform-group" placeholder='Enter Discount Rate' type="text" id={`firstvariantdiscountprice`} name={`variantdiscountprice`} onChange={handlefirstvariant} />
                  </div>
                </div>


                {showvariants && (
                  <div >
                    {selectBoxValues.map((value, index) => (

                      <div key={index} className='var-opt'>
                        <h1>Select Variant {index + 2}</h1>
                        <button
                          className="btn btn-danger sub-butn"
                          type="button"
                          onClick={() => handleRemoveVariant(index)}
                        >
                          Remove Variant
                        </button>
                        {attributes.map((attribute, indexs) => (
                          <div className='var-option' key={indexs}>
                            <label key={indexs}>{attribute.name}</label>
                            <select className='variant-selectb' name={`attribute${attribute.name}${index}`} onChange={handleVariantprice}>
                              <option >Select Unit</option>
                              {attribute.units.map((attributeunit, index) => (
                                <option key={index}>
                                  {attributeunit}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}


                        <div className='var-option'>
                          <label>Stock</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Quantity ' type="text" id={`variantquantity${index}`} name={`variantquantity${index}`} onChange={handleVariantprice} />
                        </div>
                        <div className='var-option'>
                          <label>Offer Price</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Offer Price' type="text" id={`variantofferprice${index}`} name={`variantofferprice${index}`} onChange={handleVariantprice} />
                        </div>
                        <div className='var-option'>
                          <label>Regular Price</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Selling Price' type="text" id={`variantsellingprice${index}`} name={`variantsellingprice${index}`} onChange={handleVariantprice} />
                        </div>
                        <div className='var-option'>
                          <label>Discount %</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Discount Rate' type="text" id={`variantdiscountprice${index}`} name={`variantdiscount${index}`} onChange={handleVariantprice} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="form-group fform-group">
                <button className="btn btn-danger sub-butn" type="button" onClick={handleVariantbuttonclick}>Add Variants</button>
              </div>



              <div className="form-group fform-group ">
                <button className="btn btn-warning sub-butn create-prod-butn" type="submit">Create Product</button>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>

    </AdminLayout>
  );
};

export default NewProductPage;
