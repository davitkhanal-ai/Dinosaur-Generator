const { response } = require('express');
const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000;

//serving files

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`listening in to port ${port}`)
})


//routes
app.get("/dinoname", async(req,res) =>{
    //coding stuff
    const fetchApi = await fetch(
		'https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json',
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