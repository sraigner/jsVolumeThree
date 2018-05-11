
var myCoffee = {
    flavor: "espresso" ,
    temperature: "piping hot",
    ounces: 100,
    milk: true,
    
    reheat: function() {
        if (myCoffee.temperature === "cold"){
            myCoffee.temperature = "piping hot";
            alert(myCoffee.temperature);
        }
    }
};

alert("test");


myCoffee.termperature = "cold";
myCoffee.reheat();
// alert(myCoffee.temperature);

