var aim=document.getElementById('aim');
var description=document.getElementById('description');
var ad_button=document.getElementById('add');
var list=document.getElementById('list');

    

ad_button.addEventListener("click",function(e){
    if(aim.value.length==0)
    {
        alert("please write aim");
        ad_button.removeEventListener();
    }
    
    var divi=document.createElement('div');
    divi.className='divi';
    var h11=document.createElement('textarea');
    h11.className='ta';
    var h12=document.createElement('h2');
    h12.className='tb';
    h12.innerHTML=aim.value;
    divi.appendChild(h12);
    h11.innerHTML=description.value;
    if(h11.value.length!=0)
    divi.appendChild(h11);
    var butto=document.createElement('button')
    butto.className='button';
    butto.innerHTML='x';
    divi.appendChild(butto);
    list.appendChild(divi);

    butto.addEventListener("click",function(e){
        list.removeChild(divi);
    });
    aim.value="";
    description.value="";
});
