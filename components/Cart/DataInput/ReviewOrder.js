"use client";
import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import ItemReviewList from "./itemReviewList";
import axios from "axios";
import Select from "react-select";
import { formatCurrencyIDR } from "@/lib/currency";
import { ShoppingCartIcon } from "lucide-react";
import { setCartSpin } from "@/redux/slices/globalSlice";

const ReviewOrder = () => {
    const dispatch = useDispatch()
  const { cart, cekOngkir } = useSelector(
    (state) => state.product,
    shallowEqual
  );
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalWeight = cart.reduce(
    (acc, item) => acc + item.weight * item.qty,
    0
  );
  const district = cekOngkir?.district.value ||""
  const city = cekOngkir?.city.value || ""

  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ongkir, setOngkir] = useState(0);
  useEffect(() => {
    const fetchShippingData = async () => {
      try {
        setLoading(true);
        if(!district && !city && !totalWeight){
          return
        }
        
        // Endpoint API
        const response = await axios.get(
          `https://demo.sistemtoko.com/ongkir?id=${city}&destination=${district}&weight=${totalWeight}`
        );
        
        // Validasi struktur respons API
        if (response.data && Array.isArray(response.data.data)) {
          const shippingData = response.data.data;

          // Format data ongkir untuk React Select
          const formattedOptions = shippingData.flatMap((service) =>
            service.costs.flatMap((cost) =>
              cost.cost.map((item) => ({
                value: item.value,
                label: `${service.name} - ${
                  cost.description
                } - Rp ${item.value.toLocaleString("id-ID")} (ETD: ${
                  item.etd
                })`,
                serviceCode: service.code,
                serviceName: service.name,
                etd: item.etd,
              }))
            )
          );

          // Update state dengan opsi yang sudah diformat
          setOptions(formattedOptions);
        } else {
          alert("tidak ada data ongkir  ")
        }
      } catch (err) {
        // Tangani error
       setOptions([])
      } finally {
        // Pastikan loading dihentikan
        setLoading(false);
      }
    };

    // Panggil fungsi
    fetchShippingData();
  }, []);

  if (loading) return <div>Loading...</div>;
  

 
  return (
    <div className="flex flex-col">
      <h1 className="bg-[#f7f7f7] font-serif text-[18px] text-gray-600 w-full text-center py-2">
        Review Belanja
      </h1>
      {cart &&
        cart.length > 0 &&
        cart.map((item, index) => <ItemReviewList key={index} item={item} />)}

      <div className="flex flex-col px-3 my-3 gap-3">
        <label>Pilih Pengiriman</label>
        <Select
          options={options}
          onChange={(selected) => {
            setOngkir(parseInt(selected.value));
           
          }}
          placeholder="Pilih Ongkir"
        />
      </div>

      <div className="flex flex-col w-full my-5 border-b-2">
        <div className="flex-row flex text-[14px] justify-between px-3">
          <span>Biaya Pengiriman {totalWeight} gr</span>
          <span>{formatCurrencyIDR(ongkir)}</span>
        </div>
        <div className="flex-row flex text-[14px] justify-between px-3">
          <span>Sub Total </span>
          <span>{formatCurrencyIDR(total)}</span>
        </div>
      </div>
      <div className="my-5">
        <div className="flex-row flex text-[14px] justify-between px-3">
          <span>Sub Total </span>
          <span>{formatCurrencyIDR(total + ongkir)}</span>
        </div>
      </div>
      <div className="w-full px-3 flex justify-between mb-3">
        <button
          onClick={() => {
            dispatch(setCartSpin(2));
          }}
          className="flex bg-white border-2 text-black items-center gap-2 hover:opacity-65 px-3 py-2 rounded"
        >
          <span>Back</span> <ShoppingCartIcon size={18} />
        </button>
        <button
          className="flex bg-blue-500 text-white items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded"
        >
          <span>Submit</span> <ShoppingCartIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;
