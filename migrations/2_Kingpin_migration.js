const Kingpin = artifacts.require("Kingpin");

module.exports = function(deployer) {
  deployer.deploy(Kingpin);
};
