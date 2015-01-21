(function (app) {
    "use strict";

    app.controller("ContactsController", ContactsController);

    ContactsController.$inject = [];

    function ContactsController() {
        var vm = this;
        vm.contacts = [
            {id: 1, firstName: "Bob", lastName: "Billings", phone: "555-123-4567"},
            {id: 2, firstName: "Joe", lastName: "Shmoe", phone: "555-123-4567"},
            {id: 3, firstName: "Bob3", lastName: "Billings3", phone: "555-123-4567"},
            {id: 4, firstName: "Bob4", lastName: "Billings4", phone: "555-123-4567"}
        ];
    }

})(angular.module("contactApp"));