Template.home.events({
    'click #btn-user-data': function(e) {
        Meteor.call('getUserData', function(err, data) {
             $('#result').text(JSON.stringify(data, undefined, 4));
         });
    },
    'click #btn-user-friends': function(e){
        Meteor.call('getFriendsData', function(err, data) {
            $('#result').text(JSON.stringify(data));
        });
    }
});
