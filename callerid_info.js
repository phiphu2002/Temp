var exten = 1000;
$(function () {
    exten = SIP;

    // JavaScript source code
    var SOCKETIO_SERVER = 'http://192.168.1.91:8089';

    var socket = io(SOCKETIO_SERVER);
    //var exten = SIP;//SIP extern should be fetched from ChangeSip.cshtml
    console.log(exten);
    socket.emit('extension', exten);
    socket.on('callerid', function (caller_id) {
        //data is NguoiDungViewModel class
        httpGet("/YeuCauKhachHag/LoadNguoiDung", { search: caller_id }, false).then(function (data) {
            var mwin = window.open('', 'CallerId Info', 'width=400,height=400');
            mwin.document.write('<p> Phone : ' + caller_id + '</p>');
            mwin.document.write('<p> Name : ' + data.TenNguoiDung + '</p>');
        });
    });
});