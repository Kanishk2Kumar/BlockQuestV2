const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("BlockQuestModule", (m) => {
  const BlockQuestContract = m.contract("BlockQuest", []);
  return { BlockQuestContract };
});
