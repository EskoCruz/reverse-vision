(function() {
  'use strict';

  angular
    .module('reverseVisionContact')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
