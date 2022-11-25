import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
    const { data } = props;

    return (
        <>
            <tr>
                {Object.entries(data).map(([key, value]) => {
                    return key === "id" ? <th>#{value}</th> : <td>{value}</td>;
                })}
                <td className="d-flex justify-content-center align-items-center">
                    <a style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faSquareMinus} className="text-danger" size="xl" />
                    </a>
                </td>
            </tr>
        </>
    );
};
