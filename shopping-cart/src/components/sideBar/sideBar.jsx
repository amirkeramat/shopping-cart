import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { AiFillCloseCircle } from "react-icons/ai";
const SideBar = () => {
  const productsData = useContext(ProductContext);
  const closeSideBarHandler = () => {
    productsData.setShowCart(false);
  };
  const deleteProductHandler = (count, title) => {
    let filteredData = productsData.userCart.filter(
      (product) => product.title !== title
    );
    productsData.setUserCart(filteredData);
    productsData.setBasketCount((prv) => prv - count);
  };
  return (
    <section
      className={`side-bar fixed top-[80px] bottom-0  duration-500 w-[300px] overflow-y-auto bg-costume-main-white ${
        productsData.showCart ? "right-0" : "-right-[1000px]"
      }`}>
      <div className='flex justify-between items-center p-2 mt-5'>
        <h4 className=' font-Anton text-xl'>Your Basket</h4>
        <AiFillCloseCircle
          className=' cursor-pointer text-4xl'
          onClick={closeSideBarHandler}
        />
      </div>
      <div className='flex justify-center'>
        {productsData.userCart.length > 0 ? (
          <div className='basket-container grid grid-cols gap-y-5 p-5'>
            {productsData.userCart.map((product) => (
              <div
                key={product.id}
                className='flex flex-col items-center space-y-5 shadow shadow-gray-400 p-2'>
                <AiFillCloseCircle
                  className=' cursor-pointer text-xl self-end'
                  onClick={() =>
                    deleteProductHandler(product.count, product.title)
                  }
                />
                <h6>{product.title}</h6>
                <img
                  className='w-[200px] h-[200px]'
                  src={product.image}
                  alt=''
                />
                <h5>{product.price} $</h5>
                <h4 className='bg-white px-2 rounded-full'>{product.count}</h4>
              </div>
            ))}
          </div>
        ) : (
          <h1>Your Basket Is Empty</h1>
        )}
      </div>
      {productsData.userCart.length > 0 && (
        <div className='flex justify-evenly'>
          <button type='button' className='p-2 rounded bg-sky-400 w-[100px]'>
            Shipping
          </button>
          <button
            type='button'
            className='p-2 rounded bg-purple-400 w-[100px]'
            onClick={() => {
              productsData.setUserCart([]);
              productsData.setBasketCount(0);
            }}>
            Cancel
          </button>
        </div>
      )}
    </section>
  );
};

export default SideBar;
