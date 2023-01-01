import { appointments } from "../../data/mocks";
import Card from "./Card";
import { Link } from "react-router-dom";

const LeftPane = () => {
    return (
        <div className="w-50">
            <div className="row pe-5 ps-3">
                <label className="col-2 fs-6" for="startDate">
                    Select a date:
                </label>
                <input id="startDate" className="form-control col" type="date" />
                <div className="col-3">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            <span>or</span>
                        </div>
                        <Link to="/appointments" className="col btn btn-dark">
                            Create
                        </Link>
                    </div>
                </div>
            </div>
            <div className="overflow-scroll p-3 h-50">
                {appointments.map((appointment, index) => {
                    return <Card key={index} id={index} {...appointment} />;
                })}
            </div>
        </div>
    );
};

export default LeftPane;
