import ProjectTemplate from "./projects/ProjectTemplate";
import React from "react";

const ProjectsScreen = () => {
    return (
        <>
            <div className="px-6 py-6 lg:max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold">Projects</h1>
                <span className="text-xl font-normal">These are some of my projects from the past 2-3 years. These are the ones I'm most proud of.</span>
            </div>
            <div className="px-6 lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/*start of projects*/}
                <ProjectTemplate Date="7/20/2023" Image={"https://i.imgur.com/hzgJUEQ.png"}
                                 Title={"Portfolio"}
                                 HREF="https://github.com/BradenJ6164/bradenPortfolio"
                                 Tag={"Website"} TagIcon={(
                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 1792 1792"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>

                )} TagColor={"text-red-500"}
                                 Description={ (<span>The portfolio you're looking at right now, made with React, Tailwind CSS, and Framer Motion. The source code is available on github with the link below.</span>)}/>


                <ProjectTemplate Date="8/5/2022" Image={"https://i.imgur.com/W4IH6Eq.png"}
                                 Title={"RBxConnect"}
                                 HREF="https://www.techology.com/routerbox"
                                 Tag={"Business Application"} TagIcon={(
                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 50 50"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 25.515625 14 C 21.549174 14 18.120582 15.857659 16.591797 18.701172 C 13.203884 20.107233 11.072181 23.945403 12.417969 27.960938 C 13.061811 29.882024 14.485727 31.487235 16.349609 32.316406 C 18.364382 33.212561 20.275416 32.872337 21.945312 32.177734 L 22.328125 35.96875 A 1.0001 1.0001 0 0 0 24.138672 36.449219 L 27.699219 31.441406 C 29.601616 31.33758 31.140135 30.2342 32.119141 28.724609 C 32.155391 28.726109 32.154822 28.732422 32.195312 28.732422 C 35.388036 28.732422 37.998047 26.122411 37.998047 22.929688 C 37.999147 20.203485 36.072613 17.967944 33.525391 17.357422 C 31.731523 15.29478 28.819301 14 25.515625 14 z M 25.515625 16 C 28.406489 16 30.886695 17.19695 32.199219 18.833984 A 1.0001 1.0001 0 0 0 32.816406 19.195312 C 34.6229 19.492694 35.998842 21.03379 35.998047 22.927734 A 1.0001 1.0001 0 0 0 35.998047 22.929688 C 35.998047 25.040964 34.30659 26.732422 32.195312 26.732422 C 32.173642 26.732422 32.065413 26.712506 31.837891 26.691406 A 1.0001 1.0001 0 0 0 30.837891 27.267578 C 30.234188 28.575732 28.930163 29.486328 27.392578 29.486328 C 27.471418 29.486328 27.420838 29.475374 27.220703 29.464844 A 1.0001 1.0001 0 0 0 26.353516 29.884766 L 24.050781 33.121094 L 23.806641 30.707031 A 1.0001 1.0001 0 0 0 22.271484 29.966797 C 20.829026 30.895527 19.0601 31.332492 17.162109 30.488281 C 15.833992 29.897452 14.78061 28.717085 14.314453 27.326172 C 13.245779 24.137483 14.974564 21.296673 17.607422 20.380859 A 1.0001 1.0001 0 0 0 18.183594 19.863281 C 19.189228 17.726365 22.044704 16 25.515625 16 z"/>
                    </svg>

                )} TagColor={"text-red-500"}
                                 Description={ (<span>RBxConnect is a propreitary interface for controlling Routerbox routers by <a
                                     className="text-primary underline" href='https://techology.com' target='_blank'
                                     rel="noreferrer">Techology</a>. I created this with Vue.JS and Vuetify UI. It has many configuration pages and dashboards. It also includes fully functional IOS/Android app using Capacitor.JS as a translation, all in the same codebase.</span>)}/>


                {/*start of roblox projects*/}
                <ProjectTemplate Date="3/20/2020" Video={"https://youtube.com/embed/4Htz0KBjKjw"}
                                 HREF={"https://links.bajaslab.com/scp_architect"} Title={"SCP Architect"}
                                 Tag={"Roblox Game"} TagIcon={(
                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 30 30"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.269,2.936L1.503,21.293c-0.278,1.069,0.364,2.161,1.433,2.438l18.357,4.766	c1.069,0.278,2.161-0.364,2.438-1.433l4.766-18.357c0.278-1.069-0.364-2.161-1.433-2.438L8.707,1.503	C7.638,1.225,6.546,1.867,6.269,2.936z M13.411,12.296l4.293,1.115l-1.115,4.293l-4.293-1.115L13.411,12.296z"/>
                    </svg>
                )} TagColor={"text-red-500"}
                                 Description={"A Roblox building-style simulator game, based on the SCP Creepy Pasta. SCP Architect is one of my first games to ever be put into production. While the current state has an rather old code base, a new version (SCP Architect X) will be coming soon."}/>

                <ProjectTemplate Date="11/5/2022"
                                 Image={"https://tr.rbxcdn.com/1b6585d3e95cd1fb5c7459d15e00e1e8/768/432/Image/Png"}
                                 HREF={"https://links.bajaslab.com/fruitislands"} Title={"Fruit Islands"}
                                 Tag={"Roblox Game"} TagIcon={(
                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 30 30"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.269,2.936L1.503,21.293c-0.278,1.069,0.364,2.161,1.433,2.438l18.357,4.766	c1.069,0.278,2.161-0.364,2.438-1.433l4.766-18.357c0.278-1.069-0.364-2.161-1.433-2.438L8.707,1.503	C7.638,1.225,6.546,1.867,6.269,2.936z M13.411,12.296l4.293,1.115l-1.115,4.293l-4.293-1.115L13.411,12.296z"/>
                    </svg>
                )} TagColor={"text-red-500"} Description={
                    (<span>While this game has not yet made it to production, it is an excellent demonstration of new technologies such as <a
                        className="text-primary underline" href='https://roblox.github.io/roact/' target='_blank'
                        rel="noreferrer">Roact</a> (based on React) and <a className="text-primary underline"
                                                                           href='https://roblox-ts.com/docs/'
                                                                           target='_blank' rel="noreferrer">Roblox Typescript</a> development.</span>)
                }/>
                <ProjectTemplate Date="11/23/2020"
                                 Image={"https://tr.rbxcdn.com/bf80e565b5f48b2481a49e9bbc6def49/576/324/Image/Png"}
                                 HREF={"https://github.com/BradenJ6164/Area_39_Source"} Title={"Area 39"}
                                 Tag={"Roblox Game"} TagIcon={(
                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 30 30"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.269,2.936L1.503,21.293c-0.278,1.069,0.364,2.161,1.433,2.438l18.357,4.766	c1.069,0.278,2.161-0.364,2.438-1.433l4.766-18.357c0.278-1.069-0.364-2.161-1.433-2.438L8.707,1.503	C7.638,1.225,6.546,1.867,6.269,2.936z M13.411,12.296l4.293,1.115l-1.115,4.293l-4.293-1.115L13.411,12.296z"/>
                    </svg>
                )} TagColor={"text-red-500"} Description={
                    (
                        <span>One of my first Roblox games programmed, Area 39 was put into production for a few months. It had strong revenue and numbers. It was one of my first projects to use an external editor using <a
                            className="text-primary underline" href="https://rojo.space/" target="_blank" rel="noreferrer">Rojo</a>. This project is opensource on github.</span>)
                }/>

                {/*start of other projects*/}


            </div>
            <div className="px-6 py-6 lg:max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold">Legacy Projects</h1>
                <span className="text-xl font-normal">These are very old projects, but I've included them to demonstrate my progression over the years.</span>
                <p className="text-neutral-600"> Some of these projects, have lost sourcecode. I have <a href="https:/wayback.archive.org"   className="text-primary underline" target="_blank" rel="noreferrer">wayback machine</a> to thank for getting some screenshots of old work.</p>
            </div>

            <div className="px-6 lg:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/*legacy section*/}
                <ProjectTemplate Date="11/1/2019"
                                 Image={"https://i.imgur.com/QDJNqN6.jpg"}
                                 HREF={"https://h3ufit.com"} Title={"H3U Fit"}
                                 Tag={"Business Website"} TagIcon={(


                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 1792 1792"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>
                )} TagColor={"text-red-500"} Description={
                    (
                        <span>One of my older websites made for a client, this was when I first starting to understand web development. It's using a template from HTML5 up.</span>)
                }/>
                <ProjectTemplate Date="1/09/2018"
                                 Image={"https://i.imgur.com/aR0Cshq.png"}
                                 HREF={"http://ifixflatroofs.com"} Title={"Durable Roofing Systems"}
                                 Tag={"Business Website"} TagIcon={(


                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 1792 1792"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>
                )} TagColor={"text-red-500"} Description={
                    (
                        <span>My very first website for a client, this website is also using a template from HTML 5 UP. </span>)
                }/>
                <ProjectTemplate Date="12/20/2019"
                                 Image={"https://i.imgur.com/gSJyuQ0.png"}
                                 Title={"Baja's Lab Roblox Admin Panel"}
                                 Tag={"Experiment"} TagIcon={(


                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 1792 1792"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>
                )} TagColor={"text-red-500"} Description={
                    (
                        <span>This was a project I never put into production, it was created in MVC Asp.net + SQL Server. Using websockets it was able to collect realtime data from Roblox games and had the ability to shutdown servers and push updates. </span>)
                }/>
                <ProjectTemplate Date="12/20/2017"
                                 Image={"https://i.imgur.com/1hzut6l.png"}
                                  Title={"Baja's Lab Forums"}
                                 Tag={"Experiment"} TagIcon={(


                    <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 1792 1792"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>
                )} TagColor={"text-red-500"} Description={
                    (
                        <span>Back in 2017-2018, I had a big interest in forum software and setting up my own forums site. This was one of my first websites, the forum is powered by <a   className="text-primary underline" href="https://mybb.com" target="_blank" rel="noreferrer">MyBB</a> written in PHP. </span>)
                }/>
            </div>
        </>

    )
}
export default ProjectsScreen;
