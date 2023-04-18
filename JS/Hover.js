



var widgetLeftSides = document.getElementsByClassName('widget-left-side');

for (var i = 0; i < widgetLeftSides.length; i++) {
  widgetLeftSides[i].addEventListener('mouseover', function() {
    var hoverImage = this.querySelector('.hover-image'); 
    var originalSrc = hoverImage.src; 
    var hoverSrc = originalSrc.replace('-grey-1.png', '-yellow-2.png'); 
    hoverImage.src = hoverSrc; 
  });

  widgetLeftSides[i].addEventListener('mouseout', function() {
    var hoverImage = this.querySelector('.hover-image'); 
    var hoverSrc = hoverImage.src; 
    var originalSrc = hoverSrc.replace('-yellow-2.png', '-grey-1.png'); 
    hoverImage.src = originalSrc;
  });
}
