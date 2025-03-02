const StudentCredentials = artifacts.require("StudentCredentials");

module.exports = function (deployer) {
  // Deploy the StudentCredentials contract
  deployer.deploy(StudentCredentials);
};