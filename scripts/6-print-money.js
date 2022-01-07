import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x05172578BBeeC92B151D9c998C471e3A36C2402c");

(async () => {
    try {
        const amount = 1_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();
        console.log("there is now ", ethers.utils.formatUnits(totalSupply, 18), "$CFGT in circulation!");

    } catch(error) {
        console.error("failed to mint tokens ", error);
    }
}) ()