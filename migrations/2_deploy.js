const GasOverflow = artifacts.require("GasOverflow");

module.exports = function(deployer) {
  deployer.deploy(GasOverflow);
};
