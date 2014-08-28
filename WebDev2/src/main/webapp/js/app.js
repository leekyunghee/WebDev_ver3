require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        views: '../app/views',
        models: '../app/models',
        collection: '../app/collection',
        router : '../app/router',
        tpl: '../tpl',
        nls : '../../nls',
        bootstrap: '../../bootstrap/js/bootstrap'
    },

    // Set the config for the i18n
    locale : "en-us",
    
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap' : {
        	deps : ['jquery'],
        	exports: 'bootstrap'
        }
    }
});

require(['jquery', 'backbone', 'views/common/commonView', 'app/router', 'app/PageMove'], function ($, Backbone, CommonView, Router, PageMove) {
	var _sync = Backbone.sync;
	Backbone.sync = function(method, model, options) {
		method='create';
		options.contentType = 'application/json';
		options.dataType = 'json';
		
		_sync(method, model, options);
	};
	console.log('start app');
	
//	var router = new Router();
	Backbone.pageMove = PageMove; 
	
    Backbone.history.start();
});