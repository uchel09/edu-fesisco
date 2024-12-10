"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { ShoppingCartIcon } from "lucide-react";
import { setCartSpin } from "@/redux/slices/globalSlice";
import { useDispatch } from "react-redux";
import { setCekOngkir } from "@/redux/slices/productSlice";

const CustomerDataInput = () => {
  const dispatch = useDispatch();
  // Fetch provinces
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState(null);

  const handleNext = () => {
    dispatch(
      setCekOngkir({ district: selectedSubdistrict, city: selectedCity })
    );
    dispatch(setCartSpin(3))
  };

  // Fetch provinces
  useEffect(() => {
    axios
      .get("https://demo.sistemtoko.com/province")
      .then((response) => {
        const options = response.data.map((item) => ({
          value: item.province_id,
          label: item.province,
        }));
        setProvinces(options);
      })
      .catch((err) => console.error("Error fetching provinces:", err));
  }, []);

  // Fetch cities when a province is selected
  useEffect(() => {
    if (selectedProvince) {
      axios
        .get(`https://demo.sistemtoko.com/city/${selectedProvince.value}`)
        .then((response) => {
          const options = response.data.map((item) => ({
            value: item.city_id,
            label: item.city_name,
          }));
          setCities(options);
        })
        .catch((err) => console.error("Error fetching cities:", err));
    } else {
      setCities([]);
      setSelectedCity(null);
    }
    setSubdistricts([]);
    setSelectedSubdistrict(null);
  }, [selectedProvince]);

  // Fetch subdistricts when a city is selected
  useEffect(() => {
    if (selectedCity) {
      axios
        .get(`https://demo.sistemtoko.com/subdistrict?id=${selectedCity.value}`)
        .then((response) => {
          const options = response.data.map((item) => ({
            value: item.subdistrict_id,
            label: item.subdistrict_name,
          }));
          setSubdistricts(options);
        })
        .catch((err) => console.error("Error fetching subdistricts:", err));
    } else {
      setSubdistricts([]);
      setSelectedSubdistrict(null);
    }
  }, [selectedCity]);


  return (
    <div className="flex flex-col gap-3">
      {/* DataPelanggan  */}
      <div className="flex flex-col">
        <h1 className="bg-[#f7f7f7] font-serif text-[18px] text-gray-600 w-full text-center py-2">
          Data Pelanggan
        </h1>
        <div className="flex flex-col gap-3 mt-5 ml-3">
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              Email*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              Nama*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              Phone/sms*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              WhatsApp*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              Line*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
        </div>
      </div>
      {/* Data Pengiriman  */}
      <div className="flex flex-col pb-2">
        <h1 className="bg-[#f7f7f7] font-serif text-[18px] text-gray-600 w-full text-center py-2">
          Data Pengiriman
        </h1>
        <div className="flex flex-col gap-3 mt-5 ml-3">
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              Atas Nama*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              {" "}
              Phone/sms*
            </label>
            <input className="mt-5 focus:outline-none" />
          </div>
          {/* Province Selector */}
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              Provinsi*
            </label>
            <Select
              options={provinces}
              value={selectedProvince}
              onChange={setSelectedProvince}
              placeholder="Pilih Provinsi"
              isClearable
            />
          </div>
          {/* City Selector */}
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              Kota*
            </label>
            <Select
              options={cities}
              value={selectedCity}
              onChange={setSelectedCity}
              placeholder="Pilih Kota"
              isClearable
              isDisabled={!selectedProvince}
            />
          </div>
          {/* Subdistrict Selector */}
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              Kecamatan*
            </label>
            <Select
              options={subdistricts}
              value={selectedSubdistrict}
              onChange={setSelectedSubdistrict}
              placeholder="Pilih Kecamatan"
              isClearable
              isDisabled={!selectedCity}
            />
          </div>
          {/* Other fields for shipping */}
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              Alamat Pengiriman*
            </label>
            <textarea className="mt-5 focus:outline-none" />
          </div>
          <div className="flex flex-col border-b">
            <label className="font-serif font-normal text-gray-600 text-[14px]">
              Catatan Pembeli*
            </label>
            <textarea className="mt-5 focus:outline-none" />
          </div>
        </div>
      </div>
      {/* Button back and next  */}
      <div className="w-full px-3 flex justify-between mb-3">
        <button
          onClick={() => {
            dispatch(setCartSpin(1));
          }}
          className="flex bg-white border-2 text-black items-center gap-2 hover:opacity-65 px-3 py-2 rounded"
        >
          <span>Back</span> <ShoppingCartIcon size={18} />
        </button>
        <button
          onClick={handleNext}
          className="flex bg-blue-500 text-white items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded"
        >
          <span>Next</span> <ShoppingCartIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default CustomerDataInput;
