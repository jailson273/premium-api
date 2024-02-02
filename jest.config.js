const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts"],
    modulePathIgnorePatterns: [],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" }),
};
