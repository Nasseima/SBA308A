const url = 'https://dogapi.dog/api/v2/breeds'

const p = document.createElement('p')
const Img = document.getElementsByClassName("firstImg")

const ctn = document.querySelector("#main")
let newItem = "";

async function logSomething() {
    try {
    
        const imageUrls = [
            '../Dog_Images/shepDog.jpg',
            '../Dog_Images/bouvierDo.jpg',
            '../Dog_Images/GrandBassetDog.jpg',
            '../Dog_Images/Hokkaido.jpg',
            '../Dog_Images/JapaneseTerrier.jpg',
            '../Dog_Images/Hanoverian Scenthound.jpg',
            '../Dog_Images/TibetanSpaniel.jpg',
            '../Dog_Images/Border Collie.jpg',
            '../Dog_Images/Curly-CoatedRetriever.jpg',
            '../Dog_Images/SkyeTerrier.jpg',
            
            // Add more URLs as needed
        ];


    const response = await fetch(url);
    const dogData = await response.json();
    firstAttributes = dogData.data[2]
    // console.log( dogData.data[2])
    
    // for(let i=0; i<)
   for(let i=0; i<=10; i++){
    const imageUrl = imageUrls[i % imageUrls.length];

    newItem += `
    <div style="background-color: white; width:100vh; height:100vh">
    <img src="${imageUrl}" alt="Dog ${i + 1}" style="max-width: 100%; max-height: 100%;">
    <h1>${dogData.data[i].attributes.name}</h1>
    <p>${dogData.data[i].attributes.description} </p>
    <div style="display:flex; ">
     <div >
    <h4 style="margin-top:-5px" >Life: </h4>
    <p style="margin-top:-5px" >Max: ${dogData.data[i].attributes.life.max} </p>
    <p style="margin-top:-5px">Min: ${dogData.data[i].attributes.life.min} </p>
    </div>

    <div >
    <h4 style="margin-top:-5px; margin-left:70px;" >Male-Weight: </h4>
    <p style="margin-top:-5px; margin-left:70px;" >Max: ${dogData.data[i].attributes.male_weight.max} </p>
    <p style="margin-top:-5px; margin-left:70px;">Min: ${dogData.data[i].attributes.male_weight.min} </p>
    </div>

    <div >
    <h4 style="margin-top:-5px; margin-left:70px;" >Female-Weight: </h4>
    <p style="margin-top:-5px; margin-left:70px;" >Max: ${dogData.data[i].attributes.female_weight.max} </p>
    <p style="margin-top:-5px; margin-left:70px;">Min: ${dogData.data[i].attributes.female_weight.min} </p>
    </div>

    <div >
    <h4 style="margin-top:-5px; margin-left:70px;" >Hypoallergenic: </h4>
    <p style="margin-top:-5px; margin-left:70px;" > ${dogData.data[i].attributes.hypoallergenic} </p>
    </div>

    </div>
    </div>
    `
    console.log( dogData.data[i].attributes)
    ctn.innerHTML = newItem;
   }

   

    } catch (error) {
        console.log(error)
    }
    
  }
logSomething()

//     console.log(firstAttributes);
//         Img.appendChild(p)
//         p.appendChild(firstAttributes)
        // dogData.data[i].attributes