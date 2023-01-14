/*
    Auhtor: Gotsinas Antonios

    Περιγραφή:

        Κάνει validation μίας συμβολοσειράς που περιέχει τους χαρακτήρες 
         0,1,2,3,4,5,6,7,8,9, +, -, .

    Παράμετρος:

        value: μία συμβολοσειρά προς επιβεβαίωση 
*/
function ValidateNumber(value) {
    const passnumbers =['0','1','2','3','4','5','6','7','8','9','.','+','-'];
    let str = value;
    let breakresult = false;
    let result = true;
   
    for (let i=0; i<str.length; i++)
    {
        for(let j=0; j< passnumbers.length;j++) 
        {
            if (str[i] == passnumbers[j])
            {
                breakresult = true;
                break;
            }                 
        }
        if (breakresult == true)
        {
            breakresult=false;
        }
        else
        {
         result = false;
         break;
        }
    }
    return result;
   }   