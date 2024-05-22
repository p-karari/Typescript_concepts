const myFunction = () => {
    const add = (a:number, b: number) : number => {
        return a + b;
    }
    console.log(add(4, 1));

    // optional parameters
    const fullName = (firstName: string, lastName?: string): string => {
        return lastName ? `${firstName} ${lastName}` : firstName;

    }
    console.log(fullName('John', 'Doe'));

    //default parameters
    const getSalary = (basic: number, bonus:number = 0): number => {
        return basic + bonus;
    }

    console.log(getSalary(38000));

    const greet = (): void => {
        console.log("Hello you!");
    }

    greet();

    //rest parameters
    const addNumbers = (...numbers:number[]): number => {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
    console.log(addNumbers(1,2,3,4,5,15));
}
export default myFunction;