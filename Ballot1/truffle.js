module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
 networks: {
  development: {
    host: "localhost",
    port: 9545,
    network_id: "*" // match any network
  },
  mynetwork: {
    host: "localhost",
    port: 8545,
    network_id: "*" // match any network
  },
}
}