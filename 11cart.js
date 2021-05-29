

function dofill()
            {
                var items=document.getElementById("items");
                var types=document.getElementById("types");
                var prices=document.getElementById("prices");
            
                var pizza=["chesse pizza","farmhouse","peppy panner","onion-tomato","farmfresh"]
                var pizzaP=["250","300","200","100","300"]
            
               
            
                prices.length=0;
                types.length=0;
            
                if(items.selectedIndex==1)
                {
                    for(i=0; i<pizza.length; i++)
                    {
                      var opt1=document.createElement("option")
                      opt1.text=pizza[i];
                      opt1.value=pizza[i];
                      types.append(opt1);
            
                      var opt2=document.createElement("option")
                      opt2.text=pizzaP[i];
                      opt2.value=pizzaP[i];
                      prices.append(opt2);
            
                    }
            
                }
                var burger=["chesse burger","tkki burger","panner burger","onion-burger","mac maharaja"]
                var burgerP=["70","50","90","100","300"]
              
                    if(items.selectedIndex==2){
                    for( i=0; i<burger.length; i++)
                    {
                        var opt3=document.createElement("option")
                        opt3.text=burger[i];
                        opt3.value=burger[i];
                        types.append(opt3);
              
                        var opt4=document.createElement("option")
                        opt4.text=burgerP[i];
                        opt4.value=burgerP[i];
                        prices.append(opt4);
                    }
             
                }



 //THE ABOVE CODE IS OF OTHER AND IS ABSOLUTELY CORRECT

                
            }



            function fillcart()
            {
                var types = document.getElementById("types");
                var prices = document.getElementById("prices");
                var cart=document.getElementById("cart");
                var cartP=document.getElementById("cartP");

               
                    
                        var opt5=document.createElement("option")
                        opt5.text = types.value;
                        opt5.value = types.value;
                        cart.append(opt5);

                        var sprice=prices[types.selectedIndex].value;
                        var opt6=document.createElement("option")
                        opt6.text = sprice;
                        opt6.value = sprice;
                        cartP.append(opt6);
                      
                
            }
            function showbill(cartP)
            {
               
                var v = cartP.length;
                var sum=0;
                for(i=1;i<v;i++)
                {
                     
                    sum = sum + parseInt(cartP[i].value)
                }
                document.querySelector("#txta").value =sum;
            }