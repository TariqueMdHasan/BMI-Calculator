// let wt = document.querySelector(".enteredWeight");
// let ht = document.querySelector(".enteredHeight");
// let btn = document.querySelector(".calcBtn");
// // let res = document.querySelector(".finalScore");

// let weight = parseFloat(wt.value);
// let height = parseFloat(ht.vlaue);

// // let bmi = weight/((height/100)**2);


// // btn.addEventListener("click", ()=> {
// //     document.querySelector(".finalScore").innerText = parseFloat(weight/((height/100)**2)).toFixed(1);
// // });

// function cal(){
//     document.querySelector(".finalScore").innerText = parseFloat(weight/((height/100)**2).toFixed(1));
// }

function cal(){
    let wt = parseInt(document.querySelector(".enteredWeight").value);
    let ht = parseInt(document.querySelector(".enteredHeight").value);
    let res = document.querySelector(".finalScore");
    let result = document.querySelector(".result");
    let main1 = document.querySelector(".main1");
    const bmi = (wt/((ht*ht)/10000)).toFixed(2);
    // res.value = parseFloat(bmi);

    setTimeout(()=>{
      main1.style.display = "block";
      result.style.display = "block";
      setTimeout(()=>{
        // result.style.display = "block";
        res.value = parseFloat(bmi);
      }, 1200);
    }, 1000);

    setTimeout(()=>{
      if (bmi < 18.5) {
      document.getElementById("status").innerHTML = "UNDER WEIGHT"
    } else if (bmi < 25) {
      document.getElementById("status").innerHTML = "NORMAL"
    } else if (bmi < 30) {
      document.getElementById("status").innerHTML = "OVER WEIGHT"
    } else {
      document.getElementById("status").innerHTML = "OBESE"
    }
    }, 2500);

    
  }
  
