import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x507eD3052B321D5553CcD1D835815C85D11194ca",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name : "Codeforests Platinum Card",
                description : "this NFT will give you access to CodeforestDAO",
                image : readFileSync("scripts/assets/membership.png"),

            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT " , error);
    }
}) ()

