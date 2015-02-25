var HT = (function () {
  'use strict';

  var me = {},
      hitEvent,
      hotInstances = {};

  me.demos = {
    hotSettings: {
      'finance': {
        settings: {
          colHeaders: true,
          rowHeaders: true
        },
        getData: function () {
          return Handsontable.helper.createSpreadsheetData(40, 16);
        }
      },
      'sport': {
        settings: {
          colHeaders: false,
          rowHeaders: false
        },
        getData: function () {
          return Handsontable.helper.createSpreadsheetData(40, 16);
        }
      },
      'education': {
        settings: {
          colHeaders: true,
          rowHeaders: true
        },
        getData: function () {
          return Handsontable.helper.createSpreadsheetData(40, 16);
        }
      },
      'erp': {
        settings: {
          colHeaders: false,
          rowHeaders: false
        },
        getData: function () {
          return Handsontable.helper.createSpreadsheetData(40, 16);
        }
      },
      'science': {
        settings: {
          colHeaders: true,
          rowHeaders: true
        },
        getData: function () {
          return Handsontable.helper.createSpreadsheetData(40, 16);
        }
      },
      'integrations': {
        settings: {
          colHeaders: false,
          rowHeaders: false
        },
        getData: function () {
          return Handsontable.helper.createSpreadsheetData(40, 16);
        }
      }
    },
    index: function () {
      var container = document.getElementById('intro');

      if (!container) {
        return;
      }

      hotInstances['index'] = new Handsontable(container, {
        data: Handsontable.helper.createSpreadsheetData(20, 8)
      });

      Handsontable.Dom.addEvent(document.querySelector('#load-data'), 'click', function () {
        HT.scrollSmooth('header', function () {
          var data = Handsontable.helper.createSpreadsheetData(1000, 8);
          hotInstances['index'].loadData(data);

          hotInstances['index'].addHookOnce('afterLoadData', function () {
            setTimeout(function () {
              // scroll animation -> make better performance
              //$('.handsontable').animate({
              //  scrollTop: $('.handsontable')[0].scrollHeight,
              //  easing: 'easeOutQuint'
              //}, 25000, function () {
              //  hotInstances['index'].selectCell(9999, 0);
              //});

              hotInstances['index'].selectCell(999, 0);
            }, 500);

          });
        });
      });
    },
    examples: function () {
      var container = document.getElementById('examples');

      if (!container) {
        return;
      }

      hotInstances['examples'] = new Handsontable(container, me.demos.hotSettings['finance'].settings);
      hotInstances['examples'].loadData(me.demos.hotSettings['finance'].getData());
    },
    render: function () {
      me.demos.index();
      me.demos.examples();
    }
  };

  me.tabs = function () {
    var tabs = $('.tabs');

    $(document).foundation({
      tab: {
        // there is a bug in foundation framework (doubled events fired after clicked tabs)
        callback: function (tab) {
          var children = tabs.children('dd[name!=' + tab.attr('name') + ']');

          children.each(function () {
            $(this).removeAttr('fired');
          });

          if (tab.hasClass('active') && !tab.attr('fired')) {
            tab.attr('fired', true);
            var htInstanceSettings = me.demos.hotSettings[tab.attr('name').toLowerCase()];

            if (htInstanceSettings) {
              hotInstances['examples'].updateSettings(htInstanceSettings.settings);
              hotInstances['examples'].loadData(htInstanceSettings.getData());
            }
          }
        }
      }
    })
  };

  me.scrollSmooth = function (target, fnCallback) {
    target = $(target);
    fnCallback = fnCallback || function () {};

    if (target) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, fnCallback);

      return false;
    }
  };

  me.highlightCode = function () {
    $('.step[rel]').each(function () {
      var $this = $(this),
          rel = $this.attr('rel');

      $this.hover(function () {
        $('.' + rel).addClass('active');
      }, function () {
        $('.' + rel).removeClass('active');
      });

    });
  };

  me.navigation = function () {
    var $navBar = $('nav');

    $('.menu').on(hitEvent, function () {
      $navBar.toggleClass('nav-show');
    });

    $('.content').on(hitEvent, function(event) {
      if ($navBar.hasClass('nav-show')) {
        $navBar.removeClass('nav-show');
      }
    });
  };

  me.init = function () {
    hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

    me.navigation();
    me.tabs();

    me.demos.render();
    me.highlightCode();
  };

  return me;
}());

$(function() {
  HT.init();
});
