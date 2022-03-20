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


//routes
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