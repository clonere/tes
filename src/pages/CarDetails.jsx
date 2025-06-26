import React from 'react';
import { useParams } from 'react-router-dom';
import car1Img from '../assets/car1.jpg';
import ferrariImg from '../assets/Ferarri.jpg';
import bmwImg from '../assets/BMW.jpg';

function CarDetails() {
  const { carName } = useParams(); // Mengambil parameter dari URL
  
  // Data mobil yang konsisten dengan halaman Home
  const cars = [
    { name: '2022 Porsche GT3 RS', slug: '2022-porsche-gt3-rs', description: 'Deskripsi tentang Porsche', image: car1Img, price: 16000000000 },
    { name: '2021 Ferrari SF90 Stradale', slug: '2021-ferrari-sf90-stradale', description: 'Deskripsi tentang Ferrari', image: ferrariImg, price: 17000000000 },
    { name: '2025 BMW M4 Competition xDrive Coupe', slug: '2025-bmw-m4-competition-xdrive-coupe', description: 'Deskripsi tentang BMW', image: bmwImg, price: 2200000000 },
  ];

  // Mencari mobil dengan membandingkan nama yang sudah di-slug
  const car = cars.find(c => c.slug === carName);

  if (!car) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="text-2xl font-bold">Mobil tidak ditemukan</h1>
          <p>Maaf, mobil yang Anda cari tidak ada dalam daftar kami.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Informasi Produk */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {car.name}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Reviews
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Details
              </a>
            </div>
            <p className="leading-relaxed mb-4">{car.description}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">4</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                Rp{car.price.toLocaleString()}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Gambar Produk */}
          <img
            alt={car.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={car.image}
          />
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
