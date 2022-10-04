import { useState } from "react";

const Tabs = () => {
    const [tabMenus, setTabMenus] = useState([
        {
            name: 'Ongoing',
            active: true
        },
        {
            name: 'Finished',
            active: false
        },
        {
            name: 'Checking',
            active: false
        }
    ]);
    const onChangeTab = (index) => {
        setTabMenus(prev => {
            let tabs = [
                {
                    name: 'Ongoing',
                    active: false
                },
                {
                    name: 'Finished',
                    active: false
                },
                {
                    name: 'Checking',
                    active: false
                }
            ];
            tabs[index] = {
                ...tabs[index],
                active: true
            };
            return tabs;
        })
    }
     return (
        <div className="bg-gray-200 p-2 rounded-lg">
            <div className="flex gap-3 text-xs font-medium">
                {
                    tabMenus.map((menu, index) => (
                        <div className={`p-2 ${menu.active ? 'bg-white' : ''} rounded-md cursor-pointer transition duration-450`}
                             onClick={() => onChangeTab(index)}>{menu.name}</div>
                    ))
                }
            </div>
        </div>
     )
}

export default Tabs;