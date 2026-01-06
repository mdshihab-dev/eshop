import { useState } from 'react'
import Container from '../components/layouts/Container'
import { IoIosArrowDown } from 'react-icons/io'
import PaginationProducts from '../components/PaginationProducts'
import { Bounce, toast } from 'react-toastify'
import { GoCheck } from 'react-icons/go'
  let Categories = [
    { id: 1, name: 'Computers & Tablets' },
    { id: 2, name: 'Mobile & Accessories' },
    { id: 3, name: 'TV & Home Theater' },
    { id: 4, name: 'Audio & Headphones' },
    { id: 5, name: 'Cameras & Camcorders' },
    { id: 6, name: 'Gaming Equipment' },
    { id: 7, name: 'Home Appliances' },
  ]

  let Brands = [
    { id: 1, name: 'Apple' , available : "( 565 )" },
    { id: 2, name: 'Samsung' , available : "( 428 )" },
    { id: 3, name: 'ASUS' , available : "( 323 )" },
    { id: 4, name: 'Dell' , available : "( 298 )" },
    { id: 5, name: 'Lenovo' , available : "( 180 )" },
    { id: 6, name: 'HP' , available : "( 98 )" },
    { id: 7, name: 'Panasonic' , available : "( 17 )" }
  ]

const ProductListPage = () => {

   let [isDropDownOpen, setIsDropDownOpen] = useState(true);
   let [isDropDownOpen2, setIsDropDownOpen2] = useState(true);
   let [isDropDownOpen3, setIsDropDownOpen3] = useState(true);
   const [isChecked, setIsChecked] = useState([]);
   const [isChecked2, setIsChecked2] = useState([]);
   let [minValue,setMinValue] = useState(1000)
   let [maxValue,setMaxValue] = useState(4000)

    let handleCheck1 = (index)=>{
        setIsChecked((prev)=> prev.includes(index) ? prev.filter((value)=> value !== index) : [...prev, index]) 
    }
    let handleCheck2 = (index)=>{
        setIsChecked2((prev)=> prev.includes(index) ? prev.filter((value)=> value !== index) : [...prev, index]) 
    }

    // Range slider portion start here ....

    let updateSlider = (type,value)=>{ 
        let newValue = parseInt(value)
        if (isNaN(newValue)) return
        if( newValue < 0 || newValue > 5000) {
            toast.error('Minimum & Maximum price must be between 0 and 1000 !', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            return
        }     
        if (type === "min") {
           newValue > maxValue ? setMinValue(maxValue) : setMinValue(newValue)
        }
        else{
          newValue < minValue ? setMaxValue(minValue) : setMaxValue(newValue)
        }
    }


  let minParcet = (minValue / 5000) * 100 
  let maxParcet = (maxValue / 5000) * 100 

  return (
    <div className=' mt-2 lg:mt-16'>
      <Container>
      <div className=' flex justify-between relative'>
                                                    {/* Catagories portion  */}
        <div className=' hidden lg:flex'>
          <div className='w-[355px] mb-[88px] sticky top-0 box-border p-12 bg-[#F4F4F4] rounded-[25px]'>
          <div className='w-full'> 
                                                    {/* Categories Dropdown  */} 
              <div>
               <div onClick={()=> setIsDropDownOpen(!isDropDownOpen)} className=' mb-5 flex items-center justify-between'>
                  <h4 className=' cursor-pointer font-montserrat text-xl text-[#303030] font-bold  leading-7.5'>Categories</h4>
                  <IoIosArrowDown  className={`${isDropDownOpen && `rotate-180`} cursor-pointer transition-all text-black h-4 w-4 `}/>
               </div>

               {isDropDownOpen &&        
                <div className={ ` overflow-hidden transition-all`}> 
                    {Categories.map((category,index) => (
                      <label key={category.id}  className={`label relative  flex cursor-pointer gap-x-2 items-center mt-3`}>
                        <input onChange={()=> handleCheck1(index)} type="checkbox" className=' checkbox appearance-none rounded-[2px] h-4 w-4 border border-[#303030] group checked:bg-[#FF624C] checked:border-transparent'/>
                        <GoCheck  className=' checkmark'/>
                        <span className={ `${isChecked.includes(index) ? "font-bold" : "font-normal"} text text-[#303030] text-base font-montserrat transition-all leading-6 `}>{category.name}</span>
                      </label>
                    ))}
                </div>
              }   
              </div>

              <hr className=' text-[#C3C3C3] w-full my-10'/>
                                                    {/* Brands Dropdown  */}
              <div>
                  <div onClick={()=> setIsDropDownOpen2(!isDropDownOpen2)} className=' mb-5 flex items-center justify-between'>
                    <h4 className=' cursor-pointer font-montserrat text-xl text-[#303030] font-bold  leading-7.5'>Brands</h4>
                    <IoIosArrowDown   className={`${isDropDownOpen2 && `rotate-180`} cursor-pointer transition-all text-black h-4 w-4 `}/>
                  </div>

                {isDropDownOpen2 &&        
                  <div className={ ` overflow-hidden transition-all`}> 
                      {Brands.map((category,index) => (
                        <label key={category.id}  className={` relative flex cursor-pointer justify-between items-center mt-3`}>
                          <span className=' gap-x-2 flex items-center'>
                            <input onChange={()=> handleCheck2(index)} key={category.id} name={category.name} type="checkbox" className='checkbox appearance-none rounded-[2px] h-4 w-4 border border-[#303030] checked:bg-[#FF624C] checked:border-transparent'/>
                             <GoCheck className='checkmark' />
                            <span className={ `${isChecked2.includes(index) ? "font-bold" : "font-normal"} text-[#303030] text-base font-montserrat transition-all leading-6`}>{category.name}</span>
                          </span>
                          <span className='text-[#303030] font-montserrat text-base font-normal leading-6'> {category.available} </span>
                        </label>
                      ))}
                      <a href='#' className=' inline-block text-[#303030] text-base font-montserrat font-bold leading-6 mt-5 underline underline-offset-5'>More Brands</a>
                  </div>
                }   
              </div>

              <hr className=' text-[#C3C3C3] w-full my-10'/>
                                                    {/* Price portion  */}
             <div>
                <div onClick={()=> setIsDropDownOpen3(!isDropDownOpen3)} className=' mb-5 flex items-center justify-between'>
                    <h4 className=' cursor-pointer font-montserrat text-xl text-[#303030] font-bold  leading-7.5'>Price</h4>
                    <IoIosArrowDown   className={`${isDropDownOpen3 && `rotate-180`} cursor-pointer transition-all text-black h-4 w-4 `}/>
                </div>

                {isDropDownOpen3 && 
                <div>
                  <div className=' flex gap-x-[11px]'>
                    <div  className=' relative font-montserrat text-base font-normal leading-6 text-[#303030]'>
                      <span className=' absolute top-1/2 -translate-y-[50%] left-[28px]'>$</span>
                      <input 
                       onChange={(e)=> updateSlider("min",e.target.value)}
                       className='h-[74px] w-[124px] px-5 text-center border border-[#929292] rounded-[10px] bg-[#F4F4F4]' 
                       type="number"
                       value={minValue}
                       step={50}
                       max={5000}
                       min={0}/>
                    </div>
                    <div  className=' relative font-montserrat text-base font-normal leading-6 text-[#303030]'>
                      <span className=' absolute top-1/2 -translate-y-[50%] left-[28px]'>$</span>
                      <input 
                      onChange={(e)=> updateSlider("max",e.target.value)}
                       className='h-[74px] w-[124px] px-5 text-center border border-[#929292] rounded-[10px] bg-[#F4F4F4]' 
                      type="number"
                      value={maxValue}
                      step={50}
                      max={5000}
                      min={0} />
                    </div>
                  </div>

                  <div className=' mt-7.5'>
                     <div className=' relative w-full h-0.5 bg-[#C3C3C3] rounded'>
                       <div 
                       className={` absolute bg-[#FF624C] rounded h-full`}
                       style={{left: `${minParcet}%`, width: `${(maxParcet - minParcet) > 100 ? 100 : (maxParcet - minParcet)}%`}}
                       ></div>

                       <input 
                       type="range"
                       min={0}
                       max={5000}
                       step={50}
                       value={minValue}
                       onChange={(e)=> updateSlider("min",e.target.value)}
                       className='w-full h-2 bg-transparent pointer-events-none  absolute top-[-2px] appearance-none'
                       />

                       <input 
                       type="range"
                       min={0}
                       max={5000}
                       step={50}
                       value={maxValue}
                       onChange={(e)=> updateSlider("max",e.target.value)}
                       className='w-full h-2 bg-transparent pointer-events-none absolute top-[-2px] appearance-none'
                       />
                     </div>
                  </div>
                </div>

                }
             </div>

          </div>
        </div>
        </div>
                                  {/* pagination portion  */}
        <div className='max-w-[1140px]'>
          <PaginationProducts/>
        </div>
        
      </div>
    </Container>
    </div>
  )
}

export default ProductListPage