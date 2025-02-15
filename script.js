function callAFunction() {
    let initialPopulation = parseFloat(prompt("Input the initial population: "));
    let rateOfGrowth = parseFloat(prompt("Input the rate of growth: ")) / 100;
    let timeInHours = parseFloat(prompt("Input the time in hours: "));
    let exponentialPopulationGrowth = Math.round(initialPopulation * Math.pow(Math.E,rateOfGrowth*timeInHours));   let location = prompt("input the region/location of the monster: ");
    let monsterName = prompt("input the name of the monster: ");
    let monsterInfo = location.concat(" ", monsterName).toUpperCase();
  
    document.getElementById('result').innerHTML = "After " + timeInHours + " hours," + " the population of " + monsterInfo + " has risen to " + exponentialPopulationGrowth;
}
