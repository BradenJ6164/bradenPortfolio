import {AnimatePresence, motion, useScroll} from "framer-motion";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [state, setState] = useState(false);
    const [hasScrolled,setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position
            const scrollY = window.scrollY;
            // Set a threshold value to determine if the page has scrolled
            const threshold = 10;
            setHasScrolled(scrollY > threshold);
        };

        // Add event listener to monitor scroll position
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>

        <div>
            <nav className={`fixed w-screen z-50 bg-white dark:bg-gray-800 ${hasScrolled ? 'shadow' : ''} `}>
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">

                                <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="42" height="42"
                                     viewBox="0, 0, 400,400">
                                    <g id="svgg">
                                        <path id="path0"
                                              d="M150.781 76.997 C 147.559 77.584,142.813 78.443,140.234 78.907 C 129.688 80.803,118.836 84.877,109.766 90.346 C 101.762 95.171,89.063 108.962,89.063 112.828 C 89.063 113.456,88.762 114.156,88.395 114.383 C 85.944 115.897,82.491 132.847,82.491 143.359 C 82.491 161.802,87.577 175.882,98.126 186.638 C 104.627 193.266,104.424 192.969,102.439 192.969 C 101.633 192.969,100.535 193.496,100.000 194.141 C 99.465 194.785,98.596 195.313,98.068 195.313 C 94.515 195.313,80.828 207.566,75.634 215.398 C 60.492 238.228,63.192 279.952,81.264 302.403 C 89.013 312.029,93.922 316.106,103.700 321.037 C 113.818 326.139,113.135 326.530,122.266 310.381 C 126.563 302.780,130.504 295.841,131.024 294.961 C 131.544 294.080,132.222 292.832,132.529 292.188 C 132.837 291.543,133.874 289.755,134.833 288.214 C 135.792 286.672,138.044 282.708,139.836 279.404 L 143.095 273.396 140.737 270.712 C 136.018 265.337,134.912 261.591,134.849 250.781 C 134.738 231.683,142.276 224.083,164.063 221.323 C 173.905 220.076,173.510 220.311,177.416 213.367 C 178.530 211.386,183.305 203.086,188.028 194.922 C 192.751 186.758,197.957 177.617,199.597 174.609 C 201.238 171.602,206.622 162.109,211.563 153.516 C 216.504 144.922,221.338 136.484,222.305 134.766 C 223.273 133.047,226.490 127.422,229.454 122.266 C 232.418 117.109,235.094 112.363,235.401 111.719 C 235.707 111.074,237.018 108.789,238.314 106.641 C 239.609 104.492,241.026 102.031,241.462 101.172 C 241.898 100.313,242.679 98.902,243.198 98.037 C 246.671 92.245,255.469 76.619,255.469 76.241 C 255.469 75.194,156.772 75.906,150.781 76.997 M278.825 77.539 C 276.702 81.607,273.189 87.947,272.657 88.672 C 272.342 89.102,271.210 91.035,270.142 92.969 C 269.074 94.902,262.027 107.249,254.482 120.406 C 246.937 133.563,239.660 146.395,238.310 148.922 C 236.960 151.448,235.536 154.043,235.146 154.688 C 234.141 156.344,222.801 176.245,220.455 180.469 C 219.381 182.402,217.679 185.296,216.673 186.899 C 215.667 188.501,214.844 189.989,214.844 190.205 C 214.844 190.421,213.503 192.801,211.863 195.494 C 210.224 198.187,208.638 200.918,208.337 201.563 C 208.037 202.207,206.730 204.492,205.432 206.641 C 204.134 208.789,202.652 211.426,202.138 212.500 C 201.624 213.574,201.014 214.629,200.781 214.844 C 200.549 215.059,199.938 216.113,199.425 217.188 C 198.911 218.262,197.430 220.898,196.133 223.047 C 194.837 225.195,193.429 227.656,193.004 228.516 C 192.579 229.375,191.188 231.836,189.911 233.984 C 188.635 236.133,187.109 238.770,186.520 239.844 C 185.931 240.918,180.584 250.234,174.638 260.547 C 168.693 270.859,162.946 280.879,161.868 282.813 C 160.790 284.746,159.085 287.639,158.079 289.242 C 157.073 290.845,156.250 292.346,156.250 292.578 C 156.250 292.810,155.427 294.311,154.421 295.914 C 153.415 297.517,151.711 300.410,150.634 302.344 C 149.557 304.277,146.513 309.610,143.869 314.193 C 141.225 318.777,139.062 322.908,139.062 323.373 C 139.063 323.975,166.960 324.219,235.938 324.219 L 332.813 324.219 332.813 301.563 L 332.813 278.906 274.936 278.906 L 217.060 278.906 218.611 276.367 C 221.744 271.237,223.437 268.331,223.960 267.188 C 224.254 266.543,225.256 264.785,226.186 263.281 C 227.116 261.777,228.758 258.965,229.835 257.031 C 233.651 250.181,250.302 221.374,254.806 213.831 C 257.319 209.621,259.375 206.001,259.375 205.786 C 259.375 205.570,260.539 203.565,261.962 201.330 C 263.384 199.094,266.337 194.102,268.523 190.234 C 270.709 186.367,274.752 179.336,277.508 174.609 C 288.759 155.313,294.883 144.735,296.733 141.406 C 297.807 139.473,299.447 136.660,300.377 135.156 C 301.306 133.652,302.319 131.895,302.627 131.250 C 302.935 130.605,303.612 129.375,304.132 128.516 C 304.652 127.656,306.309 124.844,307.813 122.266 C 309.316 119.687,310.973 116.875,311.493 116.016 C 312.013 115.156,312.693 113.926,313.005 113.281 C 313.316 112.637,314.912 109.906,316.551 107.213 C 318.190 104.520,319.531 102.163,319.531 101.975 C 319.531 101.787,321.925 97.662,324.850 92.809 C 327.776 87.955,330.416 83.457,330.718 82.813 C 331.020 82.168,331.941 80.586,332.764 79.297 C 333.587 78.008,334.286 76.689,334.318 76.367 C 334.349 76.045,322.083 75.781,307.059 75.781 L 279.742 75.781 278.825 77.539 M184.657 125.497 L 188.281 125.994 188.281 150.225 L 188.281 174.457 178.777 173.979 C 159.643 173.017,151.187 165.877,150.181 149.832 C 149.033 131.538,161.993 122.390,184.657 125.497 "
                                              stroke="none" fill="rgb(239 68 68)" fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                                {/*<img className="w-8 h-8" src="/images/blLogo.svg" alt="Workflow"/>*/}
                            </a>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">

                                    <NavLink to="/" className={({isActive,isPending})=>{
                                        return (isActive ? 'text-red-500 ' :
                                            'text-gray-800 dark:text-white') + "hover:text-red-800 dark:hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
                                    }}>
                                        Home
                                    </NavLink>
                                    <NavLink to="/projects" className={({isActive,isPending})=>{
                                        return (isActive ? 'text-red-500 ' :
                                            'text-gray-800 dark:text-white') + "hover:text-red-800 dark:hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
                                    }}>
                                        Projects
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <a href="https://github.com/BradenJ6164" target="_blank"
                                   className="p-1 text-gray-400 rounded-full focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">
                                View github
                            </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         fill="currentColor"
                                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                                         viewBox="0 0 1792 1792">
                                        <path
                                            d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div className="flex items-center ">
                                <a href="https://discord.gg/wggufbST4Z" target="_blank"
                                   className="p-1 text-gray-400 rounded-full focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">
                                View github
                            </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                         fill="currentColor"
                                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                                         viewBox="0 0 50 50">
                                        <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"/>  </svg>
                                </a>
                            </div>
                        </div>

                        <div className="flex -mr-2 md:hidden">
                            <button
                                onClick={() => setState(!state)}
                                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="w-8 h-8"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>


                    {state && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <div
                                className="fixed left-0 top-0 z-50 bg-white h-full w-screen px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <div className="flex justify-end mr-8">
                                    <button
                                        onClick={() => setState(!state)}
                                        className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                        <svg width="20" height="20" fill="currentColor" className="w-8 h-8"
                                             viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
                                        </svg>
                                    </button>
                                </div>
                                <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                   href="/">
                                    Home
                                </a>
                                <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                   href="/projects">
                                    My Projects
                                </a>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </nav>
        </div>

    </>)
}
export default Header;
