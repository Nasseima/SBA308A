const url = 'https://dogapi.dog/api/v2/breeds'

const p = document.createElement('p')
const Img = document.getElementsByClassName("firstImg")
const ctn = document.querySelector("#main")
let newItem = "";

async function logSomething() {
    try {
    
        const imageUrls = [
            'https://images.pexels.com/photos/18136224/pexels-photo-18136224/free-photo-of-sitting-caucasian-shepherd-dog.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/20783872/pexels-photo-20783872/free-photo-of-a-black-dog-walking-on-grass-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=300',
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
    <div style="background-color: white; width:100%; height:100vh">
    <img src="${imageUrl}" alt="Dog ${i + 1}" style="width: 550px; height: 530px;">
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