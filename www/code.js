
var Vl = (function() {

  var self = this;

  this.goToNext = function(event) {

    //console.log(event.target);
    if (event.target.classList.contains('j')) return;

    var index = document.getElementById('card').getAttribute('data-vl-index'),
    index = parseInt(index, 10);

    Vl.displayEntry(index + 1);
  };

  this.showRuby = function(event) {

    //console.log(event);
    //console.log(event.target);

    var r = document.querySelector('#card .r');
    if (r.style.display !== 'block') { r.style.display = 'block'; return; }

    var e = document.querySelector('#card .e');
    if (e.style.display !== 'block') { e.style.display = 'block'; return; }

    Vl.displayEntry(0);
  };

  this.displayEntry = function(index) {

    //var entry = document.querySelectorAll('#list > .entry')[index];
    var entry = cards[index];
    if ( ! entry) { Vl.displayEntry(0); return; }

    var card = document.getElementById('card');
    card.querySelector('.j').innerHTML = entry[0];
    var r = card.querySelector('.r');
    var e = card.querySelector('.e');
    r.style.display = 'none';
    e.style.display = 'none';
    r.innerHTML = entry[1];
    e.innerHTML = entry[2];
    card.setAttribute('data-vl-index', index);
  };

  this.ready = function() {

    var index = 0;

    Vl.displayEntry(index);

    document.querySelector('#next').addEventListener('click', Vl.goToNext);
    document.querySelector('#card .j').addEventListener('click', Vl.showRuby);
    document.querySelector('#card .r').addEventListener('click', Vl.showRuby);
  };

  //
  // over.

  return this;

}).apply({});

