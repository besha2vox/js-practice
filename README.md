# js-practice

You should create a function constructor **'FrontendLab'** which you can call with two arguments students and faildLimit.

<p></p>

Instance of **FrontendLab** should have 2 property fields: **failedHpmeworksLimit** and **studentsList**. This fields shold be hidden from user.
Instance of student should provide the following methods to get or change it's state.

<p></p>

**printStudentList()**: this method log to console list of students with their homeworks results.

<p></p>

**addHomeworkResults(homeworkResults)**: this method can be called with argument **homeworkResults**, object with 2 fields: **topic**(string) and **results**(array of objects with 2 fields: **email**(string) and **success**(boolean)). This method should update all student objects in **FrontendLab** **studentsList**.

<p></p>

**printStudentsEligibleForTest()**: this method should log to console list of students who didn't fail more homework, than allowed **failedLimit**.

=============

Ви повинні створити конструктор функції **«FrontendLab»**, який можна викликати за допомогою двох аргументів students і **faildLimit**.

<p></p>

Примірник FrontendLab повинен мати 2 поля властивостей: **failedHpmeworksLimit** і **studentsList**. Ці поля мають бути приховані від користувача.
Екземпляр студента повинен надавати такі методи, щоб отримати або змінити його стан.

<p></p>f

**printStudentList()**: цей метод записує на консоль список студентів із результатами виконання домашніх завдань.

<p></p>

**addHomeworkResults(homeworkResults)**: цей метод можна викликати за допомогою аргументу homeworkResults, об’єкта з 2 полями: **topic**(string) і **results**(масив об’єктів із 2 полями: **email**(string) і **success**(boolean)). Цей метод має оновлювати всі об’єкти студентів у **FrontendLab** **studentsList**.

<p></p>

**printStudentsEligibleForTest()**: цей метод має реєструвати в консолі список студентів, які не склали більше домашніх завдань, ніж дозволено **FailLimit**.
