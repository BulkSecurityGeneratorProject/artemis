(function() {
    'use strict';

    angular
        .module('artemisApp')
        .controller('AddressController', AddressController);

    AddressController.$inject = ['Address'];

    function AddressController(Address) {

        var vm = this;

        vm.addresses = [];

        loadAll();

        function loadAll() {
            Address.query(function(result) {
                vm.addresses = result;
                vm.searchQuery = null;
            });
        }
    }
})();
