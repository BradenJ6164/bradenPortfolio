import {motion} from "framer-motion";
import React from "react";
import {featureItemVariants} from "../Home";

const Feature1: React.FC = () => {
    return (

        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex pb-10">
            <motion.div
                className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4"
                initial="offscreenRight"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.25}}
            >

                <motion.div
                    className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
                    variants={featureItemVariants}>

                    <div className="flex-shrink-0">
                        <div
                            className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        Websites
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        Using the latest technologies such as React and Vue.
                    </p>

                </motion.div>
            </motion.div>
            <motion.div
                className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4"
                initial="offscreenRight"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.25}}
            >

                <motion.div
                    className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
                    variants={featureItemVariants}>
                    <div className="flex-shrink-0">
                        <div
                            className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 50 50"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 25.515625 14 C 21.549174 14 18.120582 15.857659 16.591797 18.701172 C 13.203884 20.107233 11.072181 23.945403 12.417969 27.960938 C 13.061811 29.882024 14.485727 31.487235 16.349609 32.316406 C 18.364382 33.212561 20.275416 32.872337 21.945312 32.177734 L 22.328125 35.96875 A 1.0001 1.0001 0 0 0 24.138672 36.449219 L 27.699219 31.441406 C 29.601616 31.33758 31.140135 30.2342 32.119141 28.724609 C 32.155391 28.726109 32.154822 28.732422 32.195312 28.732422 C 35.388036 28.732422 37.998047 26.122411 37.998047 22.929688 C 37.999147 20.203485 36.072613 17.967944 33.525391 17.357422 C 31.731523 15.29478 28.819301 14 25.515625 14 z M 25.515625 16 C 28.406489 16 30.886695 17.19695 32.199219 18.833984 A 1.0001 1.0001 0 0 0 32.816406 19.195312 C 34.6229 19.492694 35.998842 21.03379 35.998047 22.927734 A 1.0001 1.0001 0 0 0 35.998047 22.929688 C 35.998047 25.040964 34.30659 26.732422 32.195312 26.732422 C 32.173642 26.732422 32.065413 26.712506 31.837891 26.691406 A 1.0001 1.0001 0 0 0 30.837891 27.267578 C 30.234188 28.575732 28.930163 29.486328 27.392578 29.486328 C 27.471418 29.486328 27.420838 29.475374 27.220703 29.464844 A 1.0001 1.0001 0 0 0 26.353516 29.884766 L 24.050781 33.121094 L 23.806641 30.707031 A 1.0001 1.0001 0 0 0 22.271484 29.966797 C 20.829026 30.895527 19.0601 31.332492 17.162109 30.488281 C 15.833992 29.897452 14.78061 28.717085 14.314453 27.326172 C 13.245779 24.137483 14.974564 21.296673 17.607422 20.380859 A 1.0001 1.0001 0 0 0 18.183594 19.863281 C 19.189228 17.726365 22.044704 16 25.515625 16 z"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        Applications
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        Mobile apps, or web apps for any screen using Vue, React, and Capacitor JS.
                    </p>

                </motion.div>
            </motion.div>
            <motion.div
                className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4"
                initial="offscreenRight"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.25}}
            >

                <motion.div
                    className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
                    variants={featureItemVariants}>
                    <div className="flex-shrink-0">
                        <div
                            className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 30 30"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.269,2.936L1.503,21.293c-0.278,1.069,0.364,2.161,1.433,2.438l18.357,4.766	c1.069,0.278,2.161-0.364,2.438-1.433l4.766-18.357c0.278-1.069-0.364-2.161-1.433-2.438L8.707,1.503	C7.638,1.225,6.546,1.867,6.269,2.936z M13.411,12.296l4.293,1.115l-1.115,4.293l-4.293-1.115L13.411,12.296z"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        Games
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        Leveraging the ROBLOX platform to create engaging experiences using LUA and Typescript.
                    </p>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default Feature1
