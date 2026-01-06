import React, { useEffect, useRef, useState } from "react";
import ProductLayout from "./layouts/ProductLayout";
import Pagination from "./Pagination";
import { IoIosArrowDown } from "react-icons/io";
import GridViewIcon from "./icons/GridViewIcon";
import { FaBars } from "react-icons/fa";


    let sortOne = [
      {sorted: "Popularity"},
      {sorted: "Newest Arrivals"},
      {sorted: "Customer Ratings"},
      {sorted: "Discount/Offers"},
      {sorted: "Relevance"},
      {sorted: "Availability"}
    ]

    let SortByPrice = [
      {sorted: "Price Low-to-High"},
      {sorted: "Price High-to-Low"}
     
  ]

const PaginationProducts = () => {
  let [currentPage, setCurrentPage] = useState(1);
  let [isDropDownOpen1,setIsDropDownOpen1] = useState(false)
  let [isDropDownOpen2,setIsDropDownOpen2] = useState(false)
  let [selected,setSelected] = useState(null)
  let [priceSorted,setPriceSorted] = useState(null)
  let dropdownRef = useRef(null)
  let dropdownRef2 = useRef(null)
  let itemsParPage = 16;

  let products = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
    price: (Math.random() * 1000).toFixed(2),
  }));

  let startIndex = (currentPage - 1)  * itemsParPage;
  let endIndex = Math.min(startIndex + itemsParPage, products.length);
  let currentProducts = products.slice(startIndex, endIndex);


    useEffect(()=>{
        let handleDropDown = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen1(false)
            }}

        document.addEventListener('click',handleDropDown)
        return ()=>{
        document.removeEventListener('click',handleDropDown)
        }
    },[])

    let handleSelect = (item)=>{
      setSelected(item)
      setIsDropDownOpen1(false)
    }


      useEffect(()=>{
      let handleDropDown2 = (event)=>{
          if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
              setIsDropDownOpen2(false)
          }}

        document.addEventListener('click',handleDropDown2)
        return ()=>{
        document.removeEventListener('click',handleDropDown2)
        }
    },[])

    let handleSelect2 = (item)=>{
      setPriceSorted(item)
      setIsDropDownOpen2(false)
    }


  return (
    <div>
      <div className=" flex items-start justify-between">
        <div className=" lg:mb-12">
          <h1 className=" text-[#303030] font-poppins text-xl lg:text-4xl font-semibold leading-[46px]">
            Products
          </h1>
          <p className=" hidden lg:flex mt-6 text-[#303030] font-montserrat text-base font-normal leading-6">
            Showing {startIndex + 1} - {endIndex} of { products.length} results.
          </p>
        </div>

       <div className=" mt-3 lg:mt-[68px]">
          <div className=" flex items-center">
            <p className=" text-[#303030] hidden lg:flex font-montserrat text-[16px] font-normal leading-6">Sort by</p>
            <div 
              onClick={()=> {setIsDropDownOpen1(!isDropDownOpen1) }}
              ref={dropdownRef}
              className=" relative flex items-center pl-4 pr-2 lg:pr-6 box-border"> 
                {selected 
                ?
                <div  className=" flex items-center gap-x-2 lg:gap-x-12 cursor-pointer text-[#FF624C] font-montserrat text-sm lg:text-base font-bold leading-6"> <span className=""> {selected} </span> <IoIosArrowDown  className={`${isDropDownOpen1 && `rotate-180`} transition-all text-black h-4 w-4 `}/> </div>
                : 
                <div  className=" flex items-center gap-x-2 lg:gap-x-12 cursor-pointer text-[#FF624C] font-montserrat text-sm lg:text-base font-bold leading-6"> Popularity <IoIosArrowDown  className={`${isDropDownOpen1 && `rotate-180`}  transition-all text-black h-4 w-4`}/></div>
                }

              {isDropDownOpen1 && (
                  <ul className="bg-[#fff] rounded-[5px] overflow-hidden -right-7 lg:right-2 font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px] z-[999]">
                    {sortOne.map((item,index)=>{

                    return <li onClick={()=> handleSelect(item.sorted)} className={` py-2 px-3 border-b border-[#CBCBCB] cursor-pointer  last:border-b-transparent hover:bg-[#ddd]`} key={index}> {item.sorted} </li>

                    })}
                  </ul>
                    
                )}
            </div>

             <div 
              onClick={()=> {setIsDropDownOpen2(!isDropDownOpen2) }}
              ref={dropdownRef2}
              className=" relative w-auto lg:w-[267px] border-l border-[#30303048] border-r px-2 lg:px-6 flex items-center"> 
                {priceSorted 
                ?
                <div  className=" flex items-center gap-x-2 lg:gap-x-12 cursor-pointer text-[#FF624C] font-montserrat text-sm lg:text-base font-bold leading-6"> <span className=""> {priceSorted} </span> <IoIosArrowDown  className={`${isDropDownOpen2 && `rotate-180`} transition-all text-black h-4 w-4 `}/> </div>
                : 
                <div  className=" flex items-center gap-x-2 lg:gap-x-12 w-auto lg:w-[235px] cursor-pointer text-[#FF624C] font-montserrat text-sm lg:text-base font-bold leading-6"> Price Low-to-High <IoIosArrowDown  className={`${isDropDownOpen2 && `rotate-180`}  transition-all text-black h-4 w-4`}/></div>
                }

              {isDropDownOpen2 && (
                  <ul className="bg-[#fff] rounded-[5px] overflow-hidden right-22 lg:right-16 font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px] z-[999]">
                  {SortByPrice.map((item,index)=>{

                    return <li onClick={()=> handleSelect2(item.sorted)} className={` py-2 px-3 border-b border-[#CBCBCB] cursor-pointer  last:border-b-transparent hover:bg-[#ddd]`} key={index}> {item.sorted} </li>

                    })}
                  </ul>
                    
                )}
            </div>

            <div className=" hidden lg:flex gap-x-3 ml-6">
              <GridViewIcon/>
              <FaBars className=" text-[#CBCBCB] text-2xl cursor-pointer"/>
            </div>
          </div>
       </div>

      </div>

      <div className="w-full flex flex-wrap">
        {currentProducts.map((item, index) => {
          return (
            <div key={index} className=" max-w-screen scale-[96%] lg:scale-100 lg:max-w-[285px]">
              <ProductLayout
                catagory={item.name}
                tittle={"WH-1000XM4 Wireless Headphones High Qu..."}
                price={"$59.00"}
                rating={4}
                oldPrice={"$118.00"}
                discount={true}
                bordering={true}
                stack={false}
                starckAmount={"50"}
              />
            </div>
          );
        })}
      </div>

      <div className="mx-auto">
        <Pagination
          totalProducts={products.length}
          parPageProducts={itemsParPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PaginationProducts;
