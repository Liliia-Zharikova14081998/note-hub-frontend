(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(auth routes)/sign-in/SignInPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "SignInPage-module__QK7xoW__actions",
  "error": "SignInPage-module__QK7xoW__error",
  "form": "SignInPage-module__QK7xoW__form",
  "formGroup": "SignInPage-module__QK7xoW__formGroup",
  "formTitle": "SignInPage-module__QK7xoW__formTitle",
  "input": "SignInPage-module__QK7xoW__input",
  "mainContent": "SignInPage-module__QK7xoW__mainContent",
  "submitButton": "SignInPage-module__QK7xoW__submitButton",
});
}),
"[project]/app/(auth routes)/sign-in/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignInPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(auth routes)/sign-in/SignInPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SignInPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "SignInPage.useAuthStore[setUser]": (state)=>state.setUser
    }["SignInPage.useAuthStore[setUser]"]);
    const handleSubmit = async (formData)=>{
        setError("");
        try {
            const formValues = Object.fromEntries(formData);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])(formValues);
            if (res) {
                setUser(res);
                router.push('/profile');
            }
        } catch (error) {
            var _response, _response_data, _response1;
            const status = (_response = error.response) === null || _response === void 0 ? void 0 : _response.status;
            const message = ((_response1 = error.response) === null || _response1 === void 0 ? void 0 : (_response_data = _response1.data) === null || _response_data === void 0 ? void 0 : _response_data.message) || error.message || 'Oops... some error';
            if (status === 401 || message === "Invalid credentials") {
                setError("Incorrect email or password. Please try again.");
            } else if (status === 404 || message === "User not found") {
                setError("Account not found. Please register first.");
            } else {
                setError(message);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: handleSubmit,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 44,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "email",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                            lineNumber: 47,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            type: "email",
                            name: "email",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                            lineNumber: 48,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 46,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "password",
                            children: "Password"
                        }, void 0, false, {
                            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                            lineNumber: 52,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "password",
                            type: "password",
                            name: "password",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                            lineNumber: 53,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 51,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                        children: "Log in"
                    }, void 0, false, {
                        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 56,
                    columnNumber: 5
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth__routes$292f$sign$2d$in$2f$SignInPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
                    lineNumber: 62,
                    columnNumber: 14
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
            lineNumber: 43,
            columnNumber: 2
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(auth routes)/sign-in/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(SignInPage, "K5IwvANS1INIPJg62pVpx2Vjkq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = SignInPage;
var _c;
__turbopack_context__.k.register(_c, "SignInPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28auth%20routes%29_sign-in_f1552831._.js.map