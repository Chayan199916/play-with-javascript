GIPHY_API_KEY = "YOUR_API_KEY"
WORD_API_KEY =  "YOUR_API_KEY"
giphyApiUrl = `http://api.giphy.com/v1/gifs/random?tag=cat&api_key=${GIPHY_API_KEY}`
wordApiUrl = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${WORD_API_KEY}
`


// let promise = fetch(giphyApiUrl);
// promise.then(gotData)
// promise.catch(gotError)

// fetch(giphyApiUrl).then(gotData).catch(gotError);

// fetch(giphyApiUrl)
//     .then(function (data) {
//     console.log(data)})
//     .catch(function (err) {
//     console.error(err);});

// function gotData(data){
//     console.log(data)
// }

// function gotError(err){
//     console.error(err);
// }

fetch(wordApiUrl)
    .then(response => response.json())
    .then(function(json){
        word = json.word
        giphyApiUrl = `http://api.giphy.com/v1/gifs/random?tag=${word}&api_key=${GIPHY_API_KEY}`
        fetch(giphyApiUrl)
        .then(response => response.json())
        .then(function(json){
            document.querySelector("#demo h3").innerText = word
            document.querySelector("#demo img").setAttribute("src", json.data["fixed_height_downsampled_url"]);
        })
        .catch(err => console.log("Not found"))
    })
    .catch(err => console.log(err));

