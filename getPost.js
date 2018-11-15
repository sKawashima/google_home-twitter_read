const twitter = require('twitter')

const client = new twitter({
  consumer_key: 'zrWsPh26XPlAcHfaEyGr5hSyd',
  consumer_secret: 'GRTFuaEOz3PRcF9V5cYlJqRFhWlKHx30xuCzOo5EiEAS5bPNvK',
  access_token_key: '96101099-vmgmpUn5ve2dPfoIBjR7WEt7sUisDxlqefBDlrQen',
  access_token_secret: 'ITJvYpe3fW4cNx7nhQSnGhynToAajbyxhP0BXsmpQMhex'
})

client.get('search/tweets', {q: 'node.js'}, (error, tweets, response) => {
   for (const tweet of tweets['statuses']) {
     console.log(tweet['text'])
   }
})
