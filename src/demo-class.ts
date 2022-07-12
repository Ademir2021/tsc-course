// Classes
class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void{
        if(canShow){
            console.log(`idade do usuario é: ${this.role}`)
            return
        }
        console.log("Informação retrita");
    }
}

const zeca = new User("Zeca", 'Admin', true);
console.log(zeca);

zeca.showUserName();
zeca.showUserRole(true);

//interfaces
interface Ivehicle{
    brand: string
    showBrand(): void
}

class Car implements Ivehicle{
    brand
    wheels
    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("W", 4);

fusca.showBrand();