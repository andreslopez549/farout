// NewProductForm.tsx
import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { productService, brandService, categoryService, attributeService } from '../../_services';
import { Brands, Category, Attributes, Variant } from './interfaces';

interface NewProductFormProps {
  brands: Brands[];
  attributes: Attributes[];
  categories: Category[];
}

const NewProductForm: React.FC<NewProductFormProps> = ({ brands, attributes, categories }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    sku: '',
    brand: '',
    type: '',
    category: '',
    inventory: '',
    variantvalue: '',
  });

  const producttype = ["Men", "Women", "Kids"];

  const [images, setImages] = useState<File[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showdangerAlert, setShowdangerAlert] = useState(false);
  const [showvariants, setShowVariants] = useState(false);
  const [showsizes, setShowsizes] = useState<boolean[]>([]);
  const [showoptionvalue, setShowoptionvalue] = useState<boolean[]>([]);
  const [selectBoxValues, setSelectBoxValues] = useState<string[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [firstvariant, setFirstVariant] = useState<Variant>({});
  const [variants, setVariants] = useState<Variant[]>([{}]);

  // ... form handling code ...

  return (
    <Card>
      <Card.Header>Create new Product</Card.Header>
      <Card.Body>
        <div className='container'>
          <form onSubmit={handleSubmit} className='cr-form'>
            {/* ... form inputs go here ... */}

            <div className="form-group fform-group">
              <button className="btn btn-danger sub-butn" type="button" onClick={handleVariantButtonClick}>
                Add Variants
              </button>
            </div>
          </form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewProductForm;
