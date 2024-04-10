const form = document.querySelector(".Form")

const Gender = document.getElementById("Gender")

const Age = document.getElementById("Age")

const Weight = document.getElementById("Weight")

const Height = document.getElementById("Height")

const Activity = document.getElementById("Activity")

const Goal = document.getElementById("Goal")

const Table = document.getElementById("resultTable")
    Table.style.display="none"

 


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    Calculate();
    
})



function Calculate(){
   
    let genderKcal = Gender.value == 0? 5 : -161;
    let bmr= 10 * Weight.value + 6.25 * Height.value - 5 * Age.value + genderKcal
    let calories = bmr * (Activity.value* 0.175 + 1.2) + (Goal.value ==0 ? 0 : Goal.value == 1 ? -500 : 500)


   let protein = calories * 0.3 / 4;

   let carb = calories * 0.4 / 4;
   
   let fat = calories * 0.3 / 9;

  document.getElementById("proteinResult").textContent = Math.round(protein)+"g";
  document.getElementById("carbResult").textContent = Math.round(carb)+"g";
  document.getElementById("fatResult").textContent = Math.round(fat)+"g";
  document.getElementById("caloriesResult").textContent = Math.round(calories);
  
  Table.style.display=""

    

}
 