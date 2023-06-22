"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Campaignshow)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(469);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(148);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/contributeform.js






function Contributeform(props) {
    const { 0: val , 1: setval  } = (0,external_react_.useState)("");
    const { 0: errmsg , 1: seterrmsg  } = (0,external_react_.useState)("");
    const { 0: active , 1: setactive  } = (0,external_react_.useState)(false);
    const handlesubmit = async (e)=>{
        e.preventDefault();
        const campaign = (0,ethereum_campaign/* default */.Z)(props.address);
        setactive(true);
        seterrmsg("");
        try {
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3/* default.utils.toWei */.Z.utils.toWei(val, "ether")
            });
            routes.Router.replaceRoute(`/campaigns/${props.address}`);
        } catch (err) {
            seterrmsg(err.message);
        }
        setactive(false);
        setval("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
        onSubmit: handlesubmit,
        error: !!errmsg,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Amount To Contribute : "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                        value: val,
                        onChange: (e)=>{
                            setval(e.target.value);
                        },
                        label: "ether",
                        labelPosition: "right"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                error: true,
                header: "Oops!",
                content: errmsg
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                primary: true,
                children: "Contribute!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Dimmer, {
                active: active,
                page: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Loader, {
                    size: "massive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Header, {
                        as: "h2",
                        inverted: true,
                        children: [
                            "Waiting for Transaction...",
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header.Subheader, {
                                children: "Please Wait!"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/campaigns/show.js








Campaignshow.getInitialProps = async (props)=>{
    const campaign = (0,ethereum_campaign/* default */.Z)(props.query.address);
    const summary = await campaign.methods.getsummary().call();
    return {
        address: props.query.address,
        mininmumcontribution: summary[0],
        balance: summary[1],
        requestcount: summary[2],
        approvercount: summary[3],
        manager: summary[4],
        title: summary[5],
        details: summary[6]
    };
};
function Campaignshow(props) {
    const items = [
        {
            header: props.manager,
            meta: "Address of Manager",
            description: "Campaign created by the manager and can create requests to withdraw money",
            style: {
                overflowWrap: "break-word"
            }
        },
        {
            header: props.mininmumcontribution,
            meta: "Minimum Contribution(wei)",
            description: "You must contribute atleast this much wei to be a contributor"
        },
        {
            header: props.requestcount,
            meta: "Number of Requests",
            description: "A request tries to withdraw money from the contract. Requests must be approved by approvers"
        },
        {
            header: props.approvercount,
            meta: "Number of Approvers",
            description: "Number of people who have already contributed to the campaign"
        },
        {
            header: web3/* default.utils.fromWei */.Z.utils.fromWei(props.balance, "ether"),
            meta: "Campaign balance(ether)",
            description: "Amount of money this campaign has left to spend"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 10,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
                                items: items
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                            width: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                    as: "h2",
                                    attached: "top",
                                    textAlign: "center",
                                    block: true,
                                    children: props.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Segment, {
                                    attached: true,
                                    style: {
                                        marginBottom: "50px"
                                    },
                                    children: props.details
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Contributeform, {
                                    address: props.address
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                            route: `/campaigns/${props.address}/requests`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                    primary: true,
                                    style: {
                                        marginTop: "20px"
                                    },
                                    children: "View Requests"
                                })
                            })
                        })
                    })
                })
            ]
        })
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
var __webpack_exports__ = __webpack_require__.X(0, [427,148], () => (__webpack_exec__(18)));
module.exports = __webpack_exports__;

})();