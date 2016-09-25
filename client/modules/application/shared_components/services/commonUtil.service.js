
/**
 * This service helper functions to do repetitive tasks. 
 */
 
export default class CommonUtil {
    constructor() {
    }

    sortObjectArray(data, field, order='ascending') {
        if (data.length === 0) {
            return data;
        } else {
            if (isNaN(+data[0][field])) {
                if (order === 'ascending') {
                    return data.sort((a, b) => {
                        return a[field] < b[field] ? -1 : 1;
                    });
                } else {
                    return data.sort((a, b) => {
                        return a[field] > b[field] ? -1 : 1;
                    });
                }
            } else {
                if (order === 'ascending') {
                    return data.sort((a, b) => {
                        return a[field]-b[field];
                    });
                } else {
                    return data.sort((a, b) => {
                        return b[field]-a[field];
                    });
                }
            }
        }
    }
}