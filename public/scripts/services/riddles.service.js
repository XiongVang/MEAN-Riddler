myApp.service( 'RiddlesService', function( $http ){
    var sv=this;
 sv.postRiddle = function (riddle){
    $http({
        method: 'POST',
        url: '/riddles',
        data: riddle
    }).then( function (resp) {
        console.log('response to POST:', resp)
    }
    )//END $http post
 }//END postRiddle

});