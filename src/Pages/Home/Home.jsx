import React from "react";
import Courses from "../../Components/Course/Courses";
import CourseSlider from "../../Components/CourseSlider/CourseSlider";
import { Slider } from "../../Components/CourseSlider/Slider";
import Header from "../../Components/Header/Header";
import LiveClass from "../../Components/LiveClass/LiveClass";
import { Review } from "../../Components/Review/Reviews";
import { UniveresityCourse } from "../../Components/UniversityCourse/University";

const Home = () => {
  return (
    <div className="">
    <Header></Header>
    <UniveresityCourse></UniveresityCourse>
    <LiveClass></LiveClass>
    <Review></Review>
    <Courses></Courses>
    </div>
  );
};

export default Home;
