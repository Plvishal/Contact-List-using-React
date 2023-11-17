// react hooks
import { useEffect, useState } from 'react';

// redux hooks
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  contactSelector,
  deleteContactThunk,
  setShowContact,
  updateContactThunk,
} from '../Redux/Reducers/contactReducer';

const UpdateSection = () => {
  const dispatch = useDispatch();

  const { showContact } = useSelector(contactSelector);

  const [formData, setFormData] = useState({});

  const [address, setAddress] = useState({});

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setFormData(showContact);

    setAddress(showContact.address);
  }, [showContact]);

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

  const handleSubmit = (e) => {
    if (!isChanged) {
      toast.error('Nothing to update in contact !!');
      return;
    }

    if (formData.name === '' || formData.phone === '') {
      toast.error('Name / Phone cannot be empty');
      return;
    }

    e.preventDefault();

    dispatch(updateContactThunk(formData));

    toast.success('Contact Data is updated!!');
    setIsChanged(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteContactThunk(formData));

    toast.success('Contact is removed from the List !!');
    setIsChanged(false);
  };

  return (
    <>
      {/* button to close the section */}
      <button
        className="bg-black px-[2px] w-5 
                                text-white rounded shadow-md"
        onClick={() => dispatch(setShowContact(null))}
      >
        X
      </button>

      <div className="flex h-[200px] justify-center items-center m-2">
        <div className="w-[200px] h-full bg-black rounded-full overflow-hidden ">
          <img src={require('../Assets/avatar.jpg')} alt="avatar" />
        </div>
      </div>

      <div className="bg-[#663131] p-2 rounded">
        <form onSubmit={handleSubmit}>
          <table className="border-separate border-spacing-3">
            <tbody>
              <tr>
                <td>
                  {/* for label */}
                  <label for="name" className="text-white font-semibold">
                    Name:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#4e609a]"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="phone" className="text-white font-semibold">
                    Phone:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="email" className="text-white font-semibold">
                    Email:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                    onChange={handleChange}
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
                    H. No.:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="suite"
                    name="suite"
                    value={address.suite}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                    onChange={handleAddressChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="city" className="text-white font-semibold">
                    City:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                    onChange={handleAddressChange}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="zipcode" className="text-white font-semibold">
                    ZipCode:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={address.zipcode}
                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#61677A] "
                    onChange={handleAddressChange}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <button
        className="float-left bg-red-800 rounded 
                            text-white p-[4px] mt-1 shadow-md "
        onClick={handleSubmit}
      >
        Edit
      </button>

      <button
        className="float-right bg-red-800 p-[2px] 
                            rounded text-white mt-1 shadow-md"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default UpdateSection;
