module.exports = function(api) {
  // disable cache
  if (api !== undefined) {
    api.cache(false);
  }
  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: { browsers: ["last 2 versions", "ie >= 11"] },
        include: ["es6.object.assign", "es6.promise", "es6.object.keys"],
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { loose: false }],
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: false }],
    "@babel/plugin-proposal-do-expressions",
    "babel-plugin-styled-components",
    "@babel/transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-react-jsx-source",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-modules-commonjs"
  ];

  return {
    presets,
    plugins,
    ignore: [
      "src/*.test.js"
    ]
  };
};
