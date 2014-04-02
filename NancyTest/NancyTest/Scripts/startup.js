App = new Backbone.Marionette.Application();
App.addRegions({
    'content': '#container'
});

App.addInitializer(function (options) {
    App.content.show(new ContentView());
})
$().ready(function () {
    App.start();

    var url = window.location;
});