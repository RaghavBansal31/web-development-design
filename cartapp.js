function dofill()
        {
           var items=document.getElementById("items");
           var prices=document.getElementById("prices");
           var types=document.getElementById("types");

           var books=["real Java","Real C","Lect Us C"];
           var bprices=["500","400","300"];

           prices.length=0;
           types.length=0;
           if(items.selectedIndex==1)
           {
               for(i=0;i<books.length;i++)
               {
                   var opt1=document.createElement("option");
                   opt1.text=books[i];
                   opt1.value=books[i];
                   types.append(opt1);

                   var opt2=document.createElement("option");
                   opt2.text=bprices[i];
                   opt2.value=bprices[i];
                   prices.append(opt2);
               }
           }
        }

        function fillcart()
        {
            var types=document.getElementById("types");
            // var item=types.value;
            // alert(item);
            var b = documemt.createElement("option");
                b.text = types.value;
                b.value = types.value;
                x.append(b);
        }