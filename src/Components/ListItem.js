import { useDispatch } from 'react-redux';

import { setShowContact } from '../Redux/Reducers/contactReducer';

const ListItem = (props) => {
  const dispatch = useDispatch();

  const { name, phone } = props.contact;

  const handleClick = (e) => {
    dispatch(setShowContact(props.contact));
  };

  return (
    // container
    <div
      className="w-full flex justify-between 
                        h-12 cursor-pointer font-semibold
                        md:flex-col md:h-16 
                        min-[1100px]:flex-row min-[1100px]:h-12
                        hover:bg-[#8E0E00]
                        hover:rounded-lg  
                        border-b-2 border-slate-800 hover:border-[#5C4B99] 
                        p-2 hover:text-white"
      onClick={handleClick}
    >
      <div>{name}</div>

      <div>
        <small>{phone}</small>
      </div>
    </div>
  );
};

export default ListItem;
