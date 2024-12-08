const http = require('http');

// CORS headers are set up for you
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
};

// Store wishes in memory
const wishes = [];

const server = http.createServer((req, res) => {
    // CORS is handled for you
    Object.entries(corsHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
    });
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Your code starts here
    // TODO: Implement GET and POST endpoints for /api/wishes
    if (req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(wishes));
    }


    if(req.method==='POST') {
        let body='';
        req.on('data',chunk=>body+=chunk);
        req.on('end',()=>{
            const name=JSON.parse(body).name;
            const message=JSON.parse(body).message;

            if(!name) {
                res.statusCode=400;
                return res.end(JSON.stringify({error:'請輸入人名'}));
            }
            if(!message) {
                res.statusCode=400;
                return res.end(JSON.stringify({error:'請輸入訊息'}));
            }
            wishes.push({name,message,timestamp:new Date});
                res.statusCode=201;
                res.end(JSON.stringify(wishes));
            });
        }

});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));