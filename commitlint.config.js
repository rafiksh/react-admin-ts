module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "refactor",
        "improve",
        "test",
        "revert",
        "wip",
        "remove",
      ],
    ],
  },
};
