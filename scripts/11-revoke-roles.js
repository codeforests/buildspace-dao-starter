import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x05172578BBeeC92B151D9c998C471e3A36C2402c",
);

(async () => {
  try {
    console.log(
      "Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();