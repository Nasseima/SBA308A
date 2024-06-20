const url = 'https://dogapi.dog/api/v2/breeds'

const p = document.createElement('p')
const Img = document.getElementsByClassName("firstImg")
const ctn = document.querySelector("#main")
let newItem = "";

async function logSomething() {
    try {
    
        const imageUrls = [
            'https://i.pinimg.com/474x/9f/c9/3c/9fc93cc5966dafa768a14ab05c671c33.jpg',
            'https://i.pinimg.com/474x/92/5d/ee/925dee29f02e91295d3385bc83b767b0.jpg',
            'https://i.pinimg.com/474x/42/f0/99/42f09926e767132f941018bd38fd05d0.jpg',
            'https://i.pinimg.com/474x/c7/0a/6c/c70a6ca387c7b09bcf127436cbe8cffd.jpg', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDtsvvdakOEOEz_sWAqRFzv6oX8FvA6PlkA&s',
            'https://i.pinimg.com/736x/3b/2a/42/3b2a42f9542f59c2db38fe633a0169ac.jpg',
            'https://i.pinimg.com/474x/0a/d0/37/0ad03700b4311d76637aa006a337379e.jpg',
            'https://i.pinimg.com/474x/27/41/be/2741bec4bd98f5b50b32819dea75be71.jpg',
            'https://i.pinimg.com/474x/dc/c4/c5/dcc4c538daba68b65cfb9968e2b6343f.jpg',
            'https://i.pinimg.com/474x/0b/aa/a1/0baaa1a3a2250891593102a28acf080b.jpg',
           
            
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
    <div class="cardmy-4" >
    <div class="title">
    <h2 class="card-title">${dogData.data[i].attributes.name}</h2>
    </div>
        <img class="card-img-top" src="${imageUrl}" alt="Dog ${i + 1}>
        <div class="card-body">
         <p class="dog-text">${dogData.data[i].attributes.description} </p>

        <div class="details-container">
         <div class="detail-section style="margin-left:5px;">
                    <h4>Life:</h4>
                    <p>Max - ${dogData.data[i].attributes.life.max}</p>
                    <p>Min - ${dogData.data[i].attributes.life.min}</p>
                </div>

                <div class="detail-section">
                    <h4>Male Weight:</h4>
                    <p>Max - ${dogData.data[i].attributes.male_weight.max}</p>
                    <p>Min - ${dogData.data[i].attributes.male_weight.min}</p>
                </div>

                <div class="detail-section" style="margin-right: 3px;">
                    <h4>Female Weight:</h4>
                    <p>Max - ${dogData.data[i].attributes.female_weight.max}</p>
                    <p>Min - ${dogData.data[i].attributes.female_weight.min}</p>
                </div>
            </div>
            </div>
    </div>
<br/>
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