ClassDB = {
	url: "http://162.243.34.61:9332",
	setValue: function(_key, _value, _callback) {
		var self = this;

		$.get( self.url+"/db/set/", {
			key: _key,
			value: _value
		}, function( data ) {
			_callback(data);
		}, "jsonp");
	},
	getValue: function(_key, _callback) {
		var self = this;
		
		$.get( self.url+"/db/get/", {
			key: _key
		}, function( data ) {
			_callback(data);
		}, "jsonp");
	}
}