var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.print = function () {
        console.log("hello person");
    };
    return person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(firstName, lastName, description) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.description = description;
        return _this;
    }
    student.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(" hii ".concat(this.firstName, " ").concat(this.lastName, " i am ").concat(this.description, " of MGM college"));
    };
    return student;
}(person));
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(firstName, lastName, description) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.description = description;
        return _this;
    }
    employee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(" hii ".concat(this.firstName, " ").concat(this.lastName, " i am ").concat(this.description, " of wipro company"));
    };
    return employee;
}(person));
var s = new student("anil", "shingne", "student");
s.print();
var e = new employee("maya", "shingne", "employee");
e.print();
