import React from "react";
import LiveImg from "../../../public/images/CourseImg/live_class_1669032332701.webp";

const LiveClass = () => {
  return (
    <div className="mt-32 w-[90%] mx-auto">
      <div>
        <h3 className="text-red-500 font-bold text-center mb-12">ক্লাস ৫-১২</h3>
        <h2 className="font-bold text-4xl text-center mb-10">
          বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
        </h2>
        <h3 className=" text-center ">
          সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
          পড়াশুনার অগ্রযাত্রা
        </h3>
      </div>
      <div className="middle-div grid grid-cols-2 mt-16">
        <div className="text-part mt-24">
          <div>
            <div className="collapse mb-4 rounded  after:bg-slate-300 hover:bg-slate-300  hover:border-green-200  border-slate-300 border-solid border-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
              লেকচার শিট এবং রেকর্ডেড ক্লাস
              </div>
              <div className="collapse-content">
                <p>প্রতি ক্লাস শেষেই পেয়ে যাবে সেই লাইভ ক্লাসের রেকর্ডেড ভার্সন এবং লেকচার শিট</p>
              </div>
            </div>
          </div>

          <div>
            <div className="collapse mb-4 rounded  after:bg-slate-300 hover:bg-slate-300  border-slate-300 hover:border-green-200 border-solid border-2 border-spacing-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
              লাইভ ক্লাসের মাধ্যমে সম্পূর্ণ সিলেবাস কাভার
              </div>
              <div className="collapse-content">
                <p>একজন শিক্ষক ক্লাস নিবেন, দ্বিতীয় শিক্ষক তোমাদের বিভিন্ন প্রশ্নের উত্তর দিবেন</p>
              </div>
            </div>
          </div>

          <div>
            <div className="collapse mb-4  rounded  hover:bg-slate-300  hover:border-green-200 border-slate-300 border-solid border-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
              নিয়মিত হোমওয়ার্ক ও পরীক্ষা
              </div>
              <div className="collapse-content">
                <p>প্রতি ক্লাস শেষে হোমওয়ার্ক এবং প্রতি সপ্তাহে বিষয়ভিত্তিক পরীক্ষা ও প্রোগ্রেস রিপোর্ট কার্ড</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={LiveImg} alt="" />
        </div>
      </div>
      <div className="mb-4 ml-96 mr-96">
      <button className="p-4 rounded hover:px-5 hover:bg-green-500 bg-green-400 text-white">আপনার ক্লাস বেছে নিন</button>
      </div>
    </div>
  );
};

export default LiveClass;
