// react hook
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  contactSelector,
  addContactThunk,
} from '../Redux/Reducers/contactReducer';

const AddContact = () => {
  const dispatch = useDispatch();

  const [isChanged, setIsChanged] = useState(false);

  const { contactList } = useSelector(contactSelector);

  const inputStructure = {
    id: `${contactList.length}`,
    name: '',
    email: '',
    phone: '',
    address: {
      suite: '',
      city: '',
      zipcode: '',
    },
  };

  const [formData, setFormData] = useState(inputStructure);
  // to store the address of user
  const [address, setAddress] = useState(inputStructure.address);

  const handleSubmit = (e) => {
    if (!isChanged) {
      toast.error('Nothing to add in the list');
      return;
    }

    if (formData.name === '' || formData.phone === '') {
      toast.error('Name / Phone cannot be empty');
      return;
    }

    e.preventDefault();

    dispatch(addContactThunk(formData));
    toast.success('A new contact is Added !!');
    setIsChanged(false);
  };

  const handleChange = (e) => {
    if (!isChanged) {
      setIsChanged(true);
    }

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    if (!isChanged) {
      setIsChanged(true);
    }

    const { name, value } = e.target;

    setAddress({
      ...address,
      [name]: value,
    });

    setFormData({
      ...formData,
      address: {
        ...address,
        [name]: value,
      },
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    setIsChanged(false);

    setFormData(inputStructure);

    setAddress(inputStructure.address);

    toast.success('Entered data is removed !!');
  };

  return (
    <>
      <div className="w-full bg-rose-800 p-2 rounded">
        <form>
          <table className="border-separate border-spacing-2">
            <tbody>
              <tr>
                <td>
                  <label for="name" className="text-white font-semibold">
                    Name :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {/* label */}
                  <label for="phone" className="text-white font-semibold">
                    Phone :
                  </label>
                </td>
                <td>
                  {/* input box */}
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                    placeholder="+91 8521xxxxxxxx"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="email" className="text-white font-semibold">
                    Email ID :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <label className="text-white font-semibold">Address</label>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="suite" className="text-white font-semibold">
                    House No. :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="suite"
                    name="suite"
                    value={address.suite}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee]"
                    onChange={handleAddressChange}
                    placeholder="h-95"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="city" className="text-white font-semibold">
                    City :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                    onChange={handleAddressChange}
                    placeholder="Enter your city"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {/* label */}
                  <label for="zipcode" className="text-white font-semibold">
                    ZipCode :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={address.zipcode}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                    onChange={handleAddressChange}
                    placeholder="1122233"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <button
        className="float-left bg-red-800 
                        text-white py-[2px] px-[3px] mt-1 rounded 
                        shadow-md"
        onClick={handleSubmit}
      >
        Add New Contact
      </button>

      {/* button for reset the entered values  */}
      <button
        className="float-right bg-red-800 
                        text-white p-[2px] mt-1 rounded 
                        shadow-md"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
};

export default AddContact;
