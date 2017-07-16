'use strict';

define('ember-data-table-demo/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/advanced.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/advanced.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass ESLint\n\n');
  });

  QUnit.test('models/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/author.js should pass ESLint\n\n');
  });

  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/advanced.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/advanced.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define('ember-data-table-demo/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('ember-data-table-demo/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('ember-data-table-demo/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function () {
      return _helpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function () {
      return _helpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function () {
      return _helpers.selectChoose;
    }
  });
  exports.default = _helpers.default;
});
define('ember-data-table-demo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-data-table-demo/tests/helpers/start-app', 'ember-data-table-demo/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = _ember.default.RSVP.Promise;
});
define('ember-data-table-demo/tests/helpers/resolver', ['exports', 'ember-data-table-demo/resolver', 'ember-data-table-demo/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ember-data-table-demo/tests/helpers/start-app', ['exports', 'ember', 'ember-data-table-demo/app', 'ember-data-table-demo/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-data-table-demo/tests/test-helper', ['ember-data-table-demo/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ember-data-table-demo/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('ember-data-table-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
