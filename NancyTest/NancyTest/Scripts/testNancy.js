var ContentView = Backbone.Marionette.ItemView.extend({
    template: '#content-template',
    events: {
        'click #button1': 'getNancy'
    },
    getNancy: function() {
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
                $("#screen").html(results[0].value);
            }
        });
    }
});