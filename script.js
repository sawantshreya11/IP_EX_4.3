
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
}

class Student extends Person {
    constructor(name, age, city, rollNo, course) {

        super(name, age, city);
        

        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }
        
        this.rollNo = rollNo;
        this.course = course;
    }


    getDetails() {
        
        const personDetails = super.getDetails();
        return `${personDetails}, Roll No: ${this.rollNo}, Course: ${this.course}`;
    }

    
    getStudentInfo() {
        return `Student: ${this.name} is enrolled in ${this.course} with Roll No: ${this.rollNo}.`;
    }
}


try {

    const student1 = new Student("Shreya", 20, "Mumbai", 54, "Computer Science");
    console.log(student1.getDetails()); 
    console.log(student1.getStudentInfo()); 

    
    const student2 = new Student("Bob", 22, "Los Angeles", 0, "Mathematics");
    console.log(student2.getDetails()); 
} catch (error) {
    console.error(`Error: ${error.message}`);
}
