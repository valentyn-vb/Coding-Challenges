"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskValue = maskValue;
function maskValue(value) {
    if (value.length <= 4) {
        return value;
    }
    let hiddenPart = "";
    const visiblePart = value.substring(value.length - 4, value.length + 1);
    for (let i = 1; i <= value.length - 4; i += 1) {
        hiddenPart += "#";
    }
    return {
        originalValue: value,
        displayedValue: hiddenPart + visiblePart,
    };
}
