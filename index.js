//  arrow function
// ----------
// const showdata = (a,b) => a +b ;
// console.log(showdata(10,2)); 
// --------------

//  destructuring ASsignment
    //  new in es6 เราสามารถเปลี่ยนค่า object หรือค่าของ arry ให้กลับมาเป็นตัวแปรได้  (แยกรายตัว)

    const user = {
        name: 'pupan',
        salary: '59999',
        address:{
            province: 'NKP',
            Postcode:'48170'
        }
        
    }
const {name , salary, address:{province}} = user;
// console.log(province);

// แบบปกติ
const showdata = ({name, salary}) => {
    return `
    ${name},
    ${salary}
    `
}
console.log(showdata(user));
