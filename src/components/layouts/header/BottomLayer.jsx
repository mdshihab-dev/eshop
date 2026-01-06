import { Link } from "react-router-dom";
import Container from "../Container";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar }  from "../../../store/slices/SidebarSlice";
const BottomLayer = () => {
  let [isDropDownOpen1, setIsDropDownOpen1] = useState(false);
  let [isDropDownOpen2, setIsDropDownOpen2] = useState(false);
  let dropDownOneRef = useRef(null);
  let dropDownTwoRef = useRef(null);
  let {t} = useTranslation();
  let activeSidebar = useSelector((state)=> state.handleSidebar.active)
  let dispatch = useDispatch()
  // All Categories Dropdown here 
  useEffect(() => {
    let handleDropDown1 = (event) => {
      if (dropDownOneRef.current && !dropDownOneRef.current.contains(event.target)) {
        setIsDropDownOpen1(false);
      }
    };

    document.addEventListener('click', handleDropDown1);
    
    // Products Dropdown here 
    let handleDropDown2 = (event)=>{
      if ( dropDownTwoRef.current && !dropDownTwoRef.current.contains(event.target)) {
        setIsDropDownOpen2(false);
      }
    }
    document.addEventListener("mousedown", handleDropDown2)
    return () => {
      document.removeEventListener('click', handleDropDown1)
      document.removeEventListener('mousedown',handleDropDown2)
    }

  }, []);


  return (
    <>
      <div className=" hidden sm:block bg-[#FF624C] py-6">
      <Container>
        <div className=" flex justify-between items-center">
          <ul className=" text-white font-bold font-montserrat text-base leading-6 flex gap-x-[80px]">
            <li ref={dropDownOneRef}  className=" relative flex items-center justify-center gap-x-4">
              <FaBars className=" h-5 w-5" />
              <button className="cursor-pointer" onClick={()=> setIsDropDownOpen1(!isDropDownOpen1)}> {t("All_Categories")} </button>
              {isDropDownOpen1 && (
                <ul className="bg-[#fff] z-50 border border-[#CBCBCB] rounded-[5px] overflow-hidden font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px]">
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Electronics
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Fashion
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Home & Kitchen
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Toys & Games
                  </li>
                  <li className=" cursor-pointer px-5 py-3 hover:bg-[#DFE3E7]">
                    Books & Stationery
                  </li>
                </ul>
              )}
            </li>
            <li ref={dropDownTwoRef} className=" relative">
              <button className=" flex items-center cursor-pointer"  onClick={() => setIsDropDownOpen2(!isDropDownOpen2)}>
                {t("Products")}
                <MdKeyboardArrowDown className={`${isDropDownOpen2 ? `rotate-180` : `rotate-0`} transition-all ml-2 h-6 w-6`} />
              </button>
              {isDropDownOpen2 && (
                <ul className="bg-[#fff] z-50 border border-[#CBCBCB] rounded-[5px] overflow-hidden  font-montserrat font-semibold absolute box-border top-8 left-[-45px] shadow-xl text-sm text-[#303030] w-[180px]">
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Gaming Consoles
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Microwave Ovens
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Wearable Devices
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Printers
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Smart Watches
                  </li>
                  <li className=" cursor-pointer px-5 py-3 hover:bg-[#DFE3E7]">
                    VR Headsets
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to={"/product-list"}> {t("Product list")} </Link>
            </li>
            <li>
              <Link to={"/product-detail"}>{t("Product details")}</Link>
            </li>
          </ul>

          <ul className=" text-white font-bold font-montserrat text-base leading-6 flex gap-x-[80px]">
            <li className=" flex items-center justify-center gap-x-4">
              <Link to={"/cart"}>{t("Carts")}</Link>
            </li>
            <li>
              <Link to={"/checkout"}>{t("Checkout")}</Link>
            </li>
            <li>
              <Link to={"/contact"}>{t("Contact")}</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>


        <div className=" block sm:hidden">
            <ul className={`${activeSidebar ? 'left-0' : 'left-[-100%]'} duration-300 fixed top-0  bg-[#ffffff] border border-[#CBCBCB] pt-8 w-screen h-screen z-50 rounded-[5px] overflow-hidden  font-montserrat font-semibold  box-border shadow-xl text-base text-[#303030] [&>li]:cursor-pointer [&>li]:border-b [&>li]:border-[#CBCBCB] [&>li]:last:border-hidden [&>li]:px-4 [&>li]:py-4 [&>li]:hover:bg-[#DFE3E7]`}>
            <IoMdClose onClick={()=> dispatch(toggleSidebar(false))} className=" absolute text-[25px] top-[6px] right-5 cursor-pointer"/>
            <li> All Categories </li>
            <li> Products </li>
            <li> Blog </li>
            <li> Contact </li>
            <li> Limited Sale </li>
            <li> Best Seller </li>
            <li> New Arrival </li>
          </ul>
        </div>
      
    </>
  );
};

export default BottomLayer;
