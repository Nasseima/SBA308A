const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
async function getData (){
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
}
getData()