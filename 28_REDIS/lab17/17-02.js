const redis = require('redis');

const client = redis.createClient('//redis-17194.c232.us-east-1-2.ec2.cloud.redislabs.com:17194', { password: 'ASVH72EHSUjwMTm87FLQ94rj70cLounc' });
client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

console.time('FirstWay');
for(let n = 1; n<=10000; n++) {
    client.set(n, 'set' + n);//создание
}
console.timeEnd('FirstWay');

console.time('SecondWay');
for(let n = 1; n<=10000; n++) {
    client.get(n);//выборка
}
console.timeEnd('SecondWay');


console.time('ThirdWay');
for(let n = 1; n<=10000; n++) {
    client.del(n); //удаление
}
console.timeEnd('ThirdWay');

client.quit();
//getset модификация
