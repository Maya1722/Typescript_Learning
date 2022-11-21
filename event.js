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
var eventManagement = /** @class */ (function () {
    function eventManagement() {
    }
    eventManagement.prototype.Display = function () {
        console.log("Event management");
    };
    return eventManagement;
}());
var organizer = /** @class */ (function (_super) {
    __extends(organizer, _super);
    function organizer(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    organizer.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("Id: ".concat(this.id, " Name of organizer:").concat(this.name));
    };
    return organizer;
}(eventManagement));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(id, name, description, starttime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.starttime = starttime;
        return _this;
    }
    events.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("Id: ".concat(this.id, " name of organizer: ").concat(this.name, " Event Description: ").concat(this.description, " Time: ").concat(this.starttime, " PM"));
    };
    return events;
}(eventManagement));
var venue = /** @class */ (function (_super) {
    __extends(venue, _super);
    function venue(id, name, description, starttime, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.starttime = starttime;
        _this.address = address;
        return _this;
    }
    venue.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("Id: ".concat(this.id, " Name of organizer: ").concat(this.name, " Venue Description: ").concat(this.description, " Time: ").concat(this.starttime, "PM Address:").concat(this.address, " "));
    };
    return venue;
}(eventManagement));
var Manage = new Array(new organizer(101, "maya shingne"), new events(123, "Anil shingne", "Birthday", 11), new venue(103, "Smiral", "Birthday", 4, "pune"));
for (var _i = 0, Manage_1 = Manage; _i < Manage_1.length; _i++) {
    var eve = Manage_1[_i];
    eve.Display();
}
