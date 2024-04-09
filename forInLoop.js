let alien ={
    name :'Pankaj',
    tech :'javaScript',
    laptop :{
        cpu :'i7',
        ram :4,
        Brand :'asus'
    }
}

for(let key in alien)       // for in loop 
{
    console.log(key,alien[key]);
}