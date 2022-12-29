import LeftPane from "../components/appointments/LeftPane";
import RightPane from "../components/appointments/RightPane";

export default () => {
    return (
        <>
            <div className="p-5 d-flex">
                <LeftPane />
                <RightPane />
            </div>
        </>
    );
};
