// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Наприклад, ось так:

abstract class House {
    constructor(protected key: Key, protected door?: boolean) {
    }
    comeIn(person: Person) {
        if(this.door === true) {
            console.log("You come in house!")
        } else {
            console.log("The door closed")
        }
    }
    abstract openDoor(key: Key): void;

}

class Key {
    private signature: number
    constructor() {
            this.signature = Math.floor(Math.random() * 10000); 
    }
    public getSignature(){
        this.signature
    }
}

class Person {
    constructor(private key: Key, public tenants: string[]){
    }
    public getKey(){
       return this.key
    }
    public getTenants(){
        return this.tenants
    }
}
class MyHouse extends House{
    constructor(protected key: Key) {
        super(key)
    }
    public openDoor(key: Key) {
        if(key === this.key) {
            this.door = true
            console.log("Door was opened")
        } else {
            throw Error("Invalid Key!")
        }
    }
}
const key = new Key();
const person = new Person(key, ["Anton", "Anna"]);
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);


// export {};