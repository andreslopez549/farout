import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AdminLayout } from '@layout';
import { Card, Alert, Modal, Button } from 'react-bootstrap';
import { productService, categoryService, attributeService, brandService } from 'src/_services';


interface Product {
  _id: string;
  name: string;
  type: string;
  images: [];
  price: string,
  discription: string,
  sku: string,
  brand: string,
  categories: string,
  inventory: string,
  variants: string
}

interface EditProductPageProps {
  productdata: Product
}

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

const EditProductPage: NextPage<EditProductPageProps> = (productdata) => {
  const router = useRouter();
  const { productId } = router.query;


  const [product, setProduct] = useState({
    _id: '',
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
  const [mounted, setMounted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [category, setcategory] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [editpreviewImages, setEditPreviewImages] = useState<string[]>([]);
  const [showvariants, setShowvariants] = useState(false);
  const [selectBoxValues, setSelectBoxValues] = useState<string[]>([]);
  const [attributes, setattributes] = useState<Attributes[]>([]);
  const [Variants, setVariants] = useState([{}]);;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      setEditPreviewImages([]);
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

  const handleVariant = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    console.log(name, value)

    const variantIndex = parseInt(name.slice(-1), 10);
    console.log(Variants)
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

    if (name == `variantstock${variantIndex}`) {
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, variantstock: value } : variant))
      );
    }

    if (name.includes("attribute")) {
      // console.log("asas")
      let getkey = name;
      const newKey = getkey.replace("attribute", "");
      const variantIndex = Number(getkey.replace(/\D/g, ""));
      // console.log(newKey);
      // const newKey = getkey;
      const newValue = value;
      const newKeyfilter = newKey.replace(/[0-9]/g, '');
      // console.log(newKeyfilter)
      setVariants((prevVariants) =>
        prevVariants.map((variant, i) => (i === variantIndex ? { ...variant, [newKeyfilter]: value } : variant))
      );

      // addKeyValuePair(newKey, newValue);
    }



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


  };

  const handleVariantbuttonclick = () => {
    setSelectBoxValues((prevValues) => [...prevValues, '']);
    setShowvariants(true);

    setVariants((prevVariants) => [
      ...prevVariants,
      {
      },
    ]);

  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    // console.log(name, value)
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));


  };


  const setinitialvalue=()=>{
    console.log(Variants[0]["variantdiscount"],"variant")
  }

   useEffect(() => {


    const getbrands = brandService.allbrands().then(res => {
      // console.log(res, "brands")
      setBrands(res);
    });

    const getcategory = categoryService.allcategories().then(res => {
      setcategory(res);
    });

    const getattributes = attributeService.allattributes().then(res => {
      // console.log(res)
      setattributes(res);

    });

    const productdetail = productdata.productdata;
    if (productdata) {

      // console.log(productdata);


      setProduct({
        _id: productdetail._id,
        name: productdetail.name,
        price: productdetail.price,
        discription: productdetail.discription,
        sku: productdetail.sku,
        brand: productdetail.brand,
        type: productdetail.sku,
        category: productdetail.categories[0],
        inventory: productdetail.sku,
        variantvalue: ''
      });

      setEditPreviewImages(productdetail.images)
      // console.log(product)
    }

    setinitialvalue()
    if (typeof window !== 'undefined' && !mounted) {
      // console.log(productdetail.variant)
      const editvariants = JSON.parse(productdetail.variants);

      setVariants(editvariants);
      
      
       
      setSelectBoxValues(['']);
      setShowvariants(true);

      setMounted(true);
      
        console.log(selectBoxValues);
     
    }
  }, [mounted]);

  // Rest of the event handlers (handleInputChange, handleImageChange, etc.)

  // Modify the handleSubmit function to handle product update
  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('inventory', product.inventory);
    formData.append('brand', product.brand);
    formData.append('discription', product.discription);
    formData.append('sku', product.sku);
    formData.append('type', product.type);
    formData.append('categories', product.category);

    // ... Append other product data to the formData, such as variants and images

    // Example: const updateProduct = productService.updateProduct(productId, formData);
    // Handle success and error modals accordingly
  };

  return (
    <AdminLayout>
      {/* Same modal components for success and error as in NewProductPage */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        {/* ... Modal content */}
      </Modal>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        {/* ... Modal content */}
      </Modal>

      <Card>
        <Card.Header>Edit Product</Card.Header>
        <Card.Body>
          <div className='container'>
            <form onSubmit={handleUpdate} className='cr-form'>
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
                {editpreviewImages.map((previewImage, index) => (
                  <img
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/${previewImage}`}
                    width="100"
                    alt={`Preview ${index + 1}`}
                    className="image-preview"
                  />
                ))}
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
                {showvariants && (
                  <div >
                    {selectBoxValues.map((value, index) => (

                      <div key={index} className='var-opt'>
                        <h1>Select Variant {index + 1}</h1>
                        {index != 0 && (
                          <button
                            className="btn btn-danger sub-butn"
                            type="button"
                            onClick={() => handleRemoveVariant(index)}
                          >
                            Remove Variant
                          </button>
                        )}
                        {attributes.map((attribute, indexs) => (
                          <div className='var-option' key={indexs}>
                            <label key={indexs}>{attribute.name}</label>
                            <select className='variant-selectb' value={Variants[0][`attribute${attribute.name}${index}`] || ''} name={`attribute${attribute.name}${index}`} onChange={handleVariant}>
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
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Stock availabel ' type="text" id={`variantstock${index}`} name={`variantstock${index}`} onChange={handleVariant} />
                        </div>
                        <div className='var-option'>
                          <label>Offer Price</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Offer Price' type="text" id={`variantofferprice${index}`} name={`variantofferprice${index}`} onChange={handleVariant} />
                        </div>
                        <div className='var-option'>
                          <label>Regular Price</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Variant Selling Price' type="text" id={`variantsellingprice${index}`} name={`variantsellingprice${index}`} onChange={handleVariant} />
                        </div>
                        <div className='var-option'>
                          <label>Discount %</label>
                          <input className="form-control variant-selectb fform-group" placeholder='Enter Discount Rate' type="text" id={`variantdiscountprice${index}`} name={`variantdiscount${index}`} onChange={handleVariant} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="form-group fform-group">
                <button className="btn btn-danger sub-butn" type="button" onClick={handleVariantbuttonclick}>Add Variants</button>
              </div>
              <div className="form-group">
                <button className="btn btn-warning sub-butn create-prod-butn" type="submit">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const productdata = await productService.getproducts(id);
    // console.log(productdata, "aaaaa");
    return {
      props: {
        productdata,
      },
    };
  } catch (error: any) {
    // Handle errors if the API call fails
    console.error('Error fetching product data:', error.message);
    return {
      notFound: true, // Return 404 page or error handling page
    };
  }


}

export default EditProductPage;
