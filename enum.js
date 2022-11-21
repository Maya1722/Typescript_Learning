console.log("===============enum using season============");
var season;
(function (season) {
    season[season["summer"] = 0] = "summer";
    season[season["rain"] = 1] = "rain";
    season[season["winter"] = 2] = "winter";
})(season || (season = {}));
console.log(season.summer);
console.log(season.rain);
console.log(season.winter);
console.log(season[0]);
console.log(season[1]);
console.log(season[2]);
