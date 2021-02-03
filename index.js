//  Promies
//  ถ้าใช้ .then & .cath แสดงว่าเป็น Asyncronus แน่นอน

const userlog = () => {
    return new Promise((resolve, reject)) => {
        setTimeout(( ) => {
            if(Math.random() >= 0.2) resolve('success')
            else { reject(new err('error'))}
        }, 1000)
    })
}



//  javaScript ES7 Async & Await

async function f(){

    try{
        let response = await fetch('/no-user-heare');
        let user = await response.json();
        console.log(user);

    } catch(error){
        alert(error);
    }
}
f();