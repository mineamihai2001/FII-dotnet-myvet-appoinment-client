/**
 * @function validate
 * Check if each input marked as mandatory has been filled
 * @returns {boolean}
 */
const validate = () => {
    const mandatory = [...document.querySelectorAll(".mandatory")];
    let valid = true;
    mandatory.forEach((input) => {
        if (typeof input.value === "undefined" || input.value === "" || input.value === null) {
            input.classList.add("border", "border-danger");
            valid = false;
        }
    });
    return valid;
};

export default (props) => {
    const { title, inputs, buttons, action } = props?.data;

    return (
        <>
            <h3>{title}</h3>
            <form>
                {inputs.map((input) => {
                    return (
                        <>
                            <div className="mb-3">
                                <label for={input.id} className="form-label">
                                    {input.label}
                                </label>
                                <input
                                    onChange={() => {
                                        document
                                            .getElementById(`${input.id}`)
                                            .classList.remove(("border", "border-danger"));
                                    }}
                                    id={input.id}
                                    type={input.type}
                                    className={
                                        (typeof input?.className !== "undefined"
                                            ? input.className
                                            : "") +
                                        " form-control " +
                                        (typeof input?.mandatory !== "undefined" ? "mandatory" : "")
                                    }
                                />
                            </div>
                        </>
                    );
                })}
                <div className="mb-3 form-check">
                </div>
                {buttons.map((button) => {
                    return (
                        <button
                            type={button?.type}
                            onClick={() =>
                                action(
                                    validate(),
                                    Object.fromEntries(
                                        inputs.map((input) => {
                                            return [
                                                input.id,
                                                document.getElementById(input.id).value,
                                            ];
                                        })
                                    )
                                )
                            }
                            className="btn btn-dark"
                        >
                            {button?.text}
                        </button>
                    );
                })}
            </form>
        </>
    );
};
