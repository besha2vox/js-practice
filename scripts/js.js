import { listOfStudents, homeworkResults } from './data.js';

const Student = function (name, email) {
    const hwResults = [];

    this.getName = function () {
        return name;
    };

    this.getEmail = function () {
        return email;
    };

    this.getHomeworkResults = function () {
        return hwResults;
    };

    this.addHomeworkResult = function (topic, success) {
        const result = { topic, success };
        hwResults.push(result);
    };
};

const FrontendLab = function (students, failedLimit) {
    const failedHpmeworksLimit = failedLimit;
    const studentsList = students.map(
        ({ name, email }) => new Student(name, email)
    );

    this.printStudentsList = function () {
        studentsList.map((student) => {
            console.log(
                `name: ${student.getName()}, email:  ${student.getEmail()}`,
                student.getHomeworkResults()
            );
        });
    };

    this.addHomeworkResults = function (studentsResult) {
        studentsList.forEach((student) => {
            studentsResult.results.forEach((result) => {
                if (result.email === student.getEmail()) {
                    student.addHomeworkResult(
                        studentsResult.topic,
                        result.success
                    );
                }
            });
        });
    };

    this.printStudentsEligibleForTest = function () {
        return studentsList.forEach((student, i) => {
            const successResult = student
                .getHomeworkResults()
                .filter((result) => result.success === false).length;

            if (successResult === failedHpmeworksLimit) {
                console.log(
                    `name: ${student.getName()}, email: ${student.getEmail()}`
                );
            }
        });
    };
};

const frontendLab = new FrontendLab(listOfStudents, 1);

homeworkResults.forEach((result) => frontendLab.addHomeworkResults(result));
frontendLab.printStudentsList();
frontendLab.printStudentsEligibleForTest();
