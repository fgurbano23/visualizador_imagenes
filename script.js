var app = angular.module('App', []);

app.controller('Ctrl', function($scope){
  $scope.currentImage = 1;
  $scope.zoomImage = 0;
  $scope.pxToTranslate = 0;
  $scope.translateY={
    "transform":"translateY("+$scope.pxToTranslate+"px)"
  };

  $scope.data = [
    {
      "img":"download.png",
      "metadata":
        {
          "info":"1",
          "page":"1"
        }
    },
    {
      "img":"download.png",
      "metadata":
        {
          "info":"2",
          "page":"2"
        }
    },
     {
      "img":"download.png",
      "metadata":
        {
          "info":"3",
          "page":"3",
          "extar_field":"soy un extra"
        }
    },
    {
      "img":"download.png",
      "metadata":
        {
          "info":"4",
          "page":"4"
        }
    },
    {
      "img":"download.png",
      "metadata":
        {
          "info":"5",
          "page":"5"
        }
    },
     {
      "img":"download.png",
      "metadata":
        {
          "info":"6",
          "page":"6"
        }
    }
  ];

  // CAPTURA EL SCROLLSPY Y RETORNA SU VALOR ACTUAL EN $scope,currentImage;
  angular.element(document.querySelector('.image-wrapper')).bind('scroll', function(){
    let str = $('#myScrollspy').find("li.active a").attr("href");
    str=str.replace("#","")
    $scope.currentImage = parseInt(str);
    $scope.$apply();
  });


  // REDIRECCIONA A UNA PÁGINA ESPECÍFICA
  $scope.goToPage = function(page) {
    $scope.currentImage = page;
  }


  // REDIRECCIONAR A LA PÁGINA N SI SE CAPTURÓ UN CAMBIO DE PÁGINA
  $scope.$watch('currentImage', function(newValue,oldValue) {
    document.location.href="#"+$scope.currentImage;
    if(oldValue != newValue){
      if(oldValue < newValue){
        $scope.translateToNext();
      } else {
        $scope.translateToPrevious();
      }
    }
  });

  //ZOOM IN 
  $scope.zoomIn = function() {
    switch($scope.zoomImage){
      case 0 :
        $scope.zoomImage++;
        document.location.href="#"+$scope.currentImage;
        break;
      case 1:
        $scope.zoomImage++;
        document.location.href="#"+$scope.currentImage;
        break;
      case 2:
        $scope.zoomImage++;
        document.location.href="#"+$scope.currentImage;
        break;
      default:
        break;
    }
  }

    //ZOOM OUT 
  $scope.zoomOut = function() {
    switch($scope.zoomImage){
      case 3 :
        $scope.zoomImage--;
        document.location.href="#"+$scope.currentImage;
        break;
      case 2:
        $scope.zoomImage--;
        document.location.href="#"+$scope.currentImage;
        break;
      case 1:
        $scope.zoomImage--;
        break;
      default:
        break;
    }
  }

  // TRANSLADA A LA PÁGINA SI ES ANTERIOR
  $scope.translateToPrevious = function(){
      console.log($scope.pxToTranslate);
      console.log($scope.currentImage);
      $scope.pxToTranslate = ($scope.currentImage-1)*(-37);
      $scope.translateY={
        "transform":"translateY("+($scope.pxToTranslate)+"px)"
      };
  }

  // TRANSLADA A LA PÁGINA SI ES SIGUIENTE
  $scope.translateToNext = function(){
      $scope.pxToTranslate = ($scope.currentImage-1)*(-37);
      $scope.translateY={
        "transform":"translateY("+$scope.pxToTranslate+"px)"
      };
  }

  // MUESTRA LA PÁGINA ANTERIOR
  $scope.previousPages = function () {
    if($scope.currentImage > 1){
      $scope.currentImage--;
      $scope.translateToPrevious();
    }
  }

  // MUESTRA LA SIGUIENTE PÁGINA
  $scope.nextPages = function () {
    if($scope.currentImage < $scope.data.length){
      $scope.currentImage++;
      $scope.translateToNext();
    }
  }

  
});
