import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Student Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Team Computers
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - August 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Created and implemented a streamlined Asset Management System, categorizing users into administrator and
                  employee roles. This system allowed administrators to efficiently add assets and approve new registrations, while
                  employees were able to accept or decline assets.
                  <br></br>
                  <br></br>
                  Increased efficiency and accuracy through the creation and implementation of an automated asset registration
                  process,reducing manual data entry errors
                </p>
              </div>
            </div>
            <br></br>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Student Trainee
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  HCL Infosystems Ltd.
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2022 - July 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Developed familiarity with the ABAP Programming language through hands-on experience with the R/3 software.
                  <br></br>
                  <br></br>
                  Gained competency in function modules, data dictionary, and report writing.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Mechanical Engineering with Minors in Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Shiv Nadar University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  CGPA: 8.14
                  <br></br>
                  SUBJECTS:
                  <ol>
                    <li>Operating Systems</li>
                    <li>Object Oriented Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>DataBase Management Systems</li>
                  </ol> 

                </p>
              </div>
            </div>
            <br></br>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Class 12th | CBSE
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Delhi Public School Indirapuram
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  PERCENTAGE: 90%
                  <br></br>
                  SUBJECTS:
                  <ol>
                    <li>English</li>
                    <li>Maths</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                  </ol> 
                  
                  
                  
                  

                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
