import data from './data.js'


console.log(data)
function displayAll(){
    document.querySelector('.main').innerHTML = ''
    for(let details of data){
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
    }
}
displayAll()


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