import { Outlet } from "react-router-dom";

const RightPane = () => {
    return (
        <div className="w-50 ps-3">
            <Outlet />
        </div>
    );
};

export default RightPane;
