import React from "react";
import { Button } from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      <div className="relative w-full h-screen lg:h-screen ">
        <img
          className="w-full h-full object-cover"
          src="/Images/AboutUs/About.jpg"
          alt="About Us"
        />
        <div className="absolute inset-0 flex items-start justify-start p-4 lg:p-8">
          <div className="bg-black bg-opacity-30 p-4 backdrop-blur-sm rounded w-full max-w-lg mx-4 lg:ml-16 mt-10 lg:mt-20">
            <h3 className="text-white font-bold text-2xl lg:text-3xl py-2 lg:py-3 px-2">
              About Us
            </h3>
            <p className="text-white text-base lg:text-lg py-2 lg:py-3 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              maiores iusto sequi! Earum, temporibus excepturi. Suscipit, porro.
              Ut quam explicabo ratione consequatur accusamus dolores! Harum
              porro corporis ex consectetur, ipsam dicta, nemo error
              reprehenderit sequi fugit adipisci doloribus voluptate quae.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-20 mx-4">
        <div className="flex flex-col lg:flex-row w-full lg:w-[76%]">
          <div className="w-full lg:w-1/2">
            <img
              src="/Images/HomeAbout.png"
              alt="About Us"
              className="w-full h-auto image-with-animation"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 mt-4 lg:mt-0">
            <h2 className="text-3xl text-black mb-4 text-justify">Our Story</h2>
            <p className="text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              sunt voluptatibus voluptatum voluptate veritatis quisquam officia!
              Enim, ullam! Reiciendis asperiores, laborum consequatur illum
              dolores modi ab maiores inventore magnam fugit est sequi officiis
              sit corrupti adipisci numquam nobis tempore tenetur molestias
              eligendi! Eveniet aut, consectetur quibusdam consequatur odit
              facilis, cum suscipit commodi ea temporibus qui vitae? Repellat
              possimus dolore doloribus nisi delectus, animi sapiente temporibus
              optio veniam qui architecto quo
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-15">
        <div className="w-3/4">
          <h2 className="text-3xl text-black mb-4 text-center">Our Story</h2>
          <p className="text-base lg:text-lg text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            rem a quia! Nostrum, corporis obcaecati. Minus, at sed. Mollitia
            quaerat sequi atque? Saepe aliquam temporibus alias laboriosam
            facere rerum repellat dolorem veniam quam corrupti commodi tempora,
            debitis libero eos culpa explicabo voluptatum, ad quo mollitia
            aliquid! Ab cum asperiores culpa autem molestiae magni ipsa quisquam
            veniam, porro voluptatem ut expedita nostrum natus iure cupiditate
            impedit rem blanditiis pariatur quaerat aut aliquid reprehenderit?
            Consequuntur molestias a deserunt eligendi autem ut aliquid ipsum
            distinctio blanditiis inventore praesentium ab incidunt quibusdam
            nulla at, illum magnam obcaecati necessitatibus? Sed nobis odio ea
            nemo ipsam fuga quibusdam sunt corporis deserunt sequi reiciendis
            expedita iste, voluptas eos quidem, voluptatum deleniti. Natus
            explicabo deserunt, eaque expedita quae sit aperiam, neque iste ex
            iusto maxime ut eum provident saepe minus alias architecto odit
            voluptatem, excepturi aliquam? Nam iste iure nulla cum in dolore
            beatae assumenda ut incidunt sequi?
          </p>
        </div>
      </div>
      <div className="container py-8 w-5/6 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {/* <!-- Container 1 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/custome_design.png"
                alt="Image 1"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customised Jewels</h3>
            <p className="text-gray-600">At saptosi jewellers, customers can enjoy bespoke jewelry services allowing them to create unique & personalised pieces. </p>
            </div>

            {/* <!-- Container 2 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/customer_care.png"
                alt="Image 2"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lower costs</h3>
            <p className="text-gray-600">Discover exquisite craftmanship at unbeatable prices with saptosi jewellers where we commit to affordability and stunning jewellery.</p>
            </div>

            {/* <!-- Container 3 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/customer_care_bw.png"
                alt="Image 3"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
              <h3 className="text-xl font-semibold mb-2">Delightful Customers</h3>
              <p className="text-gray-600">At saptosi jewellers, we take pride in our content and delighted customers who appreciate our exquisite designs and exceptional service.</p>
            </div>

            {/* <!-- Container 4 --> */}
            <div className="p-6 transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="mb-4">
                <img
                src="./Images/AboutUs/customer_care_bw.png"
                alt="Image 4"
                className="transition-transform transform hover:-translate-y-2 duration-300 w-1/2 rounded-md mx-auto"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">Saptosi jewellers prides itself on exceptional customer support, offering personalised assistance and ensuring a seamless shopping experience for every client.</p>
            </div>
        </div>
        </div>

    </div>
  );
};

export default AboutUs;
