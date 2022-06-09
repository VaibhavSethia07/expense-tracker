const axios = require('axios');

export const getTransactions = async () => {
    try {
        const res = await axios.get('/api/v1/transactions');
        // The result will have a property called data, which will have the entire json object that we are returning from the controller
        console.log(res.data.data);

        return res.data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}