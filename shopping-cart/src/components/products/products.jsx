import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
const Products = () => {
  const productsData = useContext(ProductContext);
  const addToCartHandler = (productInfo) => {
    let isInUserCart = productsData.userCart.some(
      (bagProduct) => bagProduct.title === productInfo.title
    );
    if (!isInUserCart) {
      let userProduct = {
        id: productsData.userCart.length + 1,
        title: productInfo.title,
        price: productInfo.price,
        count: 1,
        image: productInfo.image,
      };
      productsData.setUserCart((prv) => [...prv, userProduct]);
      productsData.setBasketCount((prv) => prv + 1);
    } else {
      let userCart = [...productsData.userCart];
      userCart.some((bagProduct) => {
        if (bagProduct.title === productInfo.title) {
          bagProduct.count += 1;
          productsData.setBasketCount((prv) => prv + 1);
          return true;
        }
      });
      productsData.setUserCart(userCart);
    }
    productsData.setShowToast(true);
    setTimeout(() => {
      productsData.setShowToast(false);
    }, 3000);
  };
  return (
    <>
      {productsData.allProducts.map((product) => (
        <section
          className='products flex justify-center items-center'
          key={product.id}>
          <div className='products wrapper flex flex-col items-center space-y-5'>
            <h2 className='text-2xl mt-5 bg-gray-100 w-full text-center rounded-xl p-2'>
              {product.title}
            </h2>
            <div className='products-container grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2'>
              {product.infos.map((productInfo) => (
                <div
                  key={productInfo.id}
                  className='products-card flex flex-col rounded-xl justify-center items-center space-y-5 shadow transition-all p-4  shadow-gray-400 hover:border border-gray-400 '>
                  <h5 className='text-2xl font-Anton'>{productInfo.title}</h5>
                  <img className="w-[200px] h-[200px]" src={productInfo.image} alt='' />
                  <h5 className='text-xl'>Price: {productInfo.price}$</h5>
                  <button
                    type='button'
                    className='bg-red-500 p-2 rounded hover:bg-red-600'
                    onClick={() => addToCartHandler(productInfo)}>
                    Add to Cart
                  </button>
                  <button
                    type='button'
                    className=' bg-gray-400 p-2 rounded hover:bg-gray-500'>
                    More Information
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Products;
