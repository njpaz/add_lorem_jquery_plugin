(function ($) {
	$.fn.addLorem = function() {
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo iaculis, egestas ante in, adipiscing est. Fusce porta dictum mauris sit amet auctor. Mauris euismod augue ut leo ultrices accumsan quis quis sem. Sed dignissim diam non enim sagittis, id fermentum lorem consectetur. In in vehicula dolor. Maecenas convallis dapibus dolor, nec suscipit diam porttitor sed. Maecenas sagittis eros et diam vestibulum posuere. Quisque felis libero, fermentum vel aliquet non, dignissim et purus."

    this.each(function() {
      $(this).text(lorem)
    })
  }
}(jQuery))