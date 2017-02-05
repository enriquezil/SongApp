//// 2. This code loads the IFrame Player API code asynchronously.
//var tag = document.createElement('script');
//
//tag.src = "https://www.youtube.com/iframe_api";
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//window.ytPlayerList = [];
//window.players = [];
//
//function addSong(id, divId, videoId)
//{
//    window.ytPlayerList.push({ Id: id, DivId: divId, VideoId: videoId});
//}
//
//function onYouTubeIframeAPIReady() {
//    initVideos();
//}
//
//function initVideos() {
//    for (var i = 0; i < ytPlayerList.length; i++) {
//        var player = ytPlayerList[i];
//        var pl = new YT.Player(player.DivId, {
//            height: '0',
//            width: '0',
//            videoId: player.VideoId,
//        });
//        window[player.Id] = pl;
//    }
//}
//
////
////setTimeout(function() {
////    window.player.playVideo();
////}, 2000);
////
//
//addSong('player', 'player', 'IaHxPi9dM7o');
//addSong('player2', 'player2', 'IaHxPi9dM7o');
//addSong('player3', 'player3', 'IaHxPi9dM7o');
////onYouTubeIframeAPIReady();

//
//$(document).on('ready', function(){
//    alert('entro');
//    $('#search').on('click', function(){
//        alert('entro');
//        inputSearch = $("#inputSearch").val();
//        $.ajax({
//            type: "POST",
//            url: '/search',
//            data: {'search' : inputSearch },
//            success: function(result) {
//                console.log(result);
//
//            },
//            error: function(result) {
//                console.log(result);
//            }
//        });
//    })
//});