myApp.service( 'RiddlesService', function( $http ){
    var sv= this;
 sv.postRiddle = function (riddle){
    return $http({
        method: 'POST',
        url: '/riddles',
        data: riddle
    });//END $http post
 }//END postRiddle

 sv.getRiddles = function (){
    return $http({
        method: 'GET',
        url: '/riddles',

    });
 }
});