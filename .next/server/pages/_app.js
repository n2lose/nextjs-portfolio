(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/navLogo.56a52048.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtklEQVR42mMIC3zKyIAGnO13sAb63FJHFmMM9rvXCRQMBXECvK/ZAnGcr8d5KbBskO+dOj/PSy1ebqcMIfy7s/29rnYE+tysZAASgQE+NxqB4qwgSaCENdC0Sz4e59JtLFeIg3RP09NuFYPZBbSmCqhpH1BhBsz4BUATsoP97k4M8L5eC9R9AGh3nbf7aXOwAg/nwwb+3tdK7KzWqHu6HnPw97pSBBTmAcnFR/5iZMAFUhP+gyUBUJ5FsV8U0O8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Navbar.tsx







const Navbar = ()=>{
    const [nav, setNav] = (0,external_react_.useState)(false);
    const [shadow, setShadow] = (0,external_react_.useState)(false);
    const [navBg, setNavBg] = (0,external_react_.useState)("#ecf0f3");
    const [linkColor, setLinkColor] = (0,external_react_.useState)("#1f2937");
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (router.asPath === "/property" || router.asPath === "/shopify" || router.asPath === "/personalblog" || router.asPath === "/todoApp") {
            setNavBg("transparent");
            setLinkColor("#ecf0f3");
        } else {
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
        }
    }, [
        router
    ]);
    const toggleNav = ()=>{
        setNav(!nav);
    };
    (0,external_react_.useEffect)(()=>{
        const handleshadow = ()=>{
            if (window.scrollY >= 100) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleshadow);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: `${navBg}`
        },
        className: shadow ? "fixed w-full h-28 shadow-xl z-[100]" : "fixed w-full h-28 shadow z-[100]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-full h-full px-2 2xl:px-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: __webpack_require__(7748),
                            alt: "",
                            width: 87,
                            height: 35
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "hidden md:flex",
                                style: {
                                    color: `${linkColor}`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 text-sm uppercase hover:border-b",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 text-sm uppercase hover:border-b",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#about",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 text-sm uppercase hover:border-b",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#skills",
                                            children: "Skills"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 text-sm uppercase hover:border-b",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#projects",
                                            children: "Projects"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "ml-10 text-sm uppercase hover:border-b",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#contact",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden",
                                onClick: toggleNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMenu, {
                                    size: 25
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: nav ? "fixed left-0 top-0 w-[90%] sm:w-[70%] md:w-[55%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex w-full items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: __webpack_require__(7748),
                                                alt: "",
                                                width: 87,
                                                height: 35
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",
                                            onClick: toggleNav,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineClose, {
                                                size: 25
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-b border-gray-400 py-4 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "divide-y divide-gray-200 uppercase",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-4",
                                            onClick: ()=>setNav(false),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-4",
                                            onClick: ()=>setNav(false),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#about",
                                                className: "block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-4",
                                            onClick: ()=>setNav(false),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#skills",
                                                className: "block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200",
                                                children: "Skills"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-4",
                                            onClick: ()=>setNav(false),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#projects",
                                                className: "block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200",
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-4",
                                            onClick: ()=>setNav(false),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/#contact",
                                                className: "block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "uppercase tracking-widest text-[#5651e5]",
                                            children: "Lets Connect"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between my-4 w-full sm:w-[80%]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {
                                                        size: 24
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {
                                                        size: 24
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#f1502f] hover:scale-125 ease-in duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGit, {
                                                        size: 24
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillMail, {
                                                        size: 24
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61], () => (__webpack_exec__(904)));
module.exports = __webpack_exports__;

})();