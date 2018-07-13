function mash(){
    const final = "You will live in a " + gethome() +  " and you will have " + getChildrenCount() + " kids. You will drive " + getcar() +" and you will be married to " + getWife();
    console.log(final);
}
 
//console.log(mash());


let house =[ "Mansion", "Apartment", "Shack", "House"]
function gethome(){
    const decimal = Math.random();
    const gethome  = decimal * house.length; 
    const round  = Math.floor(gethome); 
    const location= house [round] 
    return location 
} 

function getChildrenCount() {
    const children = Math.floor(Math.random()*100); 
     return children 
}
 //console.log(getChildrenCount()); 

 let car = ["lambo", "yourmumscar", "garabgetruck", "rocketship"]
    function getcar(){
        const rand  = Math.random()*car.length;
        const wholenumb = Math.floor(rand); 
        const randCar = car[wholenumb];
        return randCar;

    } 
    let wife = ["Jessica", "Kylie", "Kim", "Kendall"]
    function getWife(){
        const rand  = Math.random()*wife.length;
        const wholenumb = Math.floor(rand); 
        const randWife = wife[wholenumb];
        return randWife;

    } 
mash();