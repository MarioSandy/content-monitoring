import { useEffect, useState } from "react";
import menus from "../data/menus";
import {ReactComponent as HamburgerMenuSVG} from "../assets/svg/reshot-icon-menu-D6U5PY3TJK.svg";
const Sidebar = () => {
    const [collapse, setCollapse] =  useState(false);

    useEffect(() => {
        console.log(collapse);
    }, [collapse]);
    return (
        <div className={`
                        overflow-hidden py-4 px-3 bg-gradient-to-br from-gray-100 to-gray-300 h-screen
                        ${collapse ? 'w-16' : 'w-64'} transition-width duration-150 flex flex-col
                       `}>
            <div className="flex gap-3 border-solid border-b-[1.5px] border-gray-400 pb-3">
                <div className="bg-white rounded-md w-10 h-10">

                </div>
                <div className={`${collapse && 'hidden'}`}>
                    <p className="text-md font-bold">BNFC</p>
                    <p className="text-xs">Description</p>
                </div>
            </div>
            <div className="h-full overflow-y-auto scrollbar-hide">
                <ul>
                    {
                        menus.map(menu => (
                            <li className="py-3 flex items-center gap-2">
                                <div className="bg-white rounded-md w-10 h-10">

                                </div>
                                <div className={`rounded-lg hover:bg-gray-300 px-2 py-2 grow ${collapse && 'hidden'}`}>
                                    <span class="text-sm text-gray-600 font-medium">{menu.name}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="pt-3 border-solid border-t-[1.5px] border-gray-400">
                <div className="bg-white rounded-md w-10 h-10"
                    onClick={() => setCollapse(prev => !prev)}>
                    <HamburgerMenuSVG fill="text-gray-600" />
                </div>
            </div>
        </div>
    )
}

{/* <div className="rounded-md bg-[center] bg-contain bg-no-repeat w-4 
                    text-gray-600 bg-gray-300 py-4 px-4"
         onClick={() => setCollapse(prev => !prev)}
         style={{backgroundImage: `url(${hamburgerMenuSVG})`}}>
    </div> */}

export default Sidebar;