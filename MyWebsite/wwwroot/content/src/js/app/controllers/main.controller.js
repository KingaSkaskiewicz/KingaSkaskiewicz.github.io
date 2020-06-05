app.controller('mainCtrl', function ($scope) {

    $(document).ready(function () {
        $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {

                    window.location.hash = hash;
                });
            }
        });
    })

    AOS.init({
        duration: 1200,
    })

    var slider = new BeerSlider(document.getElementById("slider1"));   

    $scope.onJumbotronBackgroundMouseEnter = function (direction) {
        slider.reveal(direction);
    }


   $scope.hiddenDivFirst = false;
   $scope.showDivFirst = function () {
       $scope.hiddenDivFirst = !$scope.hiddenDivFirst;
   };
   
   $scope.hiddenDivSecond = false;
   $scope.showDivSecond = function () {
       $scope.hiddenDivSecond = !$scope.hiddenDivSecond;
   };


});