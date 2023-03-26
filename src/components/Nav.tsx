import { Component } from 'solid-js';

const Nav: Component = () => {
    var btn_css:string ="h-full w-h rounded transition duration-300 ease-in-out hover:bg-slate-700 bg-slate-800 border border-black mr-2";
    var svg_css:string ="h-full w-h p-2";
    const click = () => {console.log('boop')};
    return (
        <nav class= "flex flex-col sticky h-20 w-screen bg-slate-900 pl-2 pr-2 pt-5 pb-5 border-slate-500 border-b">
            <div class="flex justify-center w-full h-full visible sm:invisible sm:w-0 sm:h-0">
                <div class="flex w-3/12 h-full"></div>
                <div class="flex w-3/12 h-full">
                    <button class={btn_css} onClick={click}>
                        <svg class={svg_css} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9E0000">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>
                    </button>
                    <input class="text-prusa placeholder-gray-500 p-3 bg-slate-800 focus:bg-slate-700 hover:bg-slate-700 transition duration-300 ease-in-out h-full w-44  outline-none border border-black rounded-3xl "placeholder="Sök.."></input>
                </div>
                <div class="flex w-32 h-full justify-center">
                    <button class="" onClick={click}>
                        <label class="w-full h-full text-center text-slate-400 font-thin text-4xl transition duration-300 ease-in-out  hover:text-prusa" >S V A Y</label>
                    </button>
                </div>
                <div class="flex w-3/12 h-full justify-end ">
                    <button class={btn_css } onClick={click}>
                        <svg class={svg_css}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9E0000">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </button>
                    <button class={btn_css} onClick={click}>
                        <svg class={svg_css} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9E0000">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>
                </div>
                <div class="flex w-3/12 h-full"></div>
            </div>
            <div class="flex justify-center sm:visible invisible w-full h-full ">
                <div class="flex w-2/12 h-full"></div>
                <div class="flex w-8/12 h-full justify-center">
                    <button class="" onClick={click}>
                        <label class="w-full h-full text-center text-slate-400  font-thin text-4xl" >S V A Y</label>
                    </button>
                </div>
                <div class="lex w-2/12 h-full"></div>
            </div>
        </nav>
    )
}


export default Nav;

