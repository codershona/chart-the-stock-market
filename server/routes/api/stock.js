module.exports = (app) => {

  app.post('/api/stock/portfolio', function (req, res, next) {
    
     // Assuming looking up the user:

     // Retrieve ticker symbols:

     const tickers = [];

     // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo

      request
   // .get('/search')
   .get('https://www.alphavantage.co/query')
   .query({ query: 'Manny' })
   .query({ range: '1..5' })
   .query({ order: 'desc' })
   .then(res => {

   });

//  working:

  });


};