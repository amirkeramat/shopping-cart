import { BsBag } from "react-icons/bs";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
const TopBar = () => {
  const productsData = useContext(ProductContext)
  const basketHandler = () => {productsData.setShowCart(true)};
  return (
    <nav className='top-bar sticky bg-opacity-95 top-0 py-5 h-[75px] w-full bg-costume-main-red flex justify-between items-center px-4 shadow-md shadow-gray-900'>
      <div className='top-bar-left flex justify-around items-center flex-1'>
        <h6 className='font-Anton flex-[2] text-2xl'>Blue Bee</h6>
        <ul className='top-bar-menu flex flex-[3] text-xl justify-evenly text-costume-white'>
          <li>
            <a href='#'>Home</a>{" "}
          </li>
          <li>
            <a href='#'>About</a>{" "}
          </li>
          <li>
            <a href='#'>Contact</a>{" "}
          </li>
        </ul>
      </div>
      <div className='top-bar-right flex-1 flex justify-end items-center space-x-5 text-2xl'>
        <BsBag
          className=' text-costume-main-white cursor-pointer'
          onClick={basketHandler}
        />
        <span className='flex justify-center items-center bg-costume-main-white rounded-full px-2'>
          <p>{productsData.basketCount}</p>
        </span>
      </div>
    </nav>
  );
};

export default TopBar;
