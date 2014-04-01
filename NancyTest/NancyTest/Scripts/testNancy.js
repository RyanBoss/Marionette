window.PageView = Backbone.View.extend(
    {
        el: $('body'),
        initialize: function() {
            this.screenView = new window.ScreenView();
        }
    });
window.ScreenView = Backbone.View.extend({
    el: "#screen",
    events: {
        'click #button1': 'getNancy'
    },
    initialize: function() {
        this.$el.html("<input type = 'button' id='button1'></input>");
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
})