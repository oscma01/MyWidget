///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(['dojo/_base/declare', 'jimu/BaseWidget'],
    function (declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
        // Custom widget code goes here

        baseClass: 'jimu-widget-mywidget',

        //this property is set by the framework when widget is loaded.
        //name: 'CustomWidget',


        //methods to communication with app container:

        // postCreate: function() {
        //   this.inherited(arguments);
        //   console.log('postCreate');
        // },

        startup: function () {
            this.inherited(arguments);

            console.log('startup');
        },

        onOpen: function () {

            var zoom = this.map.getZoom();
            var MapSpaceZoom = 0;
            if (zoom >= 20) {
                MapSpaceZoom = 5;
            } else if (zoom < 20 && zoom >= 18) {
                MapSpaceZoom = 4;
            } else if (zoom < 18 && zoom >= 17) {
                MapSpaceZoom = 3;
            } else if (zoom < 17 && zoom >= 15) {
                MapSpaceZoom = 2;
            } else {
                MapSpaceZoom = 1;
            }


            var MapSpaceURL = 'https://your.mapspace.com/index.html?workspace=Default_penta&srs=EPSG:3008&zoom=' + MapSpaceZoom + '&y=' + (this.map.extent.ymin + this.map.extent.ymax) / 2 + '&x=' + (this.map.extent.xmin + this.map.extent.xmax) / 2;

            window.open(MapSpaceURL, '_blank');
			var panel = this.getPanel();
			panel.panelManager.closePanel(panel);      

            console.log('onOpen');
            console.log(MapSpaceZoom);
        },

         onClose: function(){
           console.log('onClose');
         },

        // onMinimize: function(){
        //   console.log('onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('onMaximize');
        // },

        // onSignIn: function(credential){
        //   /* jshint unused:false*/
        //   console.log('onSignIn');
        // },

        // onSignOut: function(){
        //   console.log('onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('onPositionChange');
        // },

        // resize: function(){
        //   console.log('resize');
        // }

        //methods to communication between widgets:

    });
});
