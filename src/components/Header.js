import { useState } from 'react';

const Header = () => {
    const [showMenuState, setShowMenuState] = useState(false);

    const getMenuElements = () => ['Home', 'New', 'Popular', 'Trending', 'Categories']
    .map((data,index)=>(<button key={index} className="active:text-orange-300">{data}</button>));

    return (
        <div className="flex justify-between items-center">
            <embed src="./icons/logo.svg" type="" />
            <div className="hidden text-gray-400 font-semibold lg:flex gap-6">
                {getMenuElements()}
            </div>
            <button onClick={()=> setShowMenuState(true)} className="lg:hidden">
                <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
            </button>

            <div className={`absolute bg-black bg-opacity-20 w-full h-full top-0 right-0 flex justify-end z-10
                ease-in-out duration-300
                ${ showMenuState  ? 'visible' : 'invisible'}`}>
                    <div className={`bg-white w-[70%] p-5
                    ease-in-out duration-300
                    ${ showMenuState  ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex justify-end">
                            <button onClick={()=> setShowMenuState(false)}>
                                <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
                            </button>
                        </div>

                        <div className="flex flex-col items-start gap-5 mt-20 text-2xl font-semibold">
                            {getMenuElements()}
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default Header;