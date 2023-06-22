"use strict";
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ factory)
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
;// CONCATENATED MODULE: ./ethereum/build/CampaignFactory.json
const CampaignFactory_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"numofdeployedcampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"title\\",\\"type\\":\\"string\\"},{\\"name\\":\\"details\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createcampaign\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedcampaigns\\",\\"outputs\\":[{\\"name\\":\\"title\\",\\"type\\":\\"string\\"},{\\"name\\":\\"details\\",\\"type\\":\\"string\\"},{\\"name\\":\\"campaignaddress\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/factory.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(CampaignFactory_namespaceObject.w3), "0x5C6751CE3f6F5818aCA3b671bb2902d7Bff5e6EF");
/* harmony default export */ const factory = (instance);


/***/ })

};
;