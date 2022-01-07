import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule("0x507eD3052B321D5553CcD1D835815C85D11194ca");

const tokenModule = sdk.getTokenModule("0x05172578BBeeC92B151D9c998C471e3A36C2402c");

(async () => {
    try {
        const walletAddress = await bundleDropModule.getAllClaimerAddresses("0");
        if(walletAddress.length === 0) {
            console.log("No NFT has been claimed, please promote to more people");
            process.exit(0);
        }
        
        const airdropTargets = walletAddress.map((address) => {
            const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
            console.log("going to airdrop ", randomAmount, " token to ", address);

            const airdropTarget = {
                address,
                amount : ethers.utils.parseUnits(randomAmount.toString(), 18),
            };
            return airdropTarget;
        });

        console.log("starting airdrop...");
        await tokenModule.transferBatch(airdropTargets);
        console.log("successfully airdropped tokens for all holders");

    } catch(error) {
        console.error("failed to airdrop token ", error);
    }

}) ()