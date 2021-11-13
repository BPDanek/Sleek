const express = require('express')
const app = express()
const port = 3000

let data = Array.from([
    {
        "deal_id": "2e5955ce-c796-4742-9eb4-1913f8105c9e",
        "retailer_id": "3cb32510-0e33-4b39-8b83-f5ed58e3be90",
        "retailer_name": "Walmart",
        "retailer_domains": [
            "walmart.com",
            "walmart.ca"
        ],
        "deal_type": "PERCENTAGE",
        "deal_amount": 0.2
    },
    {
        "deal_id": "edb602b3-d6bb-4542-b521-33e76e9bb584",
        "retailer_id": "8f4aaf65-937d-451f-9ed5-5cee88c52c97",
        "retailer_name": "Canadian Tire",
        "retailer_domains": [
            "canadiantire.ca"
        ],
        "deal_type": "PERCENTAGE",
        "deal_amount": 0.29
    },
    {
        "deal_id": "3a9a3d4b-d12a-43f0-94b7-0c539a67c152",
        "retailer_id": "b87015d9-9023-4977-9168-3a8c78558211",
        "retailer_name": "Lululemon",
        "retailer_domains": [
            "shop.lululemon.com"
        ],
        "deal_type": "PERCENTAGE",
        "deal_amount": 0.05
    },
    {
        "deal_id": "3445d3a9-6674-4d35-bb79-f1e8c19baf68",
        "retailer_id": "3553b294-d323-4d18-8ecf-064af8f0516b",
        "retailer_name": "Bestbuy",
        "retailer_domains": [
            "bestbuy.com",
            "bestbuy.ca"
        ],
        "deal_type": "PERCENTAGE",
        "deal_amount": 0.0149
    },
    {
        "deal_id": "68d1fd38-c08a-460a-a553-97619ff41c66",
        "retailer_id": "c73a8a04-0ab8-4bee-bea6-6955eb046e7e",
        "retailer_name": "Costco",
        "retailer_domains": [
            "costco.com",
            "costco.ca"
        ],
        "deal_type": "PERCENTAGE",
        "deal_amount": 0
    },
    {
        "deal_id": "4e9e8640-b83d-47e4-890a-38cfac838b94",
        "retailer_id": "5c1baa22-9208-4dc8-9ba1-3a082ff4f682",
        "retailer_name": "Hudson's Bay",
        "retailer_domains": [
            "thebay.com"
        ],
        "deal_type": "PERCENTAGE",
        "deal_amount": 0.3
    }
])



app.get('/', (req, res) => {
    res.send(data)
})

// if the input data is huge, just grab a sublist (to support pagination)
app.get('/deals/:start/:end', (req, res) => {
    responseString = data.slice(req.params[0], req.params[1])
    res.status(200).send(responseString)
})

// just grab all the data
app.get('/deals/all', (req, res) => {
    responseString = data
    res.status(200).send(responseString)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})