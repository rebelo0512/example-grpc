"use strict";
exports.__esModule = true;
exports.date_default_columns = void 0;
exports.date_default_columns = [
    {
        name: "created_at",
        type: "timestamp",
        "default": "now()"
    },
    {
        name: "updated_at",
        type: "timestamp",
        "default": "now()"
    },
];
