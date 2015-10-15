/**
 * Created by esko on 9/25/15.
 */
(function () {

	"use strict";

	angular
		.module('reverseVisionContact')
		.controller('ContactController', ContactController);

	//ContactController.$inject = [''];

	/* @ngInject */
	function ContactController() {
		/* jshint validthis: true */
		var vm = this;

		vm.activate = activate;

		activate();

		////////////////

		function activate() {
		}

		function age(first, second) {
			if(second && first){
				return (second-first)/(1000*60*60*24*365);
			}
			else
			{
				return 0;
			}
		}

		vm.open = function($event, opened) {
			if (opened === 'opened2') {
				vm.status.opened = true;
			} else if(opened === 'opened1') {
				vm.dobStatus.isopen = true;
			}
		};
		vm.dobOpen = function($event, opened) {
			vm.dobStatus.isopen = true;
		};

		vm.status = {
			opened: false
		};

		vm.items = [
			'The first choice!',
			'And another choice for you.',
			'but wait! A third!'
		];

		vm.dobStatus = {
			isopen: false
		};

		vm.toggled = function(open) {
			//$log.log('Dropdown is now: ', open);
		};

		vm.toggleDropdown = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			//$scope.status.isopen = !$scope.status.isopen;
			vm.status.opened = !vm.status.opened;
			vm.dobStatus.isopen = !vm.dobStatus.isopen;
		};

	}

})();
