// Generics

function showArrayItems<T>(arr: T[]){
    arr.forEach((item)=>{
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArrayItems(a1);
showArrayItems(a2);