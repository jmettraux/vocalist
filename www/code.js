
var Vl = (function() {

  var self = this;

  this.goToNext = function(event) {
    console.log(event);
    var index =
      parseInt(
        document.getElementById('card').getAttribute('data-vl-index'),
        10);
    Vl.displayEntry(index + 1);
  };

  this.displayEntry = function(index) {

    var entry = document.querySelectorAll('#list > .entry')[index];
    if ( ! entry) { Vl.displayEntry(0); return; }

    var card = document.getElementById('card');
    card.innerHTML = '';
    card.appendChild(entry.cloneNode(true));
    card.setAttribute('data-vl-index', index);

    document.querySelector('#card .j').addEventListener('click', Vl.goToNext);
  };

  this.ready = function() {

    var index = 0;

    Vl.displayEntry(index);
  };

  //
  // over.

  return this;

}).apply({});

