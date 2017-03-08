var app = angular.module("helloworldApp",[]);
app.controller('mainCtrl', function($scope) {
    $scope.entradaTexto = 'Hello Word!';

    $scope.exibirConteudo = function(texto){
      alert(texto);
    }
    $scope.juntarNome = function(nome, sobrenome){
      alert(nome +" "+ sobrenome);
    }
});
