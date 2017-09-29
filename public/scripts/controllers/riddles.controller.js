myApp.controller( 'RiddlesController', [ 'RiddlesService', function( RiddlesService ){
    console.log( 'NG' );
    var vm= this;
    vm.sendMePunches = [];

    vm.getRiddles = function () {
        console.log('on getRidde')
        RiddlesService.getRiddles().then(function (response) {
            vm.sendMePunches = response.data;
        });
    }

    vm.addRiddle = function () {
        console.log('clikc add riddle!')
        var riddleToAdd = {
            creator: vm.creatorIn,
            setup: vm.setupIn,
            punchline: vm.punchlineIn
        }
        RiddlesService.postRiddle(riddleToAdd).then( function (resp) {
            console.log('response to POST:', resp)
            vm.creatorIn = '';
            vm.setupIn = '';
            vm.punchlineIn = '';
            vm.getRiddles();
        }
        );
    }//ENd addRiddles 
    vm.getRiddles();
    
}]);