import config from "../../config/config.js";

export default (props) => {
    const { name, inputs } = props;
    return (
        <>
            {inputs.map((cell, index) => {
                if (index === 0) return <th className="d-flex justify-content-center">#</th>;
                return (
                    <td scope="col">
                        <input
                            id={config.tables[name].disabled.includes(cell) ? "" : cell}
                            className={
                                "form-control w-75 " +
                                (config.tables[name].disabled.includes(cell)
                                    ? ""
                                    : " row-form-input")
                            }
                            disabled={config.tables[name].disabled.includes(cell) ? true : ""}
                            placeholder={cell}
                            value={typeof cell.value === "undefined" ? "" : cell.value}
                        />
                    </td>
                );
            })}
        </>
    );
};
