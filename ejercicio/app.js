const cambio = document.querySelector('.btn')

cambio.addEventListener('click', function(){;
document.body.classList.toggle('temaoscuro')

var tema= document.body.className

    if (tema =='temaclaro'){
        this.textContent = "Dark"
    }else{
        this.textContent = "Light"
    }
    console.log('current class name: ' + tema);
});