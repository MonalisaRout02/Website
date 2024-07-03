const axios = require('axios'); // Import Axios if using Node.js environment

const fetchMetalPrices = async () => {
    try {
        const response = await axios.get('https://api.metalpriceapi.com/v1/latest', {
            params: {
                api_key: 'eca13e98d68d84e301ed72ebdc1caf37',
                base: 'INR',
                currencies: 'XAU,XAG'
            }
        });

        const data = response.data;

        // Conversion factor: 1 troy ounce = 31.1035 grams
        const troyOunceToGram = 31.1035;

        const pricePerGramGoldInr = data.rates.INRXAU / troyOunceToGram;
        const pricePerGramSilverInr = data.rates.INRXAG / troyOunceToGram;

        console.log(`Gold (XAU) price per gram: ${pricePerGramGoldInr.toFixed(2)} INR`);
        console.log(`Silver (XAG) price per gram: ${pricePerGramSilverInr.toFixed(2)} INR`);

        // Optionally return the calculated prices or do further processing
        return {
            pricePerGramGoldInr,
            pricePerGramSilverInr
        };
    } catch (error) {
        console.error('Error fetching or calculating metal prices:', error.message);
        return null;
    }
};

// Usage example
fetchMetalPrices().then(prices => {
    // Handle the returned prices object if needed
    if (prices) {
        console.log('Prices fetched successfully:', prices);
    }
});
