

const typeCasting_omit = () => {
    let port:unknown = '3000';

    let portNumber = <number>port;


    type EmployedPerson = {
        id: number;
        name: string;
        age: number;
        workplace: string;
    }

    type unemployedPerson = Omit<EmployedPerson, "workplace">;


    let employee1: EmployedPerson = {
        id: 1,
        name: "Jade",
        age: 25,
        workplace: "Teac to give"
    };

    let student: unemployedPerson = {
        id: 465456,
        name: "Julius",
        age:21
    }
}
export default typeCasting_omit;