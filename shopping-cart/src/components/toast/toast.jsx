
import {AiFillCloseCircle} from 'react-icons/ai'
import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'
const Toast = () => {
  const productData = useContext(ProductContext)
  const closeToastHandler = ()=>{
    productData.setShowToast(false)
  }
  return (
    <div className={`fixed bottom-10 duration-500 ${productData.showToast ? ' right-[2vw]' : '-right-[1000px]'} `}>
      <div className='w-[400px] h-[50px] bg-green-400 flex justify-between items-center px-2 rounded-2xl'>
        <p className='text-xl font-Anton'>Product Added Successfully</p>
        <AiFillCloseCircle className=' cursor-pointer text-2xl text-white' onClick={closeToastHandler} />
      </div>
    </div>
  );
}

export default Toast