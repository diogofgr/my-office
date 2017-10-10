AFRAME.registerComponent('video-manager', {
  init: function () {

  },
  changeVideo: function () {
    var asset = document.querySelector('video');
    var currentVideo = asset.getAttribute('src');

    console.log('change video source');
    asset.setAttribute('src', nextVideo(currentVideo));

    function nextVideo(currentVideo) {
    const videos = [ '.gitignore/london-tower-bridge.mp4', '.gitignore/ayutthaya.mp4', '.gitignore/city-waterfall.mp4']

      var currentIndex = videos.indexOf(currentVideo);
      return videos[currentIndex + 1];
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
