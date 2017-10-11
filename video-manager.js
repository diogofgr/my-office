AFRAME.registerComponent('video-manager', {
  init: function () {

  },
  changeVideo: function () {
    var asset = document.querySelector('video');
    var currentVideo = asset.getAttribute('src');

    console.log('change video source');
    asset.setAttribute('src', nextVideo(currentVideo));

    function nextVideo(currentVideo) {
      const london = "http://res.cloudinary.com/diogofgr/video/upload/v1507736496/london-tower-bridge_cnvhas.mp4";
      const thailand = "http://res.cloudinary.com/diogofgr/video/upload/v1507736492/ayutthaya_nulxnj.mp4";
      const cave = "http://res.cloudinary.com/diogofgr/video/upload/v1507736510/cave-waterfall_mwp4yw.mp4";

      const videos = [ london, thailand, cave];

      var currentIndex = videos.indexOf(currentVideo);
      if (currentIndex == videos.length - 1){
        return videos[0];
      } else {
        return videos[currentIndex + 1];
      }
    }
  }
});

AFRAME.registerComponent('btn-change-video', {
  schema: {
    color: {default: 'green'}
  },

  init: function () {
    var el = this.el;
    var VideoManager = document.querySelector('[video-manager]').components['video-manager'];
    // const VideoManager = document.querySelector('[video-manager]').components['video-manager'];

    el.addEventListener('click', function () {
      var VideoManager = document.querySelector('[video-manager]').components['video-manager'];
      VideoManager.changeVideo();
    });
    // console.log('start color manager.');
  },
});
