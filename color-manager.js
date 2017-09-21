AFRAME.registerComponent('color-manager', {
  init: function () {

  },
  changeColor: function () {
    var el = this.el;
    var currentColor = el.getAttribute('color');
    console.log('change ball color');
    el.setAttribute('color', nextColor(currentColor));

    function nextColor(currentColor) {
    const colors = [ 'aqua', 'aquamarine', 'azure','beige', 'bisque', 'black', 'blue', 'blueviolet', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral','cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan','darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta','darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen','darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet','deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick','floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold','goldenrod', 'green', 'greenyellow', 'honeydew', 'hotpink','indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen','lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow','lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue','lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen','linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid','mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise','mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite','navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid','palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff','peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown','royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell','sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow','springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise','violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

      var currentIndex = colors.indexOf(currentColor);
      return colors[currentIndex + 1];
    }
  }
});

AFRAME.registerComponent('btn-change-color', {
  schema: {
    color: {default: 'green'}
  },

  init: function () {
    var data = this.data;
    // console.log(data.color);
    var el = this.el;
    const ColorManager = document.querySelector('[color-manager]').components['color-manager'];

    el.addEventListener('click', function () {
      el.parentElement.emit('squeezeanimation');
      ColorManager.changeColor();
    });
    // console.log('start color manager.');
  },
});
