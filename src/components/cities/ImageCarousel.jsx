// import React, { useEffect, useState } from 'react';

// //npm install framer-motion
// //presque terminer 
// import image1 from '../assets/image1.jpg';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';
// import image5 from '../assets/image5.jpg';
// import image6 from '../assets/image6.jpg';
// import image7 from '../assets/image7.jpg';
// import image8 from '../assets/image8.jpg';
// import image9 from '../assets/image9.jpg';
// import image10 from '../assets/image10.jpg';
// import image11 from '../assets/image11.jpg';
// import image12 from '../assets/image12.jpg';
// import image13 from '../assets/image13.jpg';
// import image14 from '../assets/image14.jpg';
// import image15 from '../assets/image15.jpg';
// import image16 from '../assets/image16.jpg';
// import image17 from '../assets/image17.jpg';
// import image18 from '../assets/image18.jpg';
// import image19 from '../assets/image19.jpg';
// import image20 from '../assets/image20.jpg';

// const images = [
//   image1, image2, image3, image4, image5,
//   image6, image7, image8, image9, image10,
//   image11, image12, image13, image14, image15,
//   image16, image17, image18, image19, image20
// ];

// const ImageCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const[guides,setGuides]=useState([]);
//   const imagesToShow = 3;

//   const handleNext = () => {
//     setStartIndex((prev) => (prev + imagesToShow) % images.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - imagesToShow + images.length) % images.length);
//   };




// //premiere etape : 
//     useEffect(()=>{
//       axios.get("http://localhost:8000/guides")
//       .then(response=>{
//         setGuides(response.data)
//       })

//       .catch(error=>{
//         console.error("erreur lors de chargement des guides:" ,error);
//       });
//     },[]);



//   const displayedImages = images.slice(startIndex, startIndex + imagesToShow);

//   return (
//     <div className="min-h-screen bg-[#F5F3EF] flex items-center py-20">
//       <div className="w-full max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-[#4E342E] mb-4">Tour Guides In Tangier</h2>
//         <p className="text-lg text-[#7B5E57] mb-14">Get in touch with tourists in Tangier and grow your business by joining our platform as a tour guide .</p>

//         <div className="relative">
//           {/* Fleche gauche */}
//           <button
//   onClick={handlePrev}
//   className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#4E342E]/90 hover:bg-[#3E2723] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[-10deg]"
// >
//   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//   </svg>
// </button>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full"
//               >
//                 <img
//                   src={image}
//                   alt={`Guide ${startIndex + index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#3E2723]/80 to-transparent text-white px-5 py-6">
//                   <h3 className="text-xl font-bold">Guide Name {startIndex + index + 1}</h3>
//                   <p className="text-sm opacity-80">Expertise Area {startIndex + index + 1}</p>
//                   <button className="mt-3 bg-white text-[##010101] px-4 py-1.5 rounded hover:bg-[#EFEBE9] text-sm font-medium transition">
//                     See more
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Fleche droite */}
//           <button
//   onClick={handleNext}
//   className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#4E342E]/90 hover:bg-[#3E2723] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[10deg]"
// >
//   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//   </svg>
// </button>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-12 space-x-3">
//           {Array.from({ length: Math.ceil(images.length / imagesToShow) }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setStartIndex(i * imagesToShow)}
//               className={`w-4 h-4 rounded-full transition-transform duration-300 ${
//                 startIndex === i * imagesToShow ? 'bg-[#4E342E] scale-125' : 'bg-[#BCAAA4]'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;















import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [guides, setGuides] = useState([]);
  const imagesToShow = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + imagesToShow) % guides.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - imagesToShow + guides.length) % guides.length);
  };
   // apres ajouter route dans web.php => 1 ere etape
  useEffect(() => {
    axios.get("http://localhost:8000/guides")
      .then(response => {
        setGuides(response.data.guides);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des guides :", error);
      });
  }, []);
//////// 

// 2
  const displayedGuides = guides.slice(startIndex, startIndex + imagesToShow);

  return (
    <div className="min-h-screen bg-white flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-[#4E342E] mb-4">Tour Guides In Tangier</h2>
        <p className="text-lg text-[#7B5E57] mb-14">
          Get in touch with tourists in Tangier and grow your business by joining our platform as a tour guide.
        </p>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#4E342E]/90 hover:bg-[#3E2723] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[-10deg]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3 eme etape  */}
            {displayedGuides.map((guide, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full"
              >
                <img
                  src={`http://localhost:8000${guide.photo}`}
                  alt={guide.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#3E2723]/80 to-transparent text-white px-5 py-6">
                  <h3 className="text-xl font-bold">{guide.name}</h3>
                  <p className="text-sm opacity-80">{guide.description}</p>
                  <button className="mt-3 bg-white text-[#010101] px-4 py-1.5 rounded hover:bg-[#EFEBE9] text-sm font-medium transition">
                    Voir plus
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#4E342E]/90 hover:bg-[#3E2723] border border-[#D7CCC8] shadow-lg w-2 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[10deg]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(guides.length / imagesToShow) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * imagesToShow)}
              className={`w-2 h-2 rounded-full transition-transform duration-300 ${
                startIndex === i * imagesToShow ? 'bg-[#4E342E] scale-125' : 'bg-[#BCAAA4]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

