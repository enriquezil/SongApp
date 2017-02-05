/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

//$(document).on('ready', function(){
//    // 2. This code loads the IFrame Player API code asynchronously.
//    var tag = document.createElement('script');
//
//    tag.src            = "https://www.youtube.com/iframe_api";
//    var firstScriptTag = document.getElementsByTagName('script')[0];
//    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//    // 3. This function creates an <iframe> (and YouTube player)
//    //    after the API code downloads.
//    var player;
//
//    function onYouTubeIframeAPIReady() {
//        player = new YT.Player('player', {
//            height : '390',
//            width  : '640',
//            videoId: 'M7lc1UVf-VE',
//            events : {
//                'onReady'      : onPlayerReady,
//                'onStateChange': onPlayerStateChange
//            }
//        });
//    }
//
//    // 4. The API will call this function when the video player is ready.
//    function onPlayerReady(event) {
//        event.target.playVideo();
//    }
//
//    // 5. The API calls this function when the player's state changes.
//    //    The function indicates that when playing a video (state=1),
//    //    the player should play for six seconds and then stop.
//    var done = false;
//
//    function onPlayerStateChange(event) {
//        if (event.data == YT.PlayerState.PLAYING && !done) {
//            setTimeout(stopVideo, 6000);
//            done = true;
//        }
//    }
//});


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.ytPlayerList = [];
window.players = [];

function addSong(id, divId, videoId)
{
    window.ytPlayerList.push({ Id: id, DivId: divId, VideoId: videoId});
}

function onYouTubeIframeAPIReady() {
    initVideos();
}

function initVideos() {
    for (var i = 0; i < ytPlayerList.length; i++) {
        var player = ytPlayerList[i];
        var pl = new YT.Player(player.DivId, {
            height: '0',
            width: '0',
            videoId: player.VideoId,
        });
        window[player.Id] = pl;
    }
}

//
//setTimeout(function() {
//    window.player.playVideo();
//}, 2000);
//

//addSong('player', 'player', 'IaHxPi9dM7o');
//addSong('player2', 'player2', 'IaHxPi9dM7o');
//addSong('player3', 'player3', 'IaHxPi9dM7o');
//setTimeout(function(){
//    onYouTubeIframeAPIReady();
//},2000);

function htmlSong(title, description, id, cont, videoId)
{
    html = '<div class="col-lg-12 col-md-offset-1">' +
            '<div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">' +
            '<div class="col-lg-2">' +
            '<span class="glyphicon glyphicon-play" data-cont="'+ cont +'"></span>' +
            '<form method="post" action="/song" class="form'+ cont +'">' +
            '<input type="hidden" value="'+ title +'" name="title"/>' +
            '<input type="hidden" value="'+ description +'" name="description"/>' +
            '<input type="hidden" value="'+ videoId +'" name="videoId"/>' +
            '<input type="hidden" name="_token" value="'+ $('input[name="_token"]').val() +'"/>' +
            '</form>' +
            '</div>' +
            '<div class="col-lg-3">' +
            '<div class="row">' +
            '<p>Título: '+ title +'</p>' +
            '</div>' +
            '<div class="row">' +
            '<p>Descripción: '+ description + '</p>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-7">' +
            '<a href="#" class="btn btn-default play" data-cont="'+ cont +'" role="button">Today</a>' +
            '<a href="#" class="btn btn-default friday" data-cont="'+ cont +'" role="button">Friday</a>' +
            '<div class="p" id="'+ id +'"></div>' +
            '</div>' +
            '</div>' +
            '</div>';

    return html;
}

function stopAll()
{
    for(var i = 0; i < window.ytPlayerList.length; i++)
    {
        window[window.ytPlayerList[i].DivId].stopVideo();
    }
}

$(document).ready(function()
{

    var _token = $('input[name="_token"]').val();
    $('#search').on('click', function(){
        inputSearch = $("#inputSearch").val();
        $.ajax({
            type: "POST",
            url: '/search',
            data: {'search' : inputSearch, _token : _token },
            success: function(result) {
                console.log(result);
                $(".song").html("");
                cont = 0;
                result.forEach(function (item) {
                    ++cont;
                    console.log(item.snippet);
                    title = item.snippet.title;
                    description = item.snippet.description;
                    $(".song").append(htmlSong(title, description, 'player' + cont, cont, item.id.videoId))
                    addSong('player' + cont, 'player' + cont, item.id.videoId);
                });
                setTimeout(function(){
                    onYouTubeIframeAPIReady(); // Trae videos
                },500);
            },
            error: function(result) {
                console.log(result);
            }
        });
    });


    $(document).on('click','.play', function(){
        id = $(this).attr('data-cont');
        id = 'player' + id;

        setTimeout(function(){
            stopAll();
            window[id].playVideo();
        },1000);
    });

    $(document).on('click','.friday', function(){
        id = $(this).attr('data-cont');
        id = 'player' + id;

        var date = new Date();
        var friday = 7;

        var today = date.getDay();
        var d = friday - today;
        if(d == 0)
        {
            window[id].playVideo();
        }
            $(".msg").append('Faltan ' + d + ' días para iniciar la canción');

    });

    $(document).on('click','.glyphicon-play', function(){
        cont = $(this).attr('data-cont');
        form = '.form' + cont;
        $(form).submit();

        //$.post( "/song", { title: title, description: description, videoId: videoId, _token : _token } )
        //    .done(function( data ) {
        //});
    });

});