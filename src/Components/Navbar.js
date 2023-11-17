import { useDispatch, useSelector } from 'react-redux';

import {
  contactSelector,
  setShowAddContact,
} from '../Redux/Reducers/contactReducer';

const Navbar = () => {
  const dispatch = useDispatch();

  const { showAddContact } = useSelector(contactSelector);

  return (
    <div
      className="bg-[#9b1d4b] h-[50px] flex justify-between 
                        md:justify-center items-center px-1 sticky 
                        left-0 top-0 right-0"
    >
      <h1 className="text-white text-xl">Contacts List</h1>

      <button
        className="bg-red-400 rounded p-[2px] md:hidden"
        onClick={() => dispatch(setShowAddContact())}
      >
        {showAddContact ? 'Cancel' : 'Add  Contact'}
      </button>
    </div>
  );
};

export default Navbar;
