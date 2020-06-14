const redis = require('redis');

const client = redis.createClient('//redis-17194.c232.us-east-1-2.ec2.cloud.redislabs.com:17194', { password: 'ASVH72EHSUjwMTm87FLQ94rj70cLounc' });

sub_client.on('subscribe', (channel, count)=>{console.log('subscribe: ', 'channel = ', channel, 'count = ', count);});
sub_client.on('message', (channel, message)=>{console.log('sub channel: ' + channel + ': ' + message);});

sub_client.subscribe('channel-01');

setTimeout(() => {
    sub_client.unsubscribe();
    sub_client.quit();
}, 60000);
