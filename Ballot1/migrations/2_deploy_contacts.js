var Ballot=artifacts.require("Ballot");

module.exports = functions(deployer) 
{
 deployer.deploy(Ballot);
};