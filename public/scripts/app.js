"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('build it visible is running');

"use strict";

var ToggleVisibility = function (_React$Component) {
    _inherits(ToggleVisibility, _React$Component);

    function ToggleVisibility(props) {
        _classCallCheck(this, ToggleVisibility);

        var _this = _possibleConstructorReturn(this, (ToggleVisibility.__proto__ || Object.getPrototypeOf(ToggleVisibility)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);

        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(ToggleVisibility, [{
        key: "handleToggleVisibility",
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggleVisibility },
                    this.state.visibility ? "Hide Details" : "Show Details"
                ),
                this.state.visibility && React.createElement(
                    "p",
                    null,
                    "These are some details"
                )
            );
        }
    }]);

    return ToggleVisibility;
}(React.Component);

ReactDOM.render(React.createElement(ToggleVisibility, null), document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 { visibility ?  "Hide Details" : "Show Details" }
//             </button>
//             { visibility && (
//                 <div>
//                     <p>Some Details</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// };

// renderApp();
