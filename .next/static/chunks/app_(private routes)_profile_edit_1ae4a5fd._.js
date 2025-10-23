(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(private routes)/profile/edit/EditProfilePage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "EditProfilePage-module__XoJWpq__actions",
  "avatar": "EditProfilePage-module__XoJWpq__avatar",
  "cancelButton": "EditProfilePage-module__XoJWpq__cancelButton",
  "formTitle": "EditProfilePage-module__XoJWpq__formTitle",
  "input": "EditProfilePage-module__XoJWpq__input",
  "mainContent": "EditProfilePage-module__XoJWpq__mainContent",
  "profileCard": "EditProfilePage-module__XoJWpq__profileCard",
  "profileInfo": "EditProfilePage-module__XoJWpq__profileInfo",
  "saveButton": "EditProfilePage-module__XoJWpq__saveButton",
  "usernameWrapper": "EditProfilePage-module__XoJWpq__usernameWrapper",
});
}),
"[project]/app/(private routes)/profile/edit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(private routes)/profile/edit/EditProfilePage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function EditProfilePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "EditProfilePage.useAuthStore[setUser]": (state)=>state.setUser
    }["EditProfilePage.useAuthStore[setUser]"]);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatar, setAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfilePage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMe"])().then({
                "EditProfilePage.useEffect": (user)=>{
                    var _user_username;
                    setUsername((_user_username = user.username) !== null && _user_username !== void 0 ? _user_username : "");
                    var _user_email;
                    setEmail((_user_email = user.email) !== null && _user_email !== void 0 ? _user_email : "");
                    var _user_avatar;
                    setAvatar((_user_avatar = user.avatar) !== null && _user_avatar !== void 0 ? _user_avatar : "");
                }
            }["EditProfilePage.useEffect"]);
        }
    }["EditProfilePage.useEffect"], []);
    const handleChange = (event)=>{
        setUsername(event.target.value);
    };
    const handleSaveUser = async (event)=>{
        event.preventDefault();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMe"])({
            username
        });
        setUser({
            username,
            email,
            avatar
        });
        router.push("/profile");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                    children: "Edit Profile"
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 39,
                    columnNumber: 5
                }, this),
                avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: avatar,
                    alt: "User Avatar",
                    width: 120,
                    height: 120,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 41,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveUser,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileInfo,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].usernameWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "username",
                                    children: "Username:"
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "username",
                                    type: "text",
                                    value: username,
                                    onChange: handleChange,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 49,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Email: ",
                                email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        router.back();
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 62,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
            lineNumber: 38,
            columnNumber: 3
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
        lineNumber: 37,
        columnNumber: 7
    }, this);
}
_s(EditProfilePage, "NSMf3ebZYUABztdc3HF1h6FBz/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = EditProfilePage;
var _c;
__turbopack_context__.k.register(_c, "EditProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28private%20routes%29_profile_edit_1ae4a5fd._.js.map