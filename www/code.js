
var Vl = (function() {

  var self = this;

  this.goToList = function(event) {

    document.getElementById('list').style.display = 'block';
  };
  this.goTo = function(event) {
    document.getElementById('list').style.display = 'none';
    var index = event.target.getAttribute('data-vl-index');
    index = parseInt(index, 10);
    Vl.displayEntry(index);
  };

  var createElt = function(clazz, text, atts) {
    var e = document.createElement('div');
    e.classList.add(clazz);
    if (text) {
      var t = document.createTextNode(text);
      e.appendChild(t);
    }
    if (atts) for (var k in atts) e.setAttribute(k, atts[k]);
    return e;
  };

  this.populateList = function() {

    var list = document.getElementById('list');

    cards.forEach(function(card, index) {
      var e = createElt('entry');
      var j = createElt('j', card[0], { 'data-vl-index': index });
      j.appendChild(createElt('i', '' + index));
      e.appendChild(j);
      e.appendChild(createElt('r', card[1]));
      e.appendChild(createElt('e', card[2]));
      list.appendChild(e);
      j.addEventListener('click', Vl.goTo);
    });
  };

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

    Vl.populateList();

    var index = 0;

    Vl.displayEntry(index);

    document.querySelector('#to-list').addEventListener('click', Vl.goToList);
    document.querySelector('#card .j').addEventListener('click', Vl.showRuby);
    document.querySelector('#card .r').addEventListener('click', Vl.showRuby);
    document.querySelector('#to-next').addEventListener('click', Vl.goToNext);
  };

  //
  // over.

  return this;

}).apply({});

