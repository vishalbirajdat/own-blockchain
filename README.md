
## Creator : Vishal Birajdar
Linkedin  Profile [https://www.linkedin.com/in/vishal-birajdar-523b12197](https://www.linkedin.com/in/vishal-birajdar-523b12197)

## Project Name : Own Blockchain
Link : [https://github.com/vishalbirajdat/own-blockchain/](https://github.com/vishalbirajdat/own-blockchain)

## Certificate : Proof Of Creted Own Blockchain By Course
Certificate Link : [https://github.com/vishalbirajdat/own-blockchain/blob/main/udemy.pdf](https://github.com/vishalbirajdat/own-blockchain/blob/main/udemy.pdf)

## project Aim

-Make own blockchain which works on nodes/Networks distributed and decentralize.

## How is it work ?

run 
http://localhost:3000/blockchain


```bash
   "node_1": "nodemon --watch dev -e js dev/networkNode.js 3001 http://localhost:3001",
    "node_2": "nodemon --watch dev -e js dev/networkNode.js 3002 http://localhost:3002",
    "node_3": "nodemon --watch dev -e js dev/networkNode.js 3003 http://localhost:3003",
    "node_4": "nodemon --watch dev -e js dev/networkNode.js 3004 http://localhost:3004",
    "node_5": "nodemon --watch dev -e js dev/networkNode.js 3005 http://localhost:3005",
```

http://localhost:3001/register-node  
add in body
 ```bash
 {
  "newNodeUrl":"http://localhost:3002"
}
```

http://localhost:3001/register-node-bulk
add in body
 ```bash
 {
  "allNetworkNodes": [
    "http://localhost:3002",
    "http://localhost:3001",
    "http://localhost:3004"
  ]
}
```

http://localhost:3001/register-and-broadcast-node
add in body
 ```bash
{
  "newNodeUrl": "http://localhost:3003"
}
```

http://localhost:3001/transaction/broadcast
add in body
 ```bash
{
  "amount":960,
  "sender":"87gdfgfdtyuiopkjhgfr567hjjj",
  "recipient":"oioiooi87yuytrfgfvdr456tjh"
}
```


run
http://localhost:3000/mine


run 
http://localhost:3000/blockchain




## What is used To make this project ? 
- javacript


## Other projects

### Own Blockchain : 
- Github Link : [https://github.com/vishalbirajdat/own-blockchain](https://github.com/vishalbirajdat/own-blockchain)

### TrueContract : 
- Github Link [https://github.com/vishalbirajdat/True-Contract](https://github.com/vishalbirajdat/True-Contract)
- Live website Link [https://tokencontract.vercel.app/](https://tokencontract.vercel.app/)

### NFT Marketplace :
- Github Link [https://github.com/vishalbirajdat/NAFT](https://github.com/vishalbirajdat/NAFT)
- Live website Link [https://nfts-lemon.vercel.app/](https://nfts-lemon.vercel.app/)

### Crowdfunding :
- Github Link : [https://github.com/vishalbirajdat/crowdfuncding](https://github.com/vishalbirajdat/crowdfuncding)

### Sentiments : 
- Github Link [https://github.com/vishalbirajdat/Sentiments](https://github.com/vishalbirajdat/Sentiments)
- Live website Link [https://sentiments-alpha.vercel.app/](https://sentiments-alpha.vercel.app/)


