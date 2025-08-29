//heart count

function heart(){
        const num=parseInt(document.getElementById('hrt-count').innerText);
        document.getElementById('hrt-count').innerText=num+1
}

document.getElementById('hrt1').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt2').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt3').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt4').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt5').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt6').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt7').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt8').addEventListener('click',
    function(e){
        heart();

    }
)
document.getElementById('hrt9').addEventListener('click',
    function(e){
        heart();

    }
)
//call and call history 
function call(id1,id2){
    const coin=parseInt(document.getElementById('coin').innerText)
    if(coin<20){
        window.alert('insufficient coins')
        return
    }
    else{
        window.alert('calling....'+' service nmae : '+document.getElementById(id1).innerText+' and Number : '+document.getElementById(id2).innerText);
        document.getElementById('coin').innerText=coin-20
        
        const parent=document.getElementById('call-history')
        const p1=document.createElement('p')
        p1.innerText=document.getElementById(id1).innerText
        p1.classList.add('p1')
        parent.appendChild(p1)
        const p2=document.createElement('p')
        p2.innerText=document.getElementById(id2).innerText
        p2.classList.add('p2')
        parent.appendChild(p2)
        const now = new Date()
        const p3=document.createElement('p')
        p3.innerText=now.toLocaleTimeString() 
        p3.classList.add('p2')
        parent.appendChild(p3)
        }

}


document.getElementById('call1').addEventListener('click',function(){
     call('call1-service','call1-num')
   
})

document.getElementById('call2').addEventListener('click',function(){
    
    call('call2-service','call2-num')
})

document.getElementById('call3').addEventListener('click',function(){
    
    call('call3-service','call3-num')
})

document.getElementById('call4').addEventListener('click',function(){
    
    call('call4-service','call4-num')
})
document.getElementById('call5').addEventListener('click',function(){
    
    call('call5-service','call5-num')
})

document.getElementById('call6').addEventListener('click',function(){
    
    call('call6-service','call6-num')
})

document.getElementById('call7').addEventListener('click',function(){
    
    call('call7-service','call7-num')
})

document.getElementById('call8').addEventListener('click',function(){
    
    call('call8-service','call8-num')
})

document.getElementById('call9').addEventListener('click',function(){
    
    call('call9-service','call9-num')
})
//clear button
document.getElementById('clr').addEventListener('click',function(e){
    document.getElementById('call-history').innerText=""
})

//copy

function copyNumber(numberId) {
    const n = document.getElementById(numberId).innerText;    
    navigator.clipboard.writeText(n);
    alert('Hotline copied: ' + n);
    const count = document.getElementById('copy');
    count.innerText = parseInt(count.innerText) + 1;
}

document.getElementById('copy1').addEventListener('click', function() { copyNumber('call1-num'); });
document.getElementById('copy2').addEventListener('click', function() { copyNumber('call2-num'); });
document.getElementById('copy3').addEventListener('click', function() { copyNumber('call3-num'); });
document.getElementById('copy4').addEventListener('click', function() { copyNumber('call4-num'); });
document.getElementById('copy5').addEventListener('click', function() { copyNumber('call5-num'); });
document.getElementById('copy6').addEventListener('click', function() { copyNumber('call6-num'); });
document.getElementById('copy7').addEventListener('click', function() { copyNumber('call7-num'); });
document.getElementById('copy8').addEventListener('click', function() { copyNumber('call8-num'); });
document.getElementById('copy9').addEventListener('click', function() { copyNumber('call9-num'); });
