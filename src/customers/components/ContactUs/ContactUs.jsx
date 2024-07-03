import React, {useRef} from 'react';

export default function ContactUs({ SecName }) {
  const whatsappRef = useRef(null);

  const handleClick = (imageId) => {
    switch (imageId) {
      case 'map':
        window.open('https://www.google.com/maps?q=Saptosi+Jewellers,+No+216,+4th+Floor,+4th+Cross,+Cubbonpet+Main+Rd,+Cubbonpete,+Bengaluru,+Karnataka+560002', '_blank');
        break;
      case 'whatsapp':
        whatsappRef.current.click();
        break;
      case 'other':
        // Add the operation for the third image here
        alert('Performing operation for the schedule video call.');
        break;
      default:
        break;
    }
  };

  return (
    <div className='px-4 lg:px-8 my-12'>
      <h2 className='text-3xl text-black py-5 text-center'>{SecName}</h2>
      <div className='flex flex-row justify-center items-center space-x-2 md:space-x-12 py-2 px-4'>
        <img
          src='./Images/ContactUs/Contact_us_2.png'
          className='w-1/3 md:w-1/4 bg-stone-200 rounded-md hover:bg-[#fffbf8] hover:border-2 hover:border-stone-500 transition duration-300 ease-in-out cursor-pointer'
          alt='Contact Us 2'
          onClick={() => handleClick('map')}
        />
        <img
          src='./Images/ContactUs/Contact_us_3.png'
          className='w-1/3 md:w-1/4 bg-stone-200 rounded-md hover:bg-[#fffbf8] hover:border-2 hover:border-stone-500 transition duration-300 ease-in-out cursor-pointer'
          alt='Contact Us 3'
          onClick={() => handleClick('other')}
        />
        <img
          src='./Images/ContactUs/Contact_us_1.png'
          className='w-1/3  md:w-1/4 bg-stone-200 rounded-md hover:bg-[#fffbf8] hover:border-2 hover:border-stone-500
           transition duration-300 ease-in-out cursor-pointer'
          alt='Contact Us 1'
          onClick={() => handleClick('whatsapp')}
        />
      </div>
      <a
        href="whatsapp://send?phone=918073069715"
        ref={whatsappRef}
        style={{ display: 'none' }}
      >
        Open WhatsApp
      </a>
    </div>
  );
}
