//需求：创建一个函数  传递两个参数name 和age    ，返回包含name和age 连个属性的对象
//ES5
/*function people(name,age ){
    return {
        name:name,
        age:age
    }
}*/

//es6
function people(name,age ){
    return {
        name,
        age
    }
}

console.log( JSON.stringify(people('abc',12)) );
