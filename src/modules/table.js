import config from "../config/config.js";

/**
 * Fetch Table Data
 * @param {string} type TableName
 * @returns {Promise<Object>} fetch response
 */
export function fetchData(type) {
    const url = config.__server.domain + config.__server.endpoint + "/" + type;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

/**
 * Add Table Data
 * @param {string} type Table Name
 * @param {Object} data
 * @returns {Promise<Object>} fetch response
 */
export function postData(type, data) {
    const url = config.__server.domain + config.__server.endpoint + "/" + type;
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

/**
 * Delete a row from a Table
 * @param {string} type Table Name
 * @param {uuid} uuid The id of the object
 * @returns {Promise<Object>} fetch response
 */
export function deleteData(type, uuid) {
    const url = `${config.__server.domain}${config.__server.endpoint}/${type}/${uuid}`;
    return fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

/**
 * Update a entity
 * @param {string} type Table Name
 * @param {Object} row DB Entity
 * @returns {Promise<Object>} fetch response
 */
export function updateData(type, row) {
    const url = `${config.__server.domain}${config.__server.endpoint}/${type}`;
    return fetch(url, {
        method: "PUT",
        body: JSON.stringify(row),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}
