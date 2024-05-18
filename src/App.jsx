import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRedo,
  FaLock,
  FaMicrophone,
  FaCog,
  FaGoogle,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { PiSquareBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi2";
import { PiCameraFill } from "react-icons/pi";

function App() {
  const [url, setUrl] = useState();
  const [data, setData] = useState(null);

  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleNavigate = async (e) => {
    if (e.key === "Enter") {
      const fetchUrl = url.startsWith("http") ? url : `https://${url}`;
      window.location.href = fetchUrl;
      try {
        const response = await fetch(fetchUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-800 text-gray-400">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-gray-900 px-4 py-1">
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Vite + React</span>
        </div>
        <div className="flex gap-1 items-center space-x-1">
          <button>
            <FaMinusCircle />
          </button>
          <button>
            <PiSquareBold className=" w-5 h-5 " />
          </button>
          <button>
            <IoMdCloseCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Address Bar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <button
            className="p-1 hover:bg-gray-700 rounded"
            onClick={handleBack}
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>
          <button
            className="p-1 hover:bg-gray-700 rounded"
            onClick={handleForward}
          >
            <FaArrowRight className="w-4 h-4" />
          </button>
          <button
            className="p-1 hover:bg-gray-700 rounded"
            onClick={handleRefresh}
          >
            <FaRedo className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center flex-grow mx-2 bg-gray-700 rounded">
          <FaLock className="w-4 h-4 mx-2" />
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            onKeyDown={handleNavigate}
            className="flex-grow bg-transparent text-gray-200 px-2 py-1 focus:outline-none"
            placeholder="Search Google or type a URL"
          />
          <FaMicrophone className="w-4 h-4 mx-2" />
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-700 rounded">
            <FaCog className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow flex flex-col bg-gray-800">
        {/* Tabs Bar */}
        <div className="flex items-center justify-between bg-gray-800 text-gray-400 px-4 py-1 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="flex items-center bg-gray-700 px-4 py-2 rounded-t">
              <FaGoogle className="w-4 h-4 mr-2" />
              <span className="text-gray-200">New window</span>
              <button className="ml-2">
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            <button className="px-4 py-2 bg-gray-700 rounded-t hover:bg-gray-600">
              <FaPlus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="flex-grow flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/featured/?city,night')",
          }}
        >
          <div className="text-center">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="mx-auto mb-4"
            />
            <div className="flex items-center px-2 gap-[40px] py-2 w-[500px] rounded-full  bg-white  ">
              <div className="text-gray-700 w-6 h-6 mx-2 flex items-center">
                <CiSearch />
              </div>
              <input
                type="text"
                className="bg-transparent  outline-none "
                placeholder="Search Google or type a URL"
              />
              <div className="flex items-center gap-4  mx-[100px]">
                <HiMicrophone />
                <PiCameraFill />
              </div>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="text-white hover:underline">Gmail</button>
              <button className="text-white hover:underline">Images</button>
              <button className="text-white hover:underline">Sign In</button>
            </div>
          </div>
        </div>
      </div>

      {/* Data Display */}
      <div className="p-4 bg-gray-900 text-gray-200">
        {data && <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;
