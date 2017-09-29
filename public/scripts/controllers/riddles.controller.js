myApp.controller( 'RiddlesController', [ 'RiddlesService', function( RiddlesService ){
    console.log( 'NG' );
    var vm=this;

    vm.addRiddle = function () {
        console.log('clikc add riddle!')
        var riddleToAdd = {
            creator: vm.creatorIn,
            setup: vm.setupIn,
            punchline: vm.punchlineIn
        }
        RiddlesService.postRiddle(riddleToAdd);
    }//ENd addRiddles
}]);