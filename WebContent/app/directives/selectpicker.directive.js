/**
 * 
 */
(function () {
  'use strict';

  angular.module('ECommerce')
      .directive('selectpicker', selectpicker);

  /** @ngInject */
  function selectpicker($timeout) {
    return {
      restrict: 'A',
      require: '?ngOptions',
      priority: 1500, // make priority bigger than ngOptions and ngRepeat
      
      link: {
        pre: function(scope, elem, attrs) {
          elem.append('<option data-hidden="true" disabled value="">' + (attrs.title || 'Select something') + '</option>')
        },
        post: function(scope, elem, attrs) {
          function refresh() {
        	$timeout(function () {
        		    elem.selectpicker('refresh');
        	});
          }

          if (attrs.ngModel) {
            scope.$watch(attrs.ngModel, refresh);
          }

          if (attrs.ngDisabled) {
            scope.$watch(attrs.ngDisabled, refresh);
          }
          
          elem.selectpicker({ dropupAuto: false, hideDisabled: true });
          
        }
      }
    };
  }


})();