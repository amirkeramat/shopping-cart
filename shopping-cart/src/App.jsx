import TopBar from "./components/TopBar/TopBar"
import Products from "./components/products/products"
import Toast from "./components/toast/toast";
import ProductContextProvider from "./contexts/ProductContext";
import SideBar from "./components/sideBar/sideBar";
function App() {

  return (
    <div className='app'>
      <ProductContextProvider>
        <TopBar />
        <div>
          <h1 className='text-4xl mt-5 text-center'>All Products</h1>
          <Products />
        </div>
        <SideBar/>
        <Toast />
      </ProductContextProvider>
    </div>
  );
}

export default App
