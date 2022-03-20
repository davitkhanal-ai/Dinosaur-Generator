import express from 'express'
import 'dotenv/config'
const app = express()
const port = 3000;
import fetch from 'node-fetch'

//serving files

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`listening in to port ${port}`)
})


//routes for dino name
app.get("/dinoname", async(req,response) =>{
    //coding stuff
    const fetchApi = await fetch(
		'https://dinoipsum.com/api/?format=json&words=2&paragraphs=2',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-key': process.env.api_key,
				'x-rapidapi-host': 'alexnormand-dino-ipsum.p.rapidapi.com',
			},
		}
	);
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse)
    response.json(dinoNameResponse)
})


//routes for dino image
app.get("/dinoimage", async(req,response) =>{
    //coding stuff
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
            "x-rapidapi-key": "68b0a54ebcmsh3f51a4d9b5fb940p12bf0fjsnbb5b3a3de47d"
        }
    })
    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse)
    response.json(dinoImageResponse)
})