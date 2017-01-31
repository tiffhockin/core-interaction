ClassChat = {
	url: "http://162.243.34.61:9331",
	sendChat: function(_username, _text, _special) {
		_special = (typeof _special === 'undefined') ? "" : _special;
		var self = this;

		$.get( self.url+"/chat/new/", {
			username: _username,
			text: _text,
			special: _special
		}, function( data ) {
		}, "jsonp");
	},
	getChats: function() {
		clearTimeout( this.t );

		var self = this;
		
		$.get( self.url+"/chat/history/", function( data ) {
			if( data && data.chats ) {
				for( var i = 0; i < data.chats.length; i++ ) {
					if( self.chathistory[data.chats[i].cid] == undefined ) {
						self.chathistory[data.chats[i].cid] = {
							"text": data.chats[i].text,
							"username": data.chats[i].username,
							"special": data.chats[i].special
						}

						if (typeof newChat == 'function') { 
							newChat( data.chats[i].username, data.chats[i].text, data.chats[i].special );
						}
					}
				}
			}
		}, "jsonp");

		var self = this;
		this.t = setTimeout(function(){
			self.getChats();
		}, 1000 );
	},
	chathistory: {},
	t:0,
	start: function() {
		this.getChats();
	}
}