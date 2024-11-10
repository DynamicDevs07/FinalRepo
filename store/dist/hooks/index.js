"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBalance = useBalance;
const recoil_1 = require("recoil");
const balance_1 = require("../atoms/balance");
function useBalance() {
    return (0, recoil_1.useRecoilValue)(balance_1.balanceAtom);
}
