$(function(){

  /* view organizer */
  
  var View = function() {
    this._views = [
      $('#top'),
      $('#content1'),
      $('#content2'),
      $('#content3'),
      $('#content4')
    ];
    this._init();
  };
  View.prototype = {
    _init: function() {
      $.each(this._views, function(i, $el) {
        $el.hide();
      });
      return this;
    },
    show: function(id) {
      $.each(this._views, function(i, $el) {
        if($el.attr('id') === id) {
          $el.show();
        } else {
          $el.hide();
        }
      });
      return this;
    }
  };

  /* hashchange router */

  var Router = function(view) {
    this._view = view;
    this._eventify();
    this._init();
  };
  Router.prototype = {
    _init: function() {
      var hash = location.hash;
      if(!hash || hash==='#') {
        location.hash = '#top/';
      } else {
        this.route(hash);
      }
      return this;
    },
    _eventify: function() {
      var self = this;
      $(window).bind('hashchange', function() {
        self.route(location.hash);
      });
      return this;
    },
    route: function(hash) {
      var view = this._view;
      switch (hash) {
        case '#top/':
          view.show('top');
          break;
        case '#content1/':
          view.show('content1');
          break;
        case '#content2/':
          view.show('content2');
          break;
        case '#content3/':
          view.show('content3');
          break;
        case '#content4/':
          view.show('content4');
          break;
        default:
          break;
      }
      return this;
    }
  };

  // do it
  var view = new View;
  var router = new Router(view);

});

