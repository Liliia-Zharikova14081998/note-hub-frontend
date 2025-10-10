self.__BUILD_MANIFEST = {
  "/_error": [
    "./static/chunks/bc16b708610f17db.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "(?:\\/(.*))?[\\/#\\?]?"
          }
        ],
        "source": "/notes/:id",
        "destination": "/(.)notes/:id"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()