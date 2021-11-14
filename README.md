# Sleek (Backend)

The Sleek backend is implemented as a node express server, that, when hit with a GET request will share the data in two ways.
1. by sending all the data over
2. by sending a range of data over (to support pagination). Suppose the data is 10,000 entries long. It doesn't make sense to send the user 10,000 deals in some situations, so the user client would request deals[0,10] first, and then deals[10,20] after and so on.

The Sleek backend is contains all the data in a map within the program. I wasn't sure if the way this data was collected was important, but as far as I'm concerned, whether this data comes from a table in a DB, or from short term memory on a server somewhere, this step is not a big technical challenge. 

In practice, we would use this server to collect training data for the ML portion of this service. We may also choose to send inference data to the server and results back to the client to offload heavy compute from the extension. 

# to run backend service locally
1. pull the repository
2. run `npm install`. You may need to install npm, I am using the latest version.
3. run `node index.js`. The server is now active, in the console there is a url you can visit to view the server data. 

Optional: go to `http://localhost:3000/deals/all` to fetch all data or go to `http://localhost:3000/deals/<start-range>/<end-range>` to get the data from the range [start, end)

example: `http://localhost:3000/deals/0/10` will return all the data from indexes 0, 1, 2, ..., 9.
