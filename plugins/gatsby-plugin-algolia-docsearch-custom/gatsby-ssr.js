"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2["default"])(["\n        var observer = new MutationObserver(function (mutations, instance) {\n          var docuSearchElem = document.querySelector('", "');\n          if (docuSearchElem) {\n            docsearch({\n              apiKey: \"", "\",\n              indexName: \"", "\",\n              inputSelector: \"", "\",\n              debug: ", "\n            });\n            instance.disconnect(); // stop observing\n            return;\n          }\n        });\n\n        // start observing\n        document.addEventListener(\"DOMContentLoaded\", function() {\n          observer.observe(document, {\n            childList: true,\n            subtree: true\n          });\n        });\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

exports.onRenderBody = function (_ref, _ref2) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;
  var apiKey = _ref2.apiKey,
      indexName = _ref2.indexName,
      inputSelector = _ref2.inputSelector,
      _ref2$debug = _ref2.debug,
      debug = _ref2$debug === void 0 ? false : _ref2$debug;

  if (!apiKey || !indexName || !inputSelector) {
    return;
  }


  setPostBodyComponents([_react["default"].createElement("script", {
    key: "plugin-docsearch-js",
    type: "text/javascript",
    src: "/docsearch.min.js"
  }), _react["default"].createElement("script", {
    key: "plugin-docsearch-initiate",
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html: (0, _commonTags.stripIndent)(_templateObject(), inputSelector, apiKey, indexName, inputSelector, debug === true ? "true" : "false")
    }
  })]);
};