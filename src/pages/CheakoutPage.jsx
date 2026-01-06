import React, { useState } from 'react'
import Container from '../components/layouts/Container'
import BillingDetails from '../components/BillingDetails'
import OrderSummary from '../components/OrderSummary'
import { Link } from 'react-router-dom'

const CheakoutPage = () => {

  let [active,setActive] = useState("03")

  return (
    <div className=' mt-16'>
      <Container>
        <div className=" flex items-center gap-x-5 text-[#303030] font-montserrat text-base font-normal leading-6">
          <Link to="/">Home</Link>
            <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <Link to="/cart">Cart</Link>
            <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <Link to="/checkout" className=' font-bold'>Checkout</Link>
        </div>

        <h1 className=' mt-12 text-center font-poppins text-[56px] font-bold leading-[68px] text-[#303030]'>Checkout</h1>
        <div className=' flex justify-center items-center gap-x-[63px] mt-[36px]'>
          <div onClick={()=> setActive("01")} className=' flex items-center gap-x-4 cursor-pointer'>
            {active == "01"
              &&
              <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#FF624C] flex items-center justify-center text-white font-montserrat font-bold text-base leading-6'> 01 </div>
            }
            <div className={ ` ${active == "01" ? "text-[#303030]" : "text-[#CBCBCB]"} font-poppins text-2xl font-semibold leading-6 relative ${active == "01" && " before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0 "}`}>Information</div>
          </div>

          <div onClick={()=> setActive("02")} className=' flex items-center gap-x-4 cursor-pointer'>
            {active == "02"
              &&
              <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#FF624C] flex items-center justify-center text-white font-montserrat font-bold text-base leading-6'> 02 </div>
            }
            <div className={ `${active == "02" ? "text-[#303030]" : "text-[#CBCBCB]"} font-poppins text-2xl font-semibold leading-6 relative ${active == "02" && " before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0 "}`}>Shipping</div>
          </div>

          <div onClick={()=> setActive("03")} className=' flex items-center gap-x-4 cursor-pointer'>
            {active == "03"
              &&
              <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#FF624C] flex items-center justify-center text-white font-montserrat font-bold text-base leading-6'> 03 </div>
            }
            <div className={ `${active == "03" ? "text-[#303030]" : "text-[#CBCBCB]"} font-poppins text-2xl font-semibold leading-6 relative ${active == "03" && " before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0 "}`}>Payment</div>
          </div>
        </div>

        <div className=' my-20 flex gap-x-[56px]'>
            {
              active == '01' && (
              <h2 className=' text-center w-full font-poppins text-xl font-semibold leading-9 text-[#303030]'>
                Currently there is no information available.
              </h2>
              )
            }
            {
              active == '02' && (
              <h2 className=' text-center w-full font-poppins text-xl font-semibold leading-9 text-[#303030]'>
                Currently there is no shipping available.
              </h2>
              )
            }
            {
              active == '03' && (
              <>
                <BillingDetails/>
                <OrderSummary/>
              </>
              )
            }
        </div>
    </Container>
    </div>
  )
}

export default CheakoutPage