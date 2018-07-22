apps.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/recomendaciones", {
        templateUrl : "recomendaciones.html"
    })
    .when("/tutos", {
        templateUrl : "tutoriales.html"
    })
    .when("/dudas", {
        templateUrl : "dudas.html"
    });
});