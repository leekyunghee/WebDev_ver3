require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        views : '../app/views',
        models : '../app/models',
        collection : '../app/collection',
        tpl: '../tpl'
    },

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
        }
    }
});

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
	var _sync = Backbone.sync;
	Backbone.sync = function(method, model, options) {
		method='create';
		options.contentType = 'application/json';
		options.dataType = 'json';
		
		_sync(method, model, options);
	};
	console.log('start app');
    var router = new Router();
    Backbone.history.start();
});