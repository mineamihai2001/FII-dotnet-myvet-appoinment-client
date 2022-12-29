import { useParams } from "react-router-dom";
import { appointments } from "../../data/mocks";

const CardDetails = () => {
    const { appointmentId } = useParams();

    return (
        <>
            <div className="p-5 border border-2 rounded-3">
                <span className="fs-3 fw-bolder">Appointment #{appointmentId}</span>
                <div className="fs-5 mt-3">
                    {Object.entries(appointments[parseInt(appointmentId)]).map(([key, value]) => {
                        return (
                            <div className="row">
                                <div className="col-2 fw-semibold">
                                    {key[0].toUpperCase() + key.slice(1)}:
                                </div>
                                <div className="col">{value}</div>
                            </div>
                        );
                    })}
                    <div className="mt-3 row">
                        <span className="col-12 fw-bold">Description:</span>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            condimentum hendrerit eleifend. Suspendisse ullamcorper nec erat non
                            volutpat. Donec magna risus, sagittis nec tellus a, congue mattis lacus.
                            Cras laoreet facilisis quam id aliquam. Mauris nisi arcu, molestie id
                            tempus scelerisque, elementum ut massa. Fusce rhoncus sollicitudin
                            gravida. Phasellus mollis, turpis et eleifend fermentum, urna est
                            egestas nisi, quis malesuada lectus ligula sed mauris. Suspendisse eu
                            pellentesque orci, varius lacinia nunc.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;
