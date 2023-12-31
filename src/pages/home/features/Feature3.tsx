import React from "react";
import {motion} from "framer-motion";
import {listItemVariants} from "../Home";

const Feature3: React.FC = () => {

    return (
        <section className="w-full dark bg-gray-900  dark:bg-white pt-14">
            <div className="container p-4 mx-auto max-w-7xl sm:p-6 lg:p-8 flex flex-wrap">
                <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
                    <p className="mb-6 font-bold uppercase text-primary dark:text-primary-400">
                        Technologies
                    </p>
                    <h2 className="mb-6 text-3xl font-bold text-neutral-500 dark:text-neutral-300">
                        My Stack
                    </h2>

                    <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                        All developers have a "toolbox" of tools to create and design websites. These are my tools I use
                        to create websites, applications, and more.
                    </p>
                </div>

                <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                            <div className="flex">
                                <div className="shrink-0">
                                    <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="-11.5 -10.23174 23 20.46348"
                                             className="h-6 w-6">
                                            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                                            <g stroke="#61dafb" stroke-width="1" fill="none">
                                                <ellipse rx="11" ry="4.2"/>
                                                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 grow">
                                    <p className="mb-3 font-bold text-neutral-500 dark:text-neutral-300">React</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        The library for web and native user interfaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                            <div className="flex">
                                <div className="shrink-0">
                                    <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 261.76 226.69"
                                             className="h-6 w-6">
                                            <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                                                <g transform="translate(178.06 235.01)">
                                                    <path
                                                        d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                                                        fill="#41b883"/>
                                                </g>
                                                <g transform="translate(178.06 235.01)">
                                                    <path
                                                        d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                                                        fill="#34495e"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 grow">
                                    <p className="mb-3 font-bold text-neutral-500 dark:text-neutral-300">Vue JS</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        An approachable, performant and versatile framework for building web user
                                        interfaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                            <div className="flex">
                                <div className="shrink-0">
                                    <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"
                                             className="h-6 w-6">
                                            <g clipPath="url(#prefix__clip0)">
                                                <path fill="#38bdf8" fillRule="evenodd"
                                                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                                                      clipRule="evenodd"/>
                                            </g>
                                            <defs>
                                                <clipPath id="prefix__clip0">
                                                    <path fill="#fff" d="M0 0h54v32.4H0z"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 grow">
                                    <p className="mb-3 font-bold text-neutral-500 dark:text-neutral-300">Tailwind CSS</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        Rapidly build modern websites without ever leaving your HTML.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
                            <div className="flex">
                                <div className="shrink-0">
                                    <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512"

                                             className="h-6 w-6">
                                            <rect fill="#3178c6" height="512" rx="50" width="512"/>
                                            <rect fill="#3178c6" height="512" rx="50" width="512"/>
                                            <path clipRule="evenodd"
                                                  d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                                                  fill="#fff" fillRule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 grow">
                                    <p className="mb-3 font-bold text-neutral-500 dark:text-neutral-300">Typescript</p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        TypeScript is JavaScript with syntax for types.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature3
