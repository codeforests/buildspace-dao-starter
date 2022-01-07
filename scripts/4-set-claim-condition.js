import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    '0x507eD3052B321D5553CcD1D835815C85D11194ca'
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        claimConditionFactory.newClaimPhase({
            startTime : new Date(),
            maxQuantity : 50_000,
            maxQuantityPerTransaction : 1
        });

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("successfully set claim condition on bundle drop", bundleDrop.address);

    } catch (error) {
        console.error("failed to set claim condition, ", error);
    }
}) ();
