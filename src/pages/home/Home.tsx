import {AnimatePresence, motion, useScroll, useTransform, useViewportScroll, Variants} from "framer-motion";
import React, {useEffect, useState} from "react";
import {Feature1} from "./features";
import Feature2 from "./features/Feature2";

const rotatingPhrases = [
    'websites!',
    'applications!',
    'games!',
    // Add more phrases here
];

export const listItemVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};
export const featureItemVariants: Variants = {
    offscreenRight: {
        x: 1500
    },
    offscreenLeft: {
        x: -1500
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
    }
};

const Jumbotron: React.FC = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const [hasScrolled, setHasScrolled] = useState(false);

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
    return (

        <div className="bg-gray dark:bg-gray-800 overflow-hidden h-[100vh] ">
            <div className="flex justify-center items-center h-full">

                <div>


                    <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl block">
                        Hi, I'm Braden.
                    </h2>
                    <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl block">
                        I create&nbsp;
                        <AnimatePresence>
                            <motion.span className="text-red-500 "
                                         key={currentPhraseIndex}
                                         initial={{position: 'relative', opacity: 0, scale: 0.8}}
                                         animate={{position: 'relative', opacity: 1, scale: 1}}
                                         exit={{position: 'absolute', opacity: 0, scale: 0.8}}
                                         transition={{duration: 0.25}}
                                         style={{
                                             position: "absolute"
                                         }}


                            >
                                {rotatingPhrases[currentPhraseIndex]}
                            </motion.span>
                        </AnimatePresence>


                    </h2>
                </div>
            </div>
            <AnimatePresence>


                {!hasScrolled && (
                    <motion.div className="overflow-hidden absolute w-full bottom-0 mb-5 flex justify-center"
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{ opacity: 1, scale: 1}}
                                exit={{ opacity: 0, scale: 0.8}}
                                transition={{duration: 0.5}}
                    >
                        <p className="font-bold ">Scroll Down
                        for More</p></motion.div>
                )}
            </AnimatePresence>
            {/*<img src="/images/undraw_developer_activity_re_39tg.svg"*/}
            {/*     className="absolute  top-0 right-4 h-full  w-1/2 lg:block"/>*/}
        </div>

    );
}

const HomeScreen: React.FC = () => {

    return (
        <div className="overflow-hidden">
            <Jumbotron/>

            <motion.div

                initial="offscreenRight"
                whileInView="onscreen"
                viewport={{amount: 0.25}}
            >

                <motion.div variants={featureItemVariants}>
                    <Feature1/>
                </motion.div>
            </motion.div>


            <motion.div

                initial="offscreenLeft"
                whileInView="onscreen"
                viewport={{amount: 0.25}}
            >

                <motion.div variants={featureItemVariants}>
                    <Feature2/>
                </motion.div>
            </motion.div>


        </div>
    )
}
export default HomeScreen;
