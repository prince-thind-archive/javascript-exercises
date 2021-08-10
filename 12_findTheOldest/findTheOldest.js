const findTheOldest = function (arr) {
  let oldest=arr[0];

  for(let obj of arr){
      let age=0;

      if(obj.hasOwnProperty("yearOfDeath")){
          age=obj.yearOfDeath-obj.yearOfBirth;
      }
      else{
          age=(new Date()).getFullYear()-obj.yearOfBirth;
      }

      if(oldest.hasOwnProperty("yearOfDeath")){
          if(oldest.yearOfDeath-oldest.yearOfBirth<age){
            oldest=obj;
          }
      }
      else{
          if((new Date()).getFullYear()-oldest.yearOfBirth<age){
              oldest=obj;
          }
      }
  }
  return oldest;
  
};

module.exports = findTheOldest;

