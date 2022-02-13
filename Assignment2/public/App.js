"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Products = [];

var ProductRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductRow, _React$Component);

  var _super = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var prd = this.props.product;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, prd.productName), /*#__PURE__*/React.createElement("td", null, "$", prd.productPrice), /*#__PURE__*/React.createElement("td", null, prd.productCategory), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
        href: prd.productImage,
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var AddProduct = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddProduct, _React$Component2);

  var _super2 = _createSuper(AddProduct);

  function AddProduct() {
    var _this;

    _classCallCheck(this, AddProduct);

    _this = _super2.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddProduct, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var price = form.prdPrice.value;
      price = price.slice(1);
      var prd = {
        productName: form.prdName.value,
        productPrice: price,
        productCategory: form.prdCat.value,
        productImage: form.prdImg.value
      };
      this.props.createProduct(prd);
      form.prdName.value = "";
      form.prdPrice.value = "$";
      form.prdImg.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        name: "productAdd",
        className: "formAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "Category", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
        id: "prdCat",
        name: "category"
      }, /*#__PURE__*/React.createElement("option", {
        value: "shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "jackets"
      }, "Jackets"), /*#__PURE__*/React.createElement("option", {
        value: "sweaters"
      }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
        value: "accessories"
      }, "Accessories")))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "Price Per Unit", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "prdPrice",
        defaultValue: "$"
      }))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("input", {
        type: "submit",
        id: "btnAdd",
        value: "Add Product"
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "Product Name", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "prdName"
      }))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "Image URL", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "prdImg"
      }))))));
    }
  }]);

  return AddProduct;
}(React.Component);

var ProductTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductTable, _React$Component3);

  var _super3 = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super3.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var productRows = this.props.products.map(function (product) {
        return /*#__PURE__*/React.createElement(ProductRow, {
          key: product.id,
          product: product
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "tableData"
      }, /*#__PURE__*/React.createElement("thead", {
        align: "left"
      }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
    }
  }]);

  return ProductTable;
}(React.Component);

var Product = /*#__PURE__*/function (_React$Component4) {
  _inherits(Product, _React$Component4);

  var _super4 = _createSuper(Product);

  function Product() {
    var _this2;

    _classCallCheck(this, Product);

    _this2 = _super4.call(this);
    _this2.state = {
      products: []
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          products: Products
        });
      }, 500);
    }
  }, {
    key: "createProduct",
    value: function createProduct(product) {
      product.id = this.state.products.length + 1;
      var newProductList = this.state.products.slice();
      newProductList.push(product);
      this.setState({
        products: newProductList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "mainDiv"
      }, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("h3", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ProductTable, {
        products: this.state.products
      }), /*#__PURE__*/React.createElement("h3", null, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddProduct, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return Product;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Product, null), document.getElementById('section1'));