var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    //$routeProvider
    //.when("/", {
    //    templateUrl: "pizzostronka.html"
    //})
    //.when("/menu", {
    //    templateUrl: "menu.html"
    //})
    //.when("/kontakt", {
    //    templateUrl: "kontakt.html",
    //})
    //.when("/o nas", {
    //    templateUrl: "o nas.html"
    //})
    //.when("/nasze produkty", {
    //    templateUrl: "nasze produkty.html"
    //})
    //.when("/aktualnosci", {
    //    templateUrl: "aktualnosci.html"
    //})
    //.when("/pizza napoletana", {
    //    templateUrl: "pizza napoletana.html"
    //})
    //.when("/koszyk", {
    //    templateUrl: "koszyk.html"
    //})
    //.when("/realizacja", {
    //    templateUrl: "realizacja.html"
    //})
    //.when("/strona logowania", {
    //    templateUrl: "strona logowania.html"
    //});

    $locationProvider.html5Mode(true);
});