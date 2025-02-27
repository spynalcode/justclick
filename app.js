import data from './data.js'


console.log(data)
function displayAll(){
    document.querySelector('.main').innerHTML = ''
    for(let details of data){
        let div = document.createElement('div')
        let divName = document.createElement('div')
        let divLink = document.createElement('div');
        let divRaised = document.createElement('div')


        divName.textContent = details.name;
        divName.style.fontSize = '15px'

        divLink.classList.add('link')

        divRaised.textContent = `Total Raised: ${details.raised? details.raised : 'Nil'}`
        divRaised.classList.add('amount')



        divLink.textContent = 'detailed step-by-step guide';
        divLink.style.color ='#2bbdc7';
        divLink.style.fontSize = '15px';
        divLink.style.textDecoration = 'underline';
        divLink.style.cursor = 'grab'
        

        div.classList.add('deets');
        div.classList.add('glass')
        let div1 = document.createElement('div')
        div1.classList.add('color')
        div1.style.backgroundImage = details.img?`url(${details.img})`:(div1.textContent = details.name);
        div1.style.backgroundSize = 'contain'
        div1.style.backgroundRepeat = 'no-repeat';
        div1.style.backgroundPositionX = 'center';
        div1.style.backgroundPositionY = 'center';
        
        divLink.addEventListener('click', ()=>{
           
            var link = document.createElement('a');
            // Set the href attribute to the path of your local HTML file
            link.href = details.website? details.website : details.link; // Replace 'your_local_file.html' with your file name
            // Set the target attribute to '_blank' to open the file in a new tab/window
            link.target = '_blank';
            // Dispatch a click event on the link
            link.click();
            
        })
    
        document.querySelector('.main').appendChild(div).appendChild(div1)
        document.querySelector('.main').appendChild(div).appendChild(divName)
        document.querySelector('.main').appendChild(div).appendChild(divLink)
        document.querySelector('.main').appendChild(div).appendChild(divRaised)

       
    }
}
displayAll()


document.querySelector('.logo-container').addEventListener('click', ()=>{
    displayAll()
})
function displayTestnet(){
    document.querySelector('.main').innerHTML = ''
    for(let details of data){
        if(details.network === 'testnet'){
        let div = document.createElement('div')
        div.classList.add('color')
        div.style.backgroundImage = `url(${details.img})`;
        div.style.backgroundSize = 'contain'
        div.style.backgroundRepeat = 'no-repeat';
        div.style.backgroundPositionX = 'center';
        div.style.backgroundPositionY = 'center';
        
        div.addEventListener('click', ()=>{
           
            var link = document.createElement('a');
            // Set the href attribute to the path of your local HTML file
            link.href = details.website? details.website : details.link; // Replace 'your_local_file.html' with your file name
            // Set the target attribute to '_blank' to open the file in a new tab/window
            link.target = '_blank';
            // Dispatch a click event on the link
            link.click();
            
        })
    
        document.querySelector('.main').appendChild(div)
    }}
}

// function search(input){
//     const main = document.querySelector('.main');
//     main.innerHTML = '';
//     const matchingResult = data.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
//     main.innerHTML = matchingResult.name
// }

// document.querySelector('.search-btn').addEventListener('click', (e)=>{
//     search(e)
// })

function displayMainnet(){
    document.querySelector('.main').innerHTML = ''
    for(let details of data){
        if(details.network === 'mainnet'){
        let div = document.createElement('div')
        div.classList.add('color')
        div.style.backgroundImage = `url(${details.img})`;
        div.style.backgroundSize = 'contain'
        div.style.backgroundRepeat = 'no-repeat';
        div.style.backgroundPositionX = 'center';
        div.style.backgroundPositionY = 'center';
        
        div.addEventListener('click', ()=>{
           
            var link = document.createElement('a');
            // Set the href attribute to the path of your local HTML file
            link.href = details.website? details.website : details.link; // Replace 'your_local_file.html' with your file name
            // Set the target attribute to '_blank' to open the file in a new tab/window
            link.target = '_blank';
            // Dispatch a click event on the link
            link.click();
            
        })
    
        document.querySelector('.main').appendChild(div)
    }}
}

document.querySelector('.testnet').addEventListener('click', ()=>{
    displayTestnet()
})

document.querySelector('.mainnet').addEventListener('click', ()=>{
    displayMainnet()
})