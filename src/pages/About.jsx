import React from 'react'
import Footer from './../components/Footer';

const About = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold text-yellow-800 mb-6">ติดต่อ</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />

          <div className="text-lg text-gray-700 space-y-3">
            <p className="font-semibold text-xl text-yellow-800">Meow meow</p>
            <p>Address: บ้านหน้องอีกึ่ง</p>
            <p>Tel: 0087137770</p>
            <p>E-mail: Meow meow@mail.com</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default About
