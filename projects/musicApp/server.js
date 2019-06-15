var unirest = require('unirest');

const songUrl = "https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search?s_artist_rating=desc&q_artist=coldplay&page=1&page_size=5";
const apiHost = "musixmatchcom-musixmatch.p.rapidapi.com";
const apiKey = "53b67e1153msh84d928459922551p1f0dffjsn2ca96aedfb81";


unirest.get("https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search?s_artist_rating=desc&q_artist=coldplay&page=1&page_size=5")
.header("X-RapidAPI-Host", "musixmatchcom-musixmatch.p.rapidapi.com")
.header("X-RapidAPI-Key", "53b67e1153msh84d928459922551p1f0dffjsn2ca96aedfb81")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
/* 
unirest.get(songUrl)
.header("X-RapidAPI-Host", apiHost)
.header("X-RapidAPI-Key", apiKey)
.end(function (result) {
  console.log(result.status, result.headers, result.body);
}); */