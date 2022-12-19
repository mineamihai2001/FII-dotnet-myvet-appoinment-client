/**
 * Request user login
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>}
 */
export const login = (email, password) => {
    console.log(email, password);
    // TODO: implement server
    return Promise.resolve(true);
};

/**
 * Request user register
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>}
*/
export const register = (email, password) => {
    console.log(email, password);
    // TODO: implement server
    return Promise.resolve(true);
};
