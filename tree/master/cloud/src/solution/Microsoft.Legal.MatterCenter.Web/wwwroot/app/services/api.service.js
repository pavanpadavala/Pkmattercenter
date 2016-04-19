﻿'use strict';

angular.module('matterMain')
  .factory('api', ['matterResource',
    function api(matterResource) {
        var resources = {
            'matterResource': matterResource
        };

        function callAPI(options) {

            var resource = resources[options.resource];



            resource[options.method](options.data)
              .$promise.then(function (response) {
                  
                  options.success(response);
              }).catch(function (e) {
                  // $scope.$parent.vm.Error = true;
                  //vm.Error = true;
                  var message = 'oops something went wrong. ';
                  if (e.data != null)
                      if (e.data.Message != undefined)
                          message = e.data.Message;
                      else
                          message = e.data;
                  else
                      message = e.message + e.description + e.stack + e.number;

                 // alert(message);
                  //$scope.$parent.vm.guid = "kdsjfl";
                 // vm.guid = "kdsjfl";
                 
                  if (options.error) {
                      options.error(e);
                  } else {
                      ////if (e.status === 500) {
                      ////    window.location.href = "/Error/Index";
                      ////}
                      ////else {
                      ////    //ErrorNotification.notifyError(e.status);
                      ////}
                  }
              }).finally(function () {

              });

        }

        return function (api_options) {
            var apiOptions = api_options || {};
            if (!api_options.resource || !resources.hasOwnProperty(api_options.resource) ||
                !api_options.method || !api_options.success) {
                throw new Error('Invalid request. API, method and success are required.');
            }
            api_options.data = api_options.data || {};
            callAPI(apiOptions);
        };

    }]);