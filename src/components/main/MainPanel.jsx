import Table from "../table/Table";
import config from "../../config/config.js";

export default function () {
    
    return <>
        <div className="p-5 m-5">
            <Table data={config.tables.test}/>
        </div>
    </>;
}
