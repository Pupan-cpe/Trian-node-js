# Trian-node-js

 arrow function
------------------------------
const showdata = (a,b) => a +b ;
console.log(showdata(10,2)); 
------------------------------

 destructuring ASsignment
     new in es6 เราสามารถเปลี่ยนค่า object หรือค่าของ arry ให้กลับมาเป็นตัวแปรได้  (แยกรายตัว)

    const user = {
        name: 'pupan',
        salary: '59999',
        address:{
            province: 'NKP',
            Postcode:'48170'
        }
        
    }
const {name , salary, address:{province}} = user;
console.log(province);


const showdata = ({name, salary}) => {
    return `
    ${name},
    ${salary}
    `
}
console.log(showdata(user));

spread Operator (กระจาย  arry & object)  --->  ...  <--- 

let a1 = [ 1,2,3,4,5];
let a2 = [6,7,8,9,10];

console.log(...a1 , ...a2);



 Defualt Arguments

function f (a,b = "defualt", c =3){
    return `
    ${a} -  ${b} - ${c}`;
}

f(5,6,7);
f(5,6);
f(5);
f();
console.log(f);

arry for of -------------------------------------------

const drink = ['coke' , 'grenntea', 'pepsi']

for (const  d of drink){
    console.log(d);
}
for (const  d in drink){
    console.log(d);
}

const users = [
    {id:1 , name: 'pupan'},
    {id:2 , name: 'poulkaew'},
    {id:3 , name: 'doh'},

]

for(const user of users){
    console.log(`${user.id} ${user.name}`);
    console.log(
        ` "1 pupan
    2 poulkaew
    3 doh" `);
}

------------------------

