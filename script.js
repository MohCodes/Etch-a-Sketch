const container = document.querySelector(".container")
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function createDivs(col, rows){

    for(let i = 0; i<(col*rows); i++){
        const div = document.createElement('div');
        div.style.border = '1px double black'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')

    };
};

createDivs(16,16);

function grayColor(){
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = "GRAY";
    btnGray.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover',()=> {
            let Rnum = Math.floor(Math.random()*256);
            let GrayScale =`rgb(${Rnum},${Rnum},${Rnum})`;
            box.style.background = GrayScale;
        }))
        
        
    })

    buttonsContainer.appendChild(btnGray).classList.add('btn');
}

grayColor();



function blackColor(){
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = "BLACK";
    btnBlack.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover',()=> {
            box.style.background = "Black";
        }))
        
        
    })

    buttonsContainer.appendChild(btnBlack).classList.add('btn');

}

blackColor()




function rgbColor(){
    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = "RGB";
    btnRGB.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover',()=> {
            let R = Math.floor(Math.random()*256);
            let G = Math.floor(Math.random()*256);
            let B = Math.floor(Math.random()*256);
            box.style.background = `rgb(${R},${G},${B})`;
        }))
        
        
    })

    buttonsContainer.appendChild(btnRGB).classList.add('btn');

}

rgbColor()


function reSet(){
    const boxs = container.querySelectorAll('.box');

    boxs.forEach(box => box.remove());
}

function reSize(){
    btnSize.textContent = 'GRID SIZE/Reset';
    btnSize.addEventListener('click', () => {
        let user = prompt("what size grid?");
        if(user === null||user < 1){
            reSet();
            createDivs(16,16);
            grayColor();
            blackColor();
            rgbColor();
        }
        else if(user >= 100 ){
            reSet();
            createDivs(16,16);
            grayColor();
            blackColor();
            rgbColor();

        }
        else{
            reSet();
            createDivs(user, user);
            grayColor();
            blackColor();
            rgbColor();

        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}

reSize();