import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0x8112E5B2C11BAdA45e8e177d977902B2482bA695");

const tokenModule = sdk.getTokenModule("0x05172578BBeeC92B151D9c998C471e3A36C2402c");

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);
        console.log("successfully gave vote module permission to act on token module");
    } catch(error) {
        console.error("failed to grant access ", error);
        process.exit(1);
    }
    try {
        const ownedTokenBalance = await tokenModule.balanceOf(
            process.env.WALLET_ADDRESS
        );
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90 = ownedAmount.div(100).mul(90);

        await tokenModule.transfer(
            voteModule.address,
            percent90,
        );
        console.log("successfully transferred token to vote module");

    } catch(err) {
        console.error("failed to transfer fund to vote module ", err);
    }
})()
