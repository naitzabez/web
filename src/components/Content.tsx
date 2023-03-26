import { Component } from 'solid-js';

const Content: Component = () => {

    return (
        <div class="w-full h-full flex flex-row flex-wrap justify-evenly overflow-x-hidden overflow-y-scroll scrollbar sm:scrollbar-thin scrollbar-track-transparent hover:scrollbar-thumb-slate-800">
            <div class="w-2/12 sm:w-1/12 bg-transparent ml-1 sm:ml-2"></div>
            <div class="w-6/12 sm:w-9/12 bg-transparent border-slate-500 border-r border-l">
                <div class="m-1 mb-0 w-fill h-96 bg-black bg-opacity-50"></div>
                <div class="m-1 mb-0 w-fill h-96 bg-black bg-opacity-50"></div>
                <div class="m-1 mb-0 w-fill h-96 bg-black bg-opacity-50"></div>
                <div class="m-1 mb-0 w-fill h-96 bg-black bg-opacity-50"></div>
            </div>
            <div class="w-2/12 sm:w-1/12 bg-transparent"></div>
        </div>
    )
}

export default Content;