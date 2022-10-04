import Sidebar from "./Sidebar";
import Tabs from "./Tabs";

const MainLayout = () => {
    return (
        <div className="flex items-start">
            <Sidebar />
            <Tabs />
        </div>
    )
}

export default MainLayout;