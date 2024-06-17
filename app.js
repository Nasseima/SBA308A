const url = 'https://dogapi.dog/api/v2/breeds'

const h1 = document.createElement('p')

async function logSomething() {
    try {
    const response = await fetch(url);
    const dogData = await response.json();
    console.log(dogData)
    console.log(dogData.data[0].attributes.name);
    } catch (error) {
        console.log(error)
    }
    
  }
logSomething()