//N0-1
function feetToMile(feet) {
    return feet/5280;
}
var mile=feetToMile(100);

console.log(mile);
//NO-2
function woodCalculator(chair,table,bed){
     c=1*chair;
     t=3*table;
     b=5*bed;

     sum=c+t+b;
     return sum;

}

totalWood= woodCalculator(2,3,1);
console.log(totalWood);



//No-3
function brickCalculator(totalFloor){
    if(totalFloor <= 10)
    {
        feet = totalFloor * 15;
    }
    else if(totalFloor <= 20)
    {
        feet = 150 + ((totalFloor-10) * 12);
    }
    else{
        feet= 270+ ((totalFloor-20)*10)
    }

    totalBrick=feet*1000;
    return totalBrick;
}
var floor= brickCalculator(13);
console.log(floor);

//No-4

const nam = ['rashid', 'bappy', 'ayan', 'jim', 'chan', 'tibro'];
const tinyFriend = nam => {
   const creds = nam.reduce((acc, val, index) => {
      let { ind, len } = acc;
      if(val.length < len){
         len = val.length;
         ind = index;
      };
      return { ind, len };
   }, {
      ind: -1,
      len: 50
   });
   return nam[creds['ind']];
};
console.log(tinyFriend(nam));

