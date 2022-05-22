

let arr=[]

const year=document.querySelector('.year')
const make=document.querySelector('.make')
const model=document.querySelector('.model')
const fuel=document.querySelector ('.fuel')
const feature=document.querySelector ('.feature')
const btn=document.querySelector ('.button')
const sum=document.querySelector ('.sum')
const form=document.querySelector ('input_form')
const resetForm =document.querySelector ('.button1')

const selects =document.querySelectorAll('select')
selects.forEach ((item,index)=>{
    item.addEventListener('change',()=>{
        switch (item.value){
            case "1990-1995":
                arr[0] = -15000
                break;
            case "1996-2001":
                arr[0] = -13000
                break;
            case "2002-2007":
                arr[0] = -10000
                break;
            case "2008-2013":
                arr[0] = -8000
                break;
            case "2014-2019":
                arr[0] = -5000
                break;
            case "2020-2022":
                arr[0] = 1000
                break;
            case "Toyota":
                arr[1] = 30000
                break;
            case "Honda":
                arr[1] = 30000
                break;
            case "Volkswagen":
                arr[1] = 25000
                break;
            case "Ford":
                arr[1] = 25000
                break;
            case "Rav4":
                arr[2] = 10000
                break;
            case "Prius":
                arr[2] = 8000
                break;
            case "Pathfinder":
                arr[2] = 12000
                break;
            case "Civic":
                arr[2] = 5000
                break;
            case "Accord":
                arr[2] = 8000
                break;
            case "CR-V":
                arr[2] = 11000
                break;
                case "Jetta":
                arr[2] = 5000
                break;
            case "Beetle":
                arr[2] = 3000
                break;
            case "Tiguan":
                arr[2] = 8000
                break;
            case "Edge":
                arr[2] = 7000
                break;
            case "F-150":
                arr[2] = 12000
                break;
            case "Expedition":
                arr[2] = 10000
                break;
        }
        console.log(arr);
    })
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const fuels = document.querySelectorAll ('.fuel')
    fuels.forEach((item,index)=>{
        if(item.checked){
            arr.push(+item.value)
            item.checked=false         
        }
    })
    console.log(arr);
    const features = document.querySelectorAll ('.feature')
    features.forEach((item,index)=>{
        if(item.checked){
            arr.push(+item.value) 
            item.checked=false        
        }
    })
    console.log(arr);
    const sum =arr.reduce(function (x,y){
     return x+y;
    }, 0);
    document.querySelector('.sum').innerHTML = sum;

    arr=[];
    year.selectedIndex =[0];
    make.selectedIndex=[0];
    model.selectedIndex=[0];

    console.log (arr);
})

   




 
 




    
    



