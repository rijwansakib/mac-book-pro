//base memory
document.getElementById('baseMamory').addEventListener('click',function(){
    
    let extraMemotyPrice=document.getElementById('memoryCost').innerText
    price=0;
    
    let extraPrice=parseInt(extraMemotyPrice);
    extraPrice= price;
    document.getElementById('memoryCost').innerText=extraPrice;

    totalCost()    
})

//extra memory

document.getElementById('extraMemory').addEventListener('click',function(){
    let extraMemotyPrice=document.getElementById('memoryCost').innerText
    price=180;
    
    let extraPrice=parseInt(extraMemotyPrice);
    extraPrice= price;
    document.getElementById('memoryCost').innerText=extraPrice;

    totalCost()
})

//base Storage 256Gb

document.getElementById('baseStorage').addEventListener('click',function(){

    let extraStoragePrice=document.getElementById('storageCost').innerText
    price=0;
    
    let extraPrice=parseInt(extraStoragePrice);
    extraPrice= price;
    document.getElementById('storageCost').innerText=extraPrice;

    totalCost()
    
})

//second  storage 512GB

document.getElementById('secondStorage').addEventListener('click',function(){

    let extraStoragePrice=document.getElementById('storageCost').innerText
    price=100;
    
    let extraPrice=parseInt(extraStoragePrice);
    extraPrice= price;
    document.getElementById('storageCost').innerText=extraPrice;

    totalCost()

})

// highest Storage 1TB

document.getElementById('highestStorage').addEventListener('click',function(){

    let extraStoragePrice=document.getElementById('storageCost').innerText
    price=180;
    
    let extraPrice=parseInt(extraStoragePrice);
    extraPrice= price;
    document.getElementById('storageCost').innerText=extraPrice;

    totalCost()
    
})

//free Shpping
document.getElementById('freeShpping').addEventListener('click',function(){
    
    let shippingPrice=document.getElementById('delevierChrrge').innerText
    price=0;
    
    let extraPrice=parseInt(shippingPrice);
    extraPrice= price;
    document.getElementById('delevierChrrge').innerText=extraPrice;
    
    totalCost()
     
})

//shipping Cost
document.getElementById('shippingCost').addEventListener('click',function(){

    
    let shippingPrice=document.getElementById('delevierChrrge').innerText
    price=20;
    
    let extraPrice=parseInt(shippingPrice);
    extraPrice= price;
    document.getElementById('delevierChrrge').innerText=extraPrice;
   
    totalCost()
     
})


//totalPrice using function

function totalCost(){
    let basePrice=1299;
    let  MemoryCost=document.getElementById('memoryCost')
    let  storageCost=document.getElementById('storageCost')
    let deleveryCost=document.getElementById('delevierChrrge')

   let total=basePrice+parseInt(MemoryCost.innerText)+parseInt(storageCost.innerText)+
   parseInt(deleveryCost.innerText);
   document.getElementById('totalPrice').innerText=total;
   
   //grand-total
    document.getElementById('grand-total').innerText=total;
}
   //pomo code using function
      
     function pomocodecal(){
         let totalCost=document.getElementById('totalPrice')
         let grandTotal=document.getElementById('grand-total')
         let pomocode=document.getElementById('pomoCode')
         
         if(pomocode.value == 'stevekaku'){

          let totalCostWithPomo= Math.round(parseInt(totalCost.innerText) - (parseInt(totalCost.innerText) * 20) / 100);

        // update grand total
         grandTotal.innerText = totalCostWithPomo;
    }
          pomocode.value = '';

     }

   // get pomo code by apply button

   document.getElementById('apply').addEventListener('click',function(){

    pomocodecal();

   })






