import { useDispatch, useSelector } from 'react-redux';

import {
  contactSelector,
  setShowAddContact,
} from '../Redux/Reducers/contactReducer';

import UpdateSection from './UpdateSection';

import AddContact from './AddContact';

const MoreInfoSection = () => {
  const dispatch = useDispatch();

  const { showContact, showAddContact } = useSelector(contactSelector);

  return (
    <div
      className="hidden md:block rounded 
                        w-full h-fill bg-[#CEE6F3] m-2 
                        p-2 shadow-md shadow-slate-400"
    >
      <div className="bg-white h-[40px] flex justify-between px-1 rounded items-center">
        <span className="text-lg text-indigo-700 font-semibold">
          {showAddContact ? 'Add New Contact List' : 'More About Contact List'}
        </span>

        <button
          className="rounded bg-[#f3788f] w-[150px] h-7 float-right 
                                text-white shadow-md "
          onClick={() => dispatch(setShowAddContact())}
        >
          {showAddContact ? 'Cancel' : 'Add New Contact'}
        </button>
      </div>

      <div className="flex justify-center items-center h-fill">
        {!showContact ? (
          <h2 className="self-center justify-self-center text-indigo-800 font-semibold">
            {!showAddContact ? 'Click on add new contact' : null}
          </h2>
        ) : (
          <>
            <div
              className="w-4/5 mt-3 bg-[#F8F0E5] justify-self-center 
                                        self-center shadow-md p-2 rounded"
            >
              <UpdateSection />
            </div>
          </>
        )}

        {!showAddContact ? null : (
          <div className="w-4/5 mt-3 justify-self-center self-center bg-[#F8F0E5] rounded shadow-md p-2">
            <h1 className="text-lg font-semibold my-2 text-center">
              Add New Contact List
            </h1>

            <AddContact />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreInfoSection;
