"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnAutocomplete=function(_window$MnChips){function MnAutocomplete(self){var _this,_ret;return _classCallCheck(this,MnAutocomplete),self=_this=_possibleConstructorReturn(this,(MnAutocomplete.__proto__||Object.getPrototypeOf(MnAutocomplete)).call(this,self)),_this.input=_this.querySelector("input"),_this.select=void 0,_this.menu=_this.querySelector("menu"),_this.setMenu(),_this.setOnFocus(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnAutocomplete,_window$MnChips),_createClass(MnAutocomplete,[{key:"setMenu",value:function(){var values=this.querySelector(".values"),options=this.querySelector(".values").cloneNode(!0).querySelectorAll("mn-option");options=Array.from(options).map(function(option){return'<option value="'+option.getAttribute("value")+'">'+option.getAttribute("placeholder")+"</option>"}),values.innerHTML="";var select='<mn-select placeholder="test">'+options.join("")+"</mn-select>";this.insertAdjacentHTML("beforeend",select),this.select=this.querySelector("mn-select"),this.select.container="mn-autocomplete",console.log(this.select.container)}},{key:"setOnFocus",value:function(){var _this2=this,mobileDevice=screen.width<768;this.input.addEventListener("focus",function(){if(mobileDevice){var offsetTop=_this2.input.getBoundingClientRect().top-20+window.pageYOffset-document.documentElement.clientTop;window.scrollTo(0,offsetTop),document.body.scrollTop=offsetTop}_this2.select.open()})}}]),MnAutocomplete}(window.MnChips);window.customElements.define("mn-autocomplete",MnAutocomplete);
//# sourceMappingURL=mn-autocomplete.js.map
