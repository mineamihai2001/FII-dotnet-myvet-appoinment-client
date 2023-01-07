import { Outlet } from "react-router-dom";

const RightPane = (props) => {
    const { context } = props;
    return (
        <div className="w-50 ps-3">
            <Outlet context={context} />
        </div>
    );
};

export default RightPane;
