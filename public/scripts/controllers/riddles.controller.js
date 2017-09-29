myApp.controller('RiddlesController', ['RiddlesService', function (RiddlesService) {
    console.log('NG');
    var vm = this;
    vm.sendMePunches = [];
    vm.showSetup = true;
    vm.current;

    vm.toggle = function () {
        vm.showSetup = !vm.showSetup;
    };

    vm.nextRiddle = function () {
        if (vm.current.index === (vm.sendMePunches.length - 1)) {
            vm.current = {
                index: 0,
                riddle: vm.sendMePunches[0]
            };
        } else {
            var currIndex = vm.current.index;

            vm.current = {
                index: currIndex + 1,
                riddle: vm.sendMePunches[currIndex + 1]
            };
        }
    }

    vm.prevRiddle = function () {
        if (vm.current.index === 0) {
            vm.current = {
                index: vm.sendMePunches.length - 1,
                riddle: vm.sendMePunches[vm.sendMePunches.length - 1]
            };
        } else {
            var currIndex = vm.current.index;

            vm.current = {
                index: currIndex - 1,
                riddle: vm.sendMePunches[currIndex - 1]
            };
        }
    }


    vm.getRiddles = function () {
        RiddlesService.getRiddles().then(function (response) {
            vm.sendMePunches = response.data;
            console.log(vm.sendMePunches.length)
            vm.current = {
                index: 0,
                riddle: vm.sendMePunches[0]
            };
        });
    }

    vm.addRiddle = function () {
        console.log('clikc add riddle!')
        var riddleToAdd = {
            creator: vm.creatorIn,
            setup: vm.setupIn,
            punchline: vm.punchlineIn
        }
        RiddlesService.postRiddle(riddleToAdd).then(function (resp) {
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