const googlehome = require('google-home-notifier')
const language = 'ja'

googlehome.device('Google-Home', language)

googlehome.notify('授業中に出したら学生生活終わるナリ...そうだ、大声出して音をかき消すナリ！ああああ あああ あああ!!!!!!!!!!!からさわ洋くん、ど、どうしたんだいきなり大声出してなんでもなブリブリブリブリュリュリュリュリュ!!!!!!ブツチチブチチチブリリリブブブブブブゥゥゥゥッッッブリブリブリブリュリュリュリュリュ!!!!!!ブツチチブブチチチブリリイリブブブブブブブブブゥゥゥゥッッッ', (res) => {
  console.log(res)
})
