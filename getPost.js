const twitter = require('twitter')

const client = new twitter({
  consumer_key: 'zrWsPh26XPlAcHfaEyGr5hSyd',
  consumer_secret: 'GRTFuaEOz3PRcF9V5cYlJqRFhWlKHx30xuCzOo5EiEAS5bPNvK',
  access_token_key: '96101099-vmgmpUn5ve2dPfoIBjR7WEt7sUisDxlqefBDlrQen',
  access_token_secret: 'ITJvYpe3fW4cNx7nhQSnGhynToAajbyxhP0BXsmpQMhex'
})

const getPost = new Promise((query) => {
    client.get('search/tweets', {q: String(query)}, (error, tweets, response) => {
       console.log(tweets)
       return tweets
    })
  })


console.log(getPost('めう'));
