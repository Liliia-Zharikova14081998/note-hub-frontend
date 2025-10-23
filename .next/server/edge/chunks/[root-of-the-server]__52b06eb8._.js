(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__52b06eb8._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/lib/api/api.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [middleware-edge] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:3000") + "/api";
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].create({
    baseURL,
    withCredentials: true
});
}),
"[project]/lib/api/serverApi.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkSession",
    ()=>checkSession,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "getMe",
    ()=>getMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
;
;
async function fetchNotes(page = 1, tag = "", search = "", perPage = 12) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const params = {
        page,
        perPage
    };
    if (tag) params.tag = tag;
    if (search) params.search = search;
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["api"].get("/notes", {
        params,
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return response.data;
}
async function fetchNoteById(id) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["api"].get(`/notes/${id}`, {
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return response.data;
}
async function getMe() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["api"].get(`/users/me`, {
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return data;
}
async function checkSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["api"].get(`/auth/session`, {
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return response;
}
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/serverApi.ts [middleware-edge] (ecmascript)");
;
;
;
;
const privateRoutes = [
    '/profile',
    "/notes"
];
const authRoutes = [
    '/sign-in',
    '/sign-up'
];
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const accessToken = cookieStore.get('accessToken')?.value;
    const refreshToken = cookieStore.get('refreshToken')?.value;
    const isAuthRoute = authRoutes.some((route)=>pathname.startsWith(route));
    const isPrivateRoute = privateRoutes.some((route)=>pathname.startsWith(route));
    if (!accessToken) {
        if (refreshToken) {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkSession"])();
            const setCookie = data.headers['set-cookie'];
            if (setCookie) {
                const cookieArray = Array.isArray(setCookie) ? setCookie : [
                    setCookie
                ];
                for (const cookieStr of cookieArray){
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(cookieStr);
                    const options = {
                        expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                        path: parsed.Path,
                        maxAge: Number(parsed['Max-Age'])
                    };
                    if (parsed.accessToken) cookieStore.set('accessToken', parsed.accessToken, options);
                    if (parsed.refreshToken) cookieStore.set('refreshToken', parsed.refreshToken, options);
                }
                if (isAuthRoute) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url), {
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
                if (isPrivateRoute) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
            }
        }
        if (isAuthRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        if (isPrivateRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/sign-in', request.url));
        }
    }
    if (isAuthRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
    }
    if (isPrivateRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
}
const config = {
    matcher: [
        '/profile/:path*',
        "/notes/:path*",
        '/sign-in',
        '/sign-up'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__52b06eb8._.js.map