"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Requestindex)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(469);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(148);
;// CONCATENATED MODULE: ./components/requestrow.js






function Requestrow(props) {
    const { 0: loading1 , 1: setloading1  } = (0,external_react_.useState)(false);
    const { 0: loading2 , 1: setloading2  } = (0,external_react_.useState)(false);
    const { Row , Cell  } = external_semantic_ui_react_.Table;
    const readytofinalize = props.request.approvalcount > props.approvers / 2;
    const handleapprove = async ()=>{
        setloading1(true);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        const campaign = (0,ethereum_campaign/* default */.Z)(props.address);
        try {
            await campaign.methods.approverequest(props.id).send({
                from: accounts[0]
            });
        } catch (err) {
            setloading1(false);
        }
        setloading1(false);
        routes.Router.replaceRoute(`/campaigns/${props.address}/requests`);
    };
    const handlefinalize = async ()=>{
        setloading2(true);
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        const campaign = (0,ethereum_campaign/* default */.Z)(props.address);
        try {
            await campaign.methods.finalizerequest(props.id).send({
                from: accounts[0]
            });
        } catch (err) {
            setloading2(false);
        }
        setloading2(false);
        routes.Router.replaceRoute(`/campaigns/${props.address}/requests`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
        disabled: props.request.complete,
        positive: readytofinalize && !props.request.complete,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: props.id
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: props.request.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: web3/* default.utils.fromWei */.Z.utils.fromWei(props.request.value, "ether")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: props.request.recipient
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Cell, {
                children: [
                    props.request.approvalcount,
                    "/",
                    props.approvers
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: props.request.complete ? "FINALIZED" : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    color: "green",
                    basic: true,
                    onClick: handleapprove,
                    loading: loading1,
                    children: "Approve"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                children: props.request.complete ? "FINALIZED" : /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    color: "teal",
                    basic: true,
                    onClick: handlefinalize,
                    loading: loading2,
                    children: "Finalize"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/campaigns/requests/index.js








Requestindex.getInitialProps = async (props)=>{
    const { address  } = props.query;
    const campaign = (0,ethereum_campaign/* default */.Z)(address);
    const requestcount = await campaign.methods.getrequestcount().call();
    const approverscount = await campaign.methods.approvercount().call();
    const requests = await Promise.all(Array(parseInt(requestcount)).fill().map((element, index)=>{
        return campaign.methods.requests(index).call();
    }));
    return {
        address,
        requests,
        requestcount,
        approverscount
    };
};
function Requestindex(props) {
    const { Header , Row , HeaderCell , Body  } = external_semantic_ui_react_.Table;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        width: 7,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                            route: `/campaigns/${props.address}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    primary: true,
                                    style: {
                                        marginBottom: "50px"
                                    },
                                    children: "Back"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        width: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Requests Index"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        width: 5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                            route: `/campaigns/${props.address}/requests/new`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    primary: true,
                                    floated: "right",
                                    style: {
                                        marginBottom: "50px"
                                    },
                                    children: "Add request"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "ID"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Amount"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Recipient"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Approval Count"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Approve"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(HeaderCell, {
                                    children: "Finalize"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Body, {
                        children: props.requests.map((element, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(Requestrow, {
                                id: index,
                                request: element,
                                address: props.address,
                                approvers: props.approverscount
                            }, index);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    marginTop: "30px",
                    fontSize: "16px"
                },
                children: [
                    "Found ",
                    props.requestcount,
                    " requests "
                ]
            })
        ]
    });
}


/***/ }),

/***/ 142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [427,148], () => (__webpack_exec__(510)));
module.exports = __webpack_exports__;

})();