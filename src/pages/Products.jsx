import React from 'react';
import CardList from '../components/CardList';
import Footer from './../components/Footer';
import ErrorMessage from '../components/ErrorMessage';
import cardData from '../service/cardData';''
const Products = () => {
  if (!Array.isArray(cardData)) {
    return <ErrorMessage message="Data format is incorrect. Expected an array." />;
  }

  if (cardData.length === 0) {
    return <ErrorMessage message="No cards to display." />;
  }

  return (
    <>
      <section className="bg-white py-8">
        <main className="container mx-auto">
          <h1 className="text-3xl font-bold text-yellow-800 mb-6">รายการสินค้า</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />
          <CardList cardData={cardData} />
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Products;
