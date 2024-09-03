// "use client";
// import { transform } from "next/dist/build/swc";
// import { useState } from "react";

// const slides = [{ title: "slide1" }, { title: "slide2" }, { title: "slide3" }];
// export const Carousel = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   return (
//     <div className="w-full h-[796px]  bg-[#F2F0FF] overflow-hidden  relative">
//       <div
//         className="w-[300%] h-full flex  border-black border"
//         style={{
//           transform: `translateX(-${(slideIndex * 100) / 3}%)`,
//           transition: "transform: 0.5",
//         }}
//       >
//         {slides.map((slide, index) => (
//           <Slide key={index} title={slide.title} />
//         ))}
//       </div>
//       {/* <div className="flex-1  border border-green-300 flex justify-center items-center">
//         slide1
//       </div>
//       <div className="flex-1  border border-green-300 flex justify-center items-center">
//         slide2
//       </div>
//       <div className="flex-1  border border-green-300 flex justify-center items-center">
//         slide3
//       </div> */}

//       <div className="absolute flex gap-4 bottom-4 left-[calc(52%- 52px)]">
//         <div
//           className={`w-6 h-6 rounded-md ${
//             slideIndex === 0 ? "bg-slate-700" : "bg-slate-400"
//           }`}
//           onClick={() => {
//             setSlideIndex;
//             0;
//           }}
//         ></div>
//         <div
//           className={`w-6 h-6 rounded-md ${
//             slideIndex === 0 ? "bg-slate-700" : "bg-slate-400"
//           }`}
//           onClick={() => {
//             setSlideIndex;
//             0;
//           }}
//         ></div>
//         <div
//           className={`w-6 h-6 rounded-md ${
//             slideIndex === 0 ? "bg-slate-700" : "bg-slate-400"
//           }`}
//           onClick={() => {
//             setSlideIndex;
//             0;
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// type SladeProps = { tilte: string };
// const Slide = ({ tilte }: SlideProps) => {
//   return (
//     <div className="flex-1 h-full flex  justify-center items-center">
//       {title}
//     </div>
//   );
// };

// const Indicator = ({ active, onclick }) => {
//   return (
//     <div
//       className={`w-6 h-6 rounded-md  bg-slate-900 ${
//         active ? "bg-slate-400" : ""
//       }`}
//       onclick={onclick}
//     ></div>
//   );
// };
"use client";
import { useState } from "react";

const slides = [{ title: "slide1" }, { title: "slide2" }, { title: "slide3" }];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="w-full h-[796px] bg-[#F2F0FF] overflow-hidden relative">
      <div
        className="w-[300%] h-full flex border-black border"
        style={{
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
          transition: "transform 0.5s",
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} title={slide.title} />
        ))}
      </div>

      <div className="absolute flex gap-4 bottom-4 left-[calc(52%- 52px)]">
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={slideIndex === index}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

type SlideProps = { title: string };

const Slide = ({ title }: SlideProps) => {
  return (
    <div className="flex-1 h-full flex justify-center items-center">
      {title}
    </div>
  );
};

type IndicatorProps = {
  active: boolean;
  onClick: () => void;
};

const Indicator = ({ active, onClick }: IndicatorProps) => {
  return (
    <div
      className={`w-6 h-6 rounded-md  ${
        active ? "bg-slate-700" : "bg-slate-400"
      }`}
      onClick={onClick}
    ></div>
  );
};
