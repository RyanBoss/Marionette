var ScreenView = Backbone.Marionette.Layout.extend({
    template: '#screen-template'
});

var ContentView = Backbone.Marionette.Layout.extend({
    template: '#content-template',
    events: {
        'click #button1': 'getNancy'
    },
    initialize: function() {
        this.addRegion("screen", "#screen");
    },
    onRender: function () {
        var myModel = new Backbone.Model({ foo: "bar" });
        this.screen.show(new ScreenView({model: myModel}));
    },
    getNancy: function () {
        $.ajax({
            url: "services/",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                var results = [];
                if (data.length == 0) {
                    result.push({
                        label: "no results found",
                        value: ""
                    });
                } else {
                    results.push({
                        label: "nancyTestSuccess",
                        value: data
                    });
                }
                this.screen.show(new ScreenView({ data: results[0].value }));
            }
        });
    }
});