import { Facebook, Instagram, Phone, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer
      className={`flex flex-col w-full py-[30px] items-center mt-10 justify-between bg-black`}
    >
      <div className="flex flex-col md:flex-row  py-12 justify-between text-white w-full px-[15%]">
        <div className="flex flex-col  item-center w-[270px]">
          <div className=" flex  flex-col w-full items-center font-serif">
            <span className="italic text-[14px] text-[#c99947]">
              Talk to Us Now !
            </span>
            <span className="text-[20px]">Contact Us</span>
          </div>
          <div className="flex flex-col mt-[50px] gap-8">
            <span className="text-[12px] text-gray-400 text-center ">
              {" "}
              Jl. Palagan km 10 Rejodani, Ngaglik Sleman Yogyakarta
            </span>
            <span className="text-[20px] text-center text-white flex items-center gap-2 justify-center">
              {" "}
              <Phone /> 0812-3821-0600
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center  w-[270px]">
          <div className=" flex  flex-col font-serif">
            <span className="italic text-[14px] text-[#c99947]">
              Talk to Us Now !
            </span>
            <span className="text-[20px]"> Our Services </span>
          </div>
          <div className="flex flex-col mt-[50px] text-[#888888] items-center">
            <span className="text-[16px] hover:text-[#c99947] cursor-pointer">CARA PEMBELIAN</span>
            <span className="text-[16px] hover:text-[#c99947] cursor-pointer">FAQ</span>
            <span className="text-[16px] hover:text-[#c99947] cursor-pointer">
              KONFIRMASI PEMBAYARAN
            </span>
            <span className="text-[16px] hover:text-[#c99947] cursor-pointer">TENTANG HIJJA</span>
            <span className="text-[16px] hover:text-[#c99947] cursor-pointer">
              SYARAT & KETENTUAN
            </span>
            <span className="text-[16px] hover:text-[#c99947] cursor-pointer">
              PENGEMBALIAN & PENUKARAN
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[270px]">
          <div className=" flex  flex-col font-serif">
            <span className="italic text-[14px] text-[#c99947]">
              Talk to Us Now !
            </span>
            <span className="text-[20px]"> Follow Us</span>
          </div>
          <div className="flex w-full  justify-center gap-3 flex-row mt-[50px] ">
              <div className='w-[55px] flex items-center justify-center h-[55px] rounded-full bg-white'>
                <Facebook color='black' size={30}/>
              </div>
              <div className='w-[55px] h-[55px] rounded-full flex items-center justify-center bg-white'>
                <Twitter size={30} color='black'/>
              </div>
              <div className='w-[55px] h-[55px] rounded-full flex items-center justify-center bg-white'>
                <Instagram size={30} color='black'/>
              </div>
          </div>
        </div>
      </div>
      <div className="text-white italic font-serif  text-[12px]">
        Supported by <span className="text-[#c99947]">www.sistemtoko.com</span>.
        Allright serviced{" "}
      </div>
    </footer>
  );
}

export default Footer