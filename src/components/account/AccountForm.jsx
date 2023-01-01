const AccountForm = (props) => {
    const { data, title } = props;

    return (
        <>
            <div className="border border-4 rounded-4 p-5 m-5">
                <div className="fs-3 border-bottom border-2 border-dark d-inline">{title}</div>
                <form>
                    {Object.entries(data).map(([key, value]) => {
                        return (
                            <fieldset disabled className="my-3">
                                <label className="form-label">
                                    {key[0].toUpperCase() + key.slice(1)}
                                </label>
                                <input type="text" className="form-control" defaultValue={value} />
                            </fieldset>
                        );
                    })}
                </form>
            </div>
        </>
    );
};

export default AccountForm;
