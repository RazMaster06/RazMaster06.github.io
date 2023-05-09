function checkButtClick(){
  
    let textfelt = document.getElementById("textinput").value;
    let psvar = document.getElementsById("svar");
    let len_ok = kollaStringLenght(textfelt)


    console.log(Click + textfelt)

    if (len_ok)(
        console.log('Click')
    )
}

function kollaStringLenght(tpersonnr){
    let length_ok = false;

    if(tpersonnr.length === 10)(
        length_ok = true)
}


function kollaStringLength(tpersonnr){
    let length_ok = false;

    if(tpersonnr.length === 10)(
        length_ok = true;
    return length_ok;
}

//pnrToNumber-----------------------------------------------------------------
function pnrToNumber(tpersonnr){
    //casta string till array med chars
    const arr_pnr = tpersonnr.split('');
    const newPnrArr = arr_pnr.map((textsiffra) => {
        const num_siffra = parseInt(textsiffra);
        return num_siffra;
})
 
return newPnrArr;
 
    
}
/*function multipliceraPnr()
In: personnumer som array med numbers
Ut:strinng med multiplicerade siffror i personnummer*/
//Multiplicerar varannan siffra i personnumret med 1 sen 2 osv
function multipliceraPnr(arr_med_pnr_siffro){
    let = str_multiplicerade_siffror = "";

 

    //Gammal hederli forloop istället .map() funktion
    for (let i = 0; i < 9; i++) {
        
        if ((i+1)%2 === 0){//Om index i array udda, multiplicera med 1
            const num_siffra = Number(arr_med_pnr_siffro[i]) * 1;
            //console.log(` :${num_siffra}: `)
            str_multiplicerade_siffror += num_siffra;
        }
        else{//om index är jämnt multiplicera med 2
            const num_siffra = Number(arr_med_pnr_siffro[i]) * 2;
            //console.log(` :${num_siffra}: `)
            str_multiplicerade_siffror += num_siffra;
        }
      }
      
      return str_multiplicerade_siffror;
}//End of multiplicerPnr()