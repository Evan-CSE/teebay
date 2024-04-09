import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, isInteger } from 'formik';
import * as Yup from 'yup';
import { Category } from '../../DataModel/Category';
import { Product } from '../../DataModel/Product';


export default function AddProduct() {

  const emptyProductDetails: Product = {
    id         : 0,
    name       : '',
    price      : 0,
    rent       : 0,
    description: '',
    categories : ''
  }

  const [productDetails, setProductDetails] = useState(emptyProductDetails);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: Category[] = [
    { id: 1, name: 'ELECTRONICS' },
    { id: 2, name: 'FURNITURE' },
    { id: 3, name: 'HOME APPLIANCES' },
    { id: 4, name: 'SPORTING GOODS' },
    { id: 5, name: 'OUTDOOR' },
    { id: 6, name: 'TOYS' }
  ];

  const handleRemoveCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter(cat => cat !== category));
  };    


  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    rent: Yup.number().required('Rent price is required').positive('Rent price must be positive'),
    description: Yup.string().required('Description is required'),
    selectedCategories: Yup.array().min(1, 'Please select at least one category'),
  });

  return (
    <div className = 'd-flex align-center flex-col'>
      <h2 style = {{marginTop: '10px'}}>Add Product</h2>
      <Formik
        initialValues={productDetails}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
        //   onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className = 'form'>
            <div>
              <label>Title:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label>Price:</label>
              <Field type="number" name="price" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>
            <div>
              <label>Rent Price:</label>
              <Field type="number" name="rent" />
              <ErrorMessage name="rent" component="div" className="error" />
            </div>
            <div>
              <label>Description:</label>
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" component="div" className="error" />
            </div>
            <div>
                <div>
                    <label>Select Categories:</label>
                    <select multiple value={selectedCategories} onChange={(e) => setSelectedCategories(Array.from(e.target.selectedOptions, option => option.value))}>
                        {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <p>Selected Categories:</p>
                <ul>
                    {selectedCategories.map(cat => (
                    <li key={cat}  className = 'd-flex justify-between'>
                        <div> {cat} </div>
                        <button onClick={() => handleRemoveCategory(cat)}>Remove</button>
                    </li>
                    ))}
                </ul>
            </div>
            <ErrorMessage name="selectedCategories" component="div" className="error" />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
