import Container from '../components/layouts/Container'
import Counter from '../components/Counter'
import DeleteIcon from '../components/icons/DeleteIcon'
import ShareIcon2 from '../components/icons/ShareIcon2'
import ShareIcon from '../components/icons/ShareIcon'
import Facility from '../components/Facility'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (

   <div className=' mt-16 mb-20'>
     <Container>
        <div className=" flex items-center gap-x-5 text-[#303030] font-montserrat text-base font-normal leading-6">
          <Link to='/' className=' cursor-pointer'>Home</Link>
            <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div className=' font-bold cursor-pointer'>Cart</div>
        </div>

        <h1 className=' text-[#303030] mb-7 font-poppins text-[56px] font-bold leading-17 mt-12'>Your Cart</h1>
        <div className=' flex py-8 pl-[56px] bg-[#F4F4F4] rounded-[15px]  text-[#303030] font-montserrat text-base font-bold leading-6'>
            <div>PRODUCT</div>
            <div className=' ml-[607px] flex'>
                <div>PRICE</div>
                <div className='ml-[171px]'>QTY</div>
                <div className='ml-[203px]'>TOTAL</div>
            </div>
        </div>

        <div className=' my-6 overflow-hidden group relative pt-6 pl-[36px] pb-[56px] pr-12] box-border border duration-300 rounded-[10px] border-transparent group hover:border-[#CBCBCB]'>
            <div className='  flex items-center gap-x-[62px]'>
                <img src="./images/cart-img.png" alt="cart" />
                <div className=' flex items-center'>
                    <div className=' w-[314px]'>
                        <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 tracking-[5px]'>LAPTOP</span>
                        <p className='text-[#303030] mt-4 mb-[46px] font-poppins text-xl font-semibold leading-7.5  duration-300 group-hover:text-[#FF624C]'>2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</p>
                        <div className=' text-[#303030] font-montserrat text-base font-normal leading-6'>
                            <span className=' font-bold'>Variant:</span>
                            <span className='ml-2'>Space Gray</span>
                        </div>
                    </div>
                    <div className='text-[#303030] relative left-[100px] font-poppins text-xl font-semibold leading-7.5 '>$1,659.00</div>
                    <div className=' relative left-[225px]'>
                        <Counter price={1659.00}/>
                    </div>
                </div>

            </div>
                <div className='absolute top-1/2 -right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
                    <div className='cursor-pointer h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <DeleteIcon width='25.6px' height='25.6px'/>
                    </div>
                    <div className='cursor-pointer mt-[38px] h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <ShareIcon width='25.6px' height='25.6px'/>
                    </div>
                </div>
        </div>

        <div className=' mb-6 overflow-hidden group relative pt-6 pl-[36px] pb-[56px] pr-12] box-border border duration-300 rounded-[10px] border-transparent hover:border-[#CBCBCB]'>
            <div className='flex items-center gap-x-[62px]'>
                <img src="./images/cart-img.png" alt="cart" />
                <div className=' flex items-center'>
                    <div className=' w-[314px]'>
                        <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 tracking-[5px]'>WATCH</span>
                        <p className='text-[#303030] mt-4 mb-[46px] font-poppins text-xl font-semibold leading-7.5 duration-300 group-hover:text-[#FF624C]'>Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band</p>
                        <div className=' text-[#303030] font-montserrat text-base font-normal leading-6'>
                            <span className=' font-bold'>Variant:</span>
                            <span className='ml-2'>Fiery Red</span>
                        </div>
                    </div>
                    <div className='text-[#303030] relative left-[100px] font-poppins text-xl font-semibold leading-7.5 '>$999.00</div>
                    <div className=' relative left-[225px]'>
                        <Counter price={999}/>
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 -right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
                    <div className='cursor-pointer h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <DeleteIcon width='25.6px' height='25.6px'/>
                    </div>
                    <div className='cursor-pointer mt-[38px] h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <ShareIcon width='25.6px' height='25.6px'/>
                    </div>
                </div>
        </div>

        <div className=' mb-6 overflow-hidden group relative pt-6 pl-[36px] pb-[56px] pr-12] box-border border duration-300 rounded-[10px] border-transparent hover:border-[#CBCBCB]'>
            <div className='flex items-center gap-x-[62px]'>
                <img src="./images/cart-img.png" alt="cart" />
                <div className=' flex items-center'>
                    <div className=' w-[314px]'>
                        <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 tracking-[5px]'>TELEVISION</span>
                        <p className='text-[#303030] mt-4 mb-[46px] font-poppins text-xl font-semibold leading-7.5 duration-300 group-hover:text-[#FF624C]'>LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ</p>
                        <div className=' text-[#303030] font-montserrat text-base font-normal leading-6'>
                            <span className=' font-bold'>Variant:</span>
                            <span className='ml-2'>Jet Black</span>
                        </div>
                    </div>
                    <div className='text-[#303030] relative left-[100px] font-poppins text-xl font-semibold leading-7.5 '>$2,299.00</div>
                    <div className=' relative left-[225px]'>
                        <Counter price={2299}/>
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 -right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
                    <div className='cursor-pointer h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <DeleteIcon width='25.6px' height='25.6px'/>
                    </div>
                    <div className='cursor-pointer mt-[38px] h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <ShareIcon width='25.6px' height='25.6px'/>
                    </div>
                </div>
        </div>

        <div className=' mb-6 overflow-hidden group relative pt-6 pl-[36px] pb-[56px] pr-12] box-border border duration-300 rounded-[10px] border-transparent hover:border-[#CBCBCB]'>
            <div className='flex items-center gap-x-[62px]'>
                <img src="./images/cart-img.png" alt="cart" />
                <div className=' flex items-center'>
                    <div className=' w-[314px]'>
                        <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 tracking-[5px]'>GAMING</span>
                        <p className='text-[#303030] mt-4 mb-[46px] font-poppins text-xl font-semibold leading-7.5 duration-300 group-hover:text-[#FF624C]'>Console Game Stick HD Wireless Bluetooth Connect</p>
                        <div className=' text-[#303030] font-montserrat text-base font-normal leading-6'>
                            <span className=' font-bold'>Variant:</span>
                            <span className='ml-2'>White</span>
                        </div>
                    </div>
                    <div className='text-[#303030] relative left-[100px] font-poppins text-xl font-semibold leading-7.5 '>$109.00</div>
                    <div className=' relative left-[225px]'>
                        <Counter price={109}/>
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 -right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
                    <div className='cursor-pointer h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <DeleteIcon width='25.6px' height='25.6px'/>
                    </div>
                    <div className='cursor-pointer mt-[38px] h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <ShareIcon width='25.6px' height='25.6px'/>
                    </div>
                </div>
        </div>

        <div className=' mb-6 overflow-hidden group relative pt-6 pl-[36px] pb-[56px] pr-12] box-border border duration-300 rounded-[10px] border-transparent hover:border-[#CBCBCB]'>
            <div className='flex items-center gap-x-[62px]'>
                <img src="./images/cart-img.png" alt="cart" />
                <div className=' flex items-center'>
                    <div className=' w-[314px]'>
                        <span className='text-[#303030] font-montserrat text-sm font-normal leading-5 tracking-[5px]'>TABLET</span>
                        <p className='text-[#303030] mt-4 mb-[46px] font-poppins text-xl font-semibold leading-7.5 duration-300 group-hover:text-[#FF624C]'>Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28</p>
                        <div className=' text-[#303030] font-montserrat text-base font-normal leading-6'>
                            <span className=' font-bold'>Variant:</span>
                            <span className='ml-2'>Space Gray (with Case)</span>
                        </div>
                    </div>
                    <div className='text-[#303030] relative left-[100px] font-poppins text-xl font-semibold leading-7.5 '>$259.00</div>
                    <div className=' relative left-[225px]'>
                        <Counter price={259}/>
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 -right-20 duration-300 group-hover:right-12 -translate-y-1/2'>
                    <div className='cursor-pointer h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <DeleteIcon width='25.6px' height='25.6px'/>
                    </div>
                    <div className='cursor-pointer mt-[38px] h-16 w-16 bg-white border border-[#FF624C] flex items-center justify-center rounded-[50%] duration-300 hover:bg-[#FF624C] text-[#FF624C] group-[.group]:hover:text-white'>
                      <ShareIcon width='25.6px' height='25.6px'/>
                    </div>
                </div>
        </div>

        <div className=' flex justify-between items-start'>
            <div className=' w-[618px] relative'>
                <input type="number" placeholder='Enter coupon code (ex: FIRSTPAY)' name='coupon' className=' pr-[180px] w-full box-border rounded-[10px] bg-white border border-[#CBCBCB] py-[35px] px-9 text-[#303030] font-montserrat text-base font-normal leading-6 opacity-75 ' />
                <button className=' cursor-pointer absolute top-1/2 -translate-y-[50%] right-9 text-[#303030] font-poppins text-xl font-semibold leading-7.5 underline'>Apply Code</button>
            </div>

            <div className=' flex items-end flex-col'>
              <div className='w-[618px] flex items-center justify-between py-8 px-9 bg-[#F4F4F4] rounded-[10px]'>
                <div className='text-[#303030] font-montserrat text-base font-bold leading-6'>SUB TOTAL</div>
                <div className=' flex'>
                    <span className='text-[#FF624C] font-poppins text-2xl font-semibold leading-7.5 mr-[23px]'>$7,733.00</span>
                    <small className='text-[#303030] font-montserrat text-sm font-normal leading-5 mt-2'>( excl. shipping fee )</small>
                </div>
              </div>

              <div className=' flex items-center mt-8 gap-x-[56px]'>
                 <div className=' text-[#303030] font-poppins text-xl font-semibold leading-7.5'>Continue Shopping</div>
                 <Button content={"Update Cart"} paddingX='40px' paddingY='16px' bg='#FF624C' radious='10' color='white' fontName='Montserrat' size='20px' weight='700' lineHeight='30px'/>
              </div> 
            </div>
        </div>
    </Container>
     <hr className=' border-[#CBCBCB] mt-[100px]'/>
    <Container>
        <Facility/>
    </Container>
   </div>

  )
}

export default CartPage