function getIpInfo() {
    $.ajax({
        url: 'https://freegeoip.net/json/',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            var json = {};
            json['value1'] = $(location).attr('hostname');
            json['value2'] = data['ip'];
            json['value3'] = data['city'] + ' / ' + data['country_code'] + ' [' + data['latitude'] + ' ' + data['longitude'] + ']';

            $.ajax({
                url: 'https://maker.ifttt.com/trigger/web/with/key/dCkcLEwU6kWOalQayTbEP7',
                data: json,
                contentType: "application/json; charset=utf-8",
                type: 'POST',
                crossDomain: true,
                dataType: 'jsonp'
            });
        }
    });
}