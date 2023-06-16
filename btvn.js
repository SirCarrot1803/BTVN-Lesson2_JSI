//Bài 1
// arr1 = [1,2,4,5,6]; 
// arr2 = [1,6,8,9,0];
// // // const MyArr = [...arr1,...arr2];
// // console.log(MyArr);
// let ArrA = [...arr1,...arr2];
// myArr = ArrA.filter((item,index) => ArrA.indexOf(item) !== index);
// console.log(myArr)

//Bài 2
// arr1 = [1,54,6,7] ;
// const newArr = arr1.map(num => num + 5);
// console.log(newArr);

//Bài 3
// m = [1,2,4,5,6,7];
// n = [3,5,675,8,96];
// const Arr2 =[...m,...n];
// NewArr = Arr2.filter(num => num != 1 && num!= 8 && num != 96 && num != 7);
// console.log(NewArr)

//Bài 4
players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },
]
console.log(players);
function ArrToObj(array) {
    const initialValue = {};
    return array.reduce((obj, item) => {
        obj[item.id] = { id: item.age, name: item.name ,age: item.age };
        return obj; 
    }, initialValue);
  }

  const playersModified = ArrToObj(players);
  console.log(playersModified)





