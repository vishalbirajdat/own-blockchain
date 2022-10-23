const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const btc = 
{
    "chain": [
        {
            "index": 1,
            "timestamp": 1660584563436,
            "transactions": [],
            "nonce": 0,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1660584629297,
            "transactions": [
                {
                    "amount": 6780,
                    "sender": "87hgdfgfdtyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                }
            ],
            "nonce": 31899,
            "hash": "000065f8635eb2e611b72bafeeaac2279f1fe60e3b726c25c1e17e93b39fbfc7",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1660584658183,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "cdbb78601cbf11ed9046b98af094275a",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 670,
                    "sender": "87hgdfgfdtyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 67890,
                    "sender": "87hgdfgfdtyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                }
            ],
            "nonce": 15570,
            "hash": "0000833321393178e9b4573b1aaeea874868a894c253969ebdc4bf609eb79651",
            "previousBlockHash": "000065f8635eb2e611b72bafeeaac2279f1fe60e3b726c25c1e17e93b39fbfc7"
        },
        {
            "index": 4,
            "timestamp": 1660584713167,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "cdbb78601cbf11ed9046b98af094275a",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 890,
                    "sender": "87hgdfgfdotyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 899870,
                    "sender": "87hgdfgfdotyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 89970,
                    "sender": "87hgdfgfdotyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 8970,
                    "sender": "87hgdfgfdotyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                }
            ],
            "nonce": 8662,
            "hash": "000062e2827dc7dd4986138b01ae587f86acbfc9a38c1ba19a33b5c3c7f9dabb",
            "previousBlockHash": "0000833321393178e9b4573b1aaeea874868a894c253969ebdc4bf609eb79651"
        },
        {
            "index": 5,
            "timestamp": 1660584734465,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "cdbb78601cbf11ed9046b98af094275a",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                },
                {
                    "amount": 8170,
                    "sender": "87hgdfgfdotyuiopkjhgfr567hjjj",
                    "recipient": "oioioioiu87yuytrfgfvdr456tjh",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                }
            ],
            "nonce": 152033,
            "hash": "000059144ebe4b9bd5a0b07160b223403d108b5d9613b1361559688f2d80da3f",
            "previousBlockHash": "000062e2827dc7dd4986138b01ae587f86acbfc9a38c1ba19a33b5c3c7f9dabb"
        },
        {
            "index": 6,
            "timestamp": 1660584743676,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "cdbb78601cbf11ed9046b98af094275a",
                    "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
                }
            ],
            "nonce": 5017,
            "hash": "0000abe071bd1405b486e8bdf11e5a4f15b2728119b73b253f98e2503eae47f4",
            "previousBlockHash": "000059144ebe4b9bd5a0b07160b223403d108b5d9613b1361559688f2d80da3f"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": [],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "cdbb78601cbf11ed9046b98af094275a",
            "transactionId": "cdbc3bb01cbf11ed9046b98af094275a"
        }
    ]
}

console.log("valid-chain ", bitcoin.chainIsValid(btc.chain))

