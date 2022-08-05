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
			//Ställ zoom-parametern för MapSpace URL:en
			var scale = this.map.getScale();
            var MapSpaceZoom = 0;
            if (scale <= 1000) {
                MapSpaceZoom = 5;
            } else if (scale > 1000 && scale <= 4000) {
                MapSpaceZoom = 4;
            } else if (scale > 4000 && scale <= 7500) {
                MapSpaceZoom = 3;
            } else if (scale > 7500 && scale <= 20000) {
                MapSpaceZoom = 2;
            } else {
                MapSpaceZoom = 1;
            }
			
			
			
			//Hämta centerpunkt och wkid i kartan
			var wkid = this.map.spatialReference.wkid;
			var center = this.map.extent.getCenter();
			
			//Skapa URL till MapSpace och öppna den i ny flik.
			var MapSpaceURL = 'https://your.mapspace.com/index.html?workspace=Default_penta&srs=EPSG:' + wkid + '&zoom=' + MapSpaceZoom + '&y=' + center.y + '&x=' + center.x;
			window.open(MapSpaceURL, '_blank');
			
			//Stäng Widgeten
			var panel = this.getPanel();
			panel.panelManager.closePanel(panel);      

            console.log('onOpen');
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
