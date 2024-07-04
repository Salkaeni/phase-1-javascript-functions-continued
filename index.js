function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
    
}
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Example usage of saturdayFun
  console.log(saturdayFun("bathe my dog")); // This Saturday, I want to bathe my dog!
  console.log(saturdayFun());               // This Saturday, I want to roller-skate!
  
  // mondayWork function
  const MondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
 
  console.log(mondayWork("work from home")); // This Monday, I will work from home.
  console.log(mondayWork());                // This Monday, I will go to the office.
  

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); // You are !!!amazing!!!
  console.log(encouragingPromptFunction());          // You are !!!special!!!
  
  const simplePromptFunction = wrapAdjective();
  console.log(simplePromptFunction("a hard worker")); // You are *a hard worker*!
  console.log(simplePromptFunction());     
