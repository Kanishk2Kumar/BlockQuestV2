const hre = require("hardhat");
const { expect } = require("chai");

describe("BlockQuest Contract", function () {
  let BlockQuest, blockQuest, owner, user1, user2, course1, course2;

  beforeEach(async function () {
    [owner, user1, user2, course1, course2] = await hre.ethers.getSigners();

    // Deploy BlockQuest contract
    BlockQuest = await hre.ethers.getContractFactory("BlockQuest");
    blockQuest = await BlockQuest.deploy();
    await blockQuest.waitForDeployment();
  });

  it("Should allow users to be created", async function () {
    await blockQuest.connect(user1).createUser("Alice");
    const user = await blockQuest.getUser(user1.address);

    expect(user.username).to.equal("Alice");
    expect(user.userAddress).to.equal(user1.address);
    expect(user.streak).to.equal(0);
  });
});
