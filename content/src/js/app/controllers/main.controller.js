app.controller('mainCtrl', function ($scope) {

    AOS.init({
        duration: 1200,
    })

    new BeforeAfter({
        id: '#mySlider'
    });

});