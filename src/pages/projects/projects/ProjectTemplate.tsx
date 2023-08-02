import {NavLink} from "react-router-dom";
import React from "react";

export interface IProjectTemplateProps {
    Image?: string,
    Video?: string,
    HREF?: string,
    Title: string,
    Date?: string,
    Tag: string,
    TagIcon: JSX.Element,
    TagColor: string,
    Description: string | JSX.Element,
}

const ProjectTemplate = (props: IProjectTemplateProps) => {
    return (
        <div className="mb-12 lg:mb-0">
            <div
                className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="light">
                {props.Image ? (
                    <>
                        <img src={props.Image} className="w-full" alt={props.Title + ' Image'}/>
                        <div
                            className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">

                        </div>
                    </>
                ) : (
                    <iframe className="w-full" title={props.Title}
                            src={props.Video}>
                    </iframe>
                )}


            </div>
            <div className="mb-4 flex justify-between">
                <h5 className= "text-lg font-bold text-start">{props.Title}</h5>
                <h4 className="text-lg text-neutral-500  text-end">{props.Date}</h4>
            </div>


            <div className="mb-4 flex items-center  text-sm font-medium  justify-start">
                {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">*/}
                {/*    <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />*/}
                {/*    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />*/}
                {/*</svg>*/}
                <div className={"w-5 h-5 mr-2"}>
                    {props.TagIcon}
                </div>
                <span className={props.TagColor}>
                      {props.Tag}
                </span>


            </div>
            <p className="text-neutral-500 dark:text-neutral-300 text-start">
                {props.Description}
            </p>
            {props.HREF && (
                <a className="mb-2 mt-2 inline-block rounded bg-primary px-6 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                   data-te-ripple-init="" data-te-ripple-color="light" href={props.HREF} target="_blank" role="button" rel="noreferrer">More Info</a>
            )}

        </div>
    )
}
export default ProjectTemplate;
