"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTargetElementStyles", function () {
      _this.ew.current.style.transition = "all ".concat(_this.props.dur, "s ease-in-out");
    });

    _defineProperty(_assertThisInitialized(_this), "resizeListener", function () {
      var gw = _this.gw.current;
      var ew = _this.ew.current;

      _this.setState({
        ow: gw.offsetWidth,
        sw: gw.scrollWidth,
        dev: 0
      });

      ew.style.transform = "translateX(0px)";
    });

    _defineProperty(_assertThisInitialized(_this), "leftClickHandler", function () {
      var def = _this.props.def;
      var _this$state = _this.state,
          ow = _this$state.ow,
          sw = _this$state.sw,
          dev = _this$state.dev;
      var ew = _this.ew.current;

      if (-1 * dev < sw - ow && -1 * (dev - def) < sw - ow) {
        dev -= def;

        _this.setState({
          dev: dev
        });

        ew.style.transform = "translateX(".concat(dev, "px)");
      } else {
        dev -= sw - ow + dev;

        _this.setState({
          dev: dev
        });

        ew.style.transform = "translateX(".concat(ow - sw, "px)");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "rightClickHandler", function () {
      var def = _this.props.def;
      var dev = _this.state.dev;
      var ew = _this.ew.current;

      if (dev < 0 && dev + def < 0) {
        dev += def;

        _this.setState({
          dev: dev
        });

        ew.style.transform = "translateX(".concat(dev, "px)");
      } else {
        dev += -1 * dev;

        _this.setState({
          dev: dev
        });

        ew.style.transform = "translateX(".concat(dev, "px)");
      }
    });

    _this.state = {
      ow: 0,
      //offSetWidth
      sw: 0,
      //scrollWidth
      dev: 0 //deviation

    };
    _this.gw = _react["default"].createRef(); // Outer Wrapper

    _this.ew = _react["default"].createRef(); // Target Wrapper

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var gw = this.gw.current;
      var ow = gw.offsetWidth;
      var sw = gw.scrollWidth;
      this.setState({
        ow: ow,
        sw: sw
      });
      window.addEventListener('resize', this.resizeListener);
      this.setTargetElementStyles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeListener);
    }
  }, {
    key: "render",
    value: function render() {
      var Target = this.props.targetComponent;
      return _react["default"].createElement("div", {
        className: 'sliderWrapper',
        style: {
          overflow: 'hidden'
        },
        ref: this.gw
      }, _react["default"].createElement(Target, {
        wrapperRef: this.ew,
        goLeft: this.leftClickHandler,
        goRight: this.rightClickHandler
      }));
    }
  }]);

  return Slider;
}(_react.Component);

var _default = Slider;
exports["default"] = _default;
