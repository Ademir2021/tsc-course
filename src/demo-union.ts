// union type

let id: string | number | boolean = "10";

id = 200
id = true
// id = []

// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123