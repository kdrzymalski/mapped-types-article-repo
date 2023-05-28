// Option 1 (recommended)

type Car = {
    engine: string,
    price: number,
    numberOfSeats: number
}

type ReadonlyCar = Readonly<Car>

// Option 2

// type ReadonlyCar = {
//     readonly engine: string,
//     readonly price: number,
//     readonly numberOfSeats: number
// }

// Keyof

type CarKeys = keyof Car // "engine" | "price" | "numberOfSeats"


// Own Mapping

type OptionalReadonlyNumbers<Type> = {
    readonly [P in keyof Type]?: number
}

type MyCustomObject = {
    first: string,
    second: number,
    third: boolean,
}

type MyTransformedCustomObject = OptionalReadonlyNumbers<MyCustomObject>

const objectWithOnlyNumbers: MyTransformedCustomObject = {
    first: 12,
    second: 13,
    // third: "test" => will cause error
}

// objectWithOnlyNumbers.first = 123 => will cause error


/// Marking as deprecated Property

interface OldInterface {
    property1: number;
    property2: boolean;
    property3: string;
}

type MarkAsDeprecated<OldType> = {
    [K in keyof OldType as `deprecated_${string & K}`]: OldType[K];
};

type DeprecatedType = MarkAsDeprecated<OldInterface>

type DeprecatedKeys = keyof DeprecatedType // "deprecated_property1" | deprecated_property2" | "deprecated_property3"



/// Removing Property

type RemoveProperty2<T> = {
    [K in keyof T as Exclude<K, "property2">]: T[K]
};

type WithoutProperty2Type = RemoveProperty2<OldInterface>

type WithoutProperty2TypeKeys = keyof WithoutProperty2Type // "property1" | "property2"


// let car: Car = {
//     engine: 'asd',
//     price: 123
// }
//
// car.engine
// car.price