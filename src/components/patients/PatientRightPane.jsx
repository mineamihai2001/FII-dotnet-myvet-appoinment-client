import { Outlet } from "react-router-dom";

const PatientRightPane = () => {
    return (
        <div className="w-50 ps-3">
            <Outlet />
        </div>
    );
};

export default PatientRightPane;
