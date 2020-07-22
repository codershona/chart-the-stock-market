const request = requiure('superagent');




module.exports = (app) => {

  app.post('/api/stock/portfolio', function (req, res, next) {

    const apiKey = 'demo';
    
     // Assuming looking up the user:

     // Retrieve ticker symbols:

     const tickers = ['MSFT'];

     let completed = 0;

     // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo
     
     for (let i =0; i < tickers.length; i += 1) {


      request
   // .get('/search')
   .get('https://www.alphavantage.co/query')
   .query({ 'function': 'TIME_SERIES_DAILY' })
   .query({ apikey: apiKey })
   .query({ symbol: ticker })
   .then((res) => {
    completed += 1;
    // if (completed === i) {
       if (completed === tickers.length) {

      // All tickers have finished their requests

    }

    // completed += 1;

     });

  }

//  working:

  });


};