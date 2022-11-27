import config from "../config/config.js";

/**
 * Fetch Table Data
 * @param {string} type TableName
 * @returns
 */
export function fetchData(type) {
    const url = config.__server.domain + config.__server.endpoint + "/" + type;
    return fetch(url, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

/**
 * Add Table Data
 * @param {string} type Table Name
 * @param {Object} data 
 * @returns 
 */
export function postData(type, data) {
    const url = config.__server.domain + config.__server.endpoint + "/" + type;
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}
