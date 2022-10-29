# js-practice

You should create a function constructor _'FrontendLab'_ which you can call with two arguments students and faildLimit.

<p></p>

Instance of _FrontendLab_ should have 2 property fields: _failedHpmeworksLimit_ and _studentsList_. This fields shold be hidden from user.
Instance of student should provide the following methods to get or change it's state.

<p></p>

_printStudentList()_: this method log to console list of students with their homeworks results.

<p></p>

_addHomeworkResults(homeworkResults)_: this method can be called with argument _homeworkResults_, object with 2 fields: _topic_(string) and _results_(array of objects with 2 fields: _email_(string) and _success_(boolean)). This method should update all student objects in _FrontendLab_ _studentsList_.

<p></p>

_printStudentsEligibleForTest()_: this method should log to console list of students who didn't fail more homework, than allowed _failedLimit_.

=============

Ви повинні створити конструктор функції _«FrontendLab»_, який можна викликати за допомогою двох аргументів students і _faildLimit_.

<p></p>

Примірник FrontendLab повинен мати 2 поля властивостей: _failedHpmeworksLimit_ і _studentsList_. Ці поля мають бути приховані від користувача.
Екземпляр студента повинен надавати такі методи, щоб отримати або змінити його стан.

<p></p>

_printStudentList()_: цей метод записує на консоль список студентів із результатами виконання домашніх завдань.

<p></p>

_addHomeworkResults(homeworkResults)_: цей метод можна викликати за допомогою аргументу homeworkResults, об’єкта з 2 полями: _topic_(string) і _results_(масив об’єктів із 2 полями: _email_(string) і _success_(boolean)). Цей метод має оновлювати всі об’єкти студентів у _FrontendLab_ _studentsList_.

<p></p>

_printStudentsEligibleForTest()_: цей метод має реєструвати в консолі список студентів, які не склали більше домашніх завдань, ніж дозволено _FailLimit_.
