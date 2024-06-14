import React from 'react'
import { useState } from 'react';
import axios from '../app/axios-config';

interface OrderFormProps {
    storeName: string;
    storeAddress: string;
    contact : String;
  }

const OrderForm : React.FC<OrderFormProps> = ({storeName , storeAddress , contact}) => {

    const [formData, setFormData] = useState({
        medicalStoreName: storeName,
        location: storeAddress,
        contactStore : contact,
        patientName: '',
        address: '',
        contactNo: '',
        medicineNo: '',
        quantity: 0,
      });

    

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
       try {
        await axios.post('/api/orders', formData);
        alert('Order submitted successfully');
       } catch (error) {
        console.error('Error submitting order:', error);
        alert('Error submitting order');
       }
    }

  return (
    
      <div className="h-[95vh] w-[19vw] m-auto bg-b2 border border-b1 rounded-xl flex items-center flex-col">
        <div className="bg-b1 p-6 rounded-lg shadow-lg w-11/12 my-3">
          <h1 className="my-4 mx-auto text-xl font-sans text-gray-600 ">
            Order Your Medicine from {storeName} ,contact : {contact}
          </h1>
          <form className="" onSubmit={handleSubmit}>  
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Patient Name
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact No.
              </label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Medicine Name
              </label>
              <input
                type="text"
                name="medicineNo"
                value={formData.medicineNo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Add more form fields as needed */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-cyan-900 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default OrderForm
