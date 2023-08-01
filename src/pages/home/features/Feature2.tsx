import React from "react";
import {motion} from "framer-motion";
import {listItemVariants} from "../Home";

const Feature2: React.FC = () => {

    return (
        <section>
            <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
                <div className="flex flex-wrap -mx-8">
                    <div className="w-full px-8 lg:w-1/2">
                        <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                            <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">Features
                            </h2>
                            <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">

                                <p>
                                    Modern websites require a set of essential features to meet the expectations of
                                    users
                                    and deliver an exceptional user experience.
                                </p> <br/>
                                <p>
                                    These must-have features empower modern websites to deliver a seamless, engaging,
                                    and
                                    user-centric experience, leading to higher user satisfaction, increased conversions,
                                    and
                                    improved brand reputation.
                                </p> <br/>
                                <p className="font-bold">
                                    When I develop websites, these three features are my top priorities.
                                </p>


                            </p>
                            {/*<div className="w-full md:w-1/3">*/}
                            {/*    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">*/}
                            {/*        See more*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="w-full px-8 lg:w-1/2">
                        <ul className="space-y-12">

                            <motion.div

                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{amount: 0.8}}
                            >
                                <motion.li className="flex -mx-4" variants={listItemVariants}>

                                    <div className="px-4">
                                        <span
                                            className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-red-50">
                                            1
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold dark:text-white">
                                            Responsive
                                        </h3>
                                        <p className="leading-loose text-gray-500 dark:text-gray-300">
                                            Responsive design is vital as it ensures websites adapt seamlessly to
                                            different devices and screen sizes. Users expect a consistent, user-friendly
                                            experience regardless of whether they access the site on a desktop, tablet,
                                            or smartphone.
                                        </p>
                                    </div>
                                </motion.li>
                            </motion.div>

                            <motion.div

                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{amount: 0.8}}
                            >
                                <motion.li className="flex -mx-4" variants={listItemVariants}>
                                    <div className="px-4">
                                        <span
                                            className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-red-50">
                                            2
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold dark:text-white">
                                            Reactive
                                        </h3>
                                        <p className="leading-loose text-gray-500 dark:text-gray-300">
                                            React and Vue.js create websites that respond quickly, feel smooth to use,
                                            and adapt to your needs. They ensure interactive and engaging experiences,
                                            easy updates, and fast loading times.
                                        </p>
                                    </div>
                                </motion.li>
                            </motion.div>
                            <motion.div

                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{amount: 0.8}}
                            >
                                <motion.li className="flex -mx-4" variants={listItemVariants}>

                                    <div className="px-4">
                                        <span
                                            className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-red-50">
                                            3
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold dark:text-white">
                                            Visuals
                                        </h3>
                                        <p className="leading-loose text-gray-500 dark:text-gray-300">
                                            Visuals are essential in web design as they grab users' attention,
                                            communicate information effectively, and enhance the overall aesthetics.
                                            Additionally, proper visuals helps reinforce brand identity.
                                        </p>
                                    </div>
                                </motion.li>
                            </motion.div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature2
