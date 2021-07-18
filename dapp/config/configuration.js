const {
  REACT_APP_ENVIRONMENT = 'localhost', // optional
  REACT_APP_DECIMALS = 8, // optional
  REACT_APP_FEATHERJS_CONNECTION_URL,
  REACT_APP_NODE_CONNECTION_URL,
  REACT_APP_CROWDFUNDING_ADDRESS,
  REACT_APP_EXCHANGE_RATE_PROVIDER_ADDRESS,
  REACT_APP_TOKEN_RIF_ADDRESS,
  REACT_APP_TOKEN_DOC_ADDRESS,
  REACT_APP_TOKEN_ADDRESSES,
  REACT_APP_BLOCKEXPLORER,
  REACT_APP_BUGS_EMAIL = 'avaldao@acdi.org.ar',
  REACT_APP_NETWORK_NAME,
  REACT_APP_NATIVE_TOKEN_NAME,
  REACT_APP_NODE_ID,
  REACT_APP_IPFS_GATEWAY,
  REACT_APP_IPFS_PINNING_ENABLED,
} = process.env;

const configurations = {
  localhost: {
    network: {
      requiredId: 33,
      name: 'RSK Regtest',
      nodeUrl: 'http://localhost:4444',
      timeout: 20000,
      explorer: 'https://explorer.testnet.rsk.co/',
      transactionEstimatedTime: 1, // Minutos
      transactionEstimatedTimeMilliseconds: 30000
    },
    language: {
      default: 'en',
      options: [
        { key: "es", name: "Español", flag: "ES" },
        { key: "en", name: "English", flag: "US" }
      ]
    },
    title: 'localhost',
    crowdfundingAddress: '0x05A55E87d40572ea0F9e9D37079FB9cA11bdCc67',
    exchangeRateProviderAddress: '0x0Aa058aD63E36bC2f98806f2D638353AE89C3634',
    networkName: 'ganache',
    nodeId: 88,
    feathersConnection: 'http://localhost:3030', //efem-feathers
    ipfsGateway: 'http://localhost:8080/ipfs/',
    ipfsPinningEnabled: false,
    sendErrors: true,
    analytics: {
      ga_UA: 'UA-136337883-3',
      useGoogleAnalytics: true,
      useHotjar: false,
    },
    nativeTokenName: 'RBTC',
    nativeToken: {
      name: 'RBTC',
      symbol: 'RBTC',
      address: '0x0000000000000000000000000000000000000000'
    },
    fiat: {
      symbol: 'USD',
      showDecimals: 2
    },
    tokens: {
      // Token Nativo
      rbtc: {
        address: '0x0000000000000000000000000000000000000000',
        isNative: true,
        symbol: 'RBTC',
        logoCid: '/ipfs/QmRqPw4gVDv4uNaMzpJ1tjwm85CZysQAKTR8KfqzQzrr8B',
        showDecimals: 5,
        donateStep: 0.00001
      },
      rif: { // ERC677 Token
        address: '0x1111111111111111111111111111111111111111',
        isNative: false,
        symbol: 'dRIF',
        logoCid: '/ipfs/QmcvQL7Yj4tryAmZPEB8qgeU1JwJNZAVN4zCcdWBNBkbQ9',
        showDecimals: 2,
        donateStep: 0.01
      },
      doc: {
        address: '0x2222222222222222222222222222222222222222',
        isNative: false,
        symbol: 'DOC',
        logoCid: '/ipfs/QmS3XYpbPycRUmtqogrnr4REEF3St2Yu4MqUwjSoxBDjUE',
        showDecimals: 2,
        donateStep: 0.01
      }
    },
    tokenExchangeRate: {
      updateInterval: 60000
    },
    anonymousDonationThreshold: 10000
  },
  rsk_testnet: {
    network: {
      requiredId: 31,
      name: 'RSK Testnet',
      nodeUrl: 'https://public-node.testnet.rsk.co',
      timeout: 20000,
      explorer: 'https://explorer.testnet.rsk.co/',
      transactionEstimatedTime: 1, // Minutos
      transactionEstimatedTimeMilliseconds: 32000
    },
    language: {
      default: 'en',
      options: [
        { key: "es", name: "Español", flag: "ES" },
        { key: "en", name: "English", flag: "US" }
      ]
    },
    title: 'RSK Testnet',
    crowdfundingAddress: '0x05A55E87d40572ea0F9e9D37079FB9cA11bdCc67',
    exchangeRateProviderAddress: '0x0Aa058aD63E36bC2f98806f2D638353AE89C3634',
    networkName: 'rsk_testnet',
    nodeId: 31,
    feathersConnection: 'https://testnet.feathers.b4h.world',
    ipfsGateway: 'https://testnet.ipfs.b4h.world/ipfs/',
    ipfsPinningEnabled: true,
    sendErrors: true,
    analytics: {
      ga_UA: 'UA-136337883-2',
      useGoogleAnalytics: true,
      useHotjar: false,
    },
    nativeTokenName: 'RBTC',
    nativeToken: {
      name: 'RBTC',
      symbol: 'RBTC',
      address: '0x0000000000000000000000000000000000000000'
    },
    fiat: {
      symbol: 'USD',
      showDecimals: 2
    },
    anonymousDonationThreshold: 10000
  },
  rsk_mainnet: {
    network: {
      requiredId: 30,
      name: 'RSK Mainnet',
      nodeUrl: 'https://node.b4h.world',
      timeout: 20000,
      explorer: 'https://explorer.testnet.rsk.co/',
      transactionEstimatedTime: 1, // Minutos
      transactionEstimatedTimeMilliseconds: 60000
    },
    language: {
      default: 'en',
      options: [
        { key: "es", name: "Español", flag: "ES" },
        { key: "en", name: "English", flag: "US" }
      ]
    },
    title: 'RSK MainNet',
    crowdfundingAddress: '0x05A55E87d40572ea0F9e9D37079FB9cA11bdCc67',
    exchangeRateProviderAddress: '0x0Aa058aD63E36bC2f98806f2D638353AE89C3634',
    networkName: 'rsk_mainnet',
    nodeId: 30,
    feathersConnection: 'https://feathers.b4h.world',
    ipfsGateway: 'https://ipfs.b4h.world/ipfs/',
    ipfsPinningEnabled: true,
    sendErrors: true,
    analytics: {
      ga_UA: 'UA-136337883-1',
      useGoogleAnalytics: true,
      useHotjar: false,
    },
    nativeTokenName: 'RBTC',
    nativeToken: {
      name: 'RBTC',
      symbol: 'RBTC',
      logoCid: '/ipfs/QmRqPw4gVDv4uNaMzpJ1tjwm85CZysQAKTR8KfqzQzrr8B',
      showDecimals: 5
    },
    anonymousDonationThreshold: 10000
  },
};

// Unknown environment
if (configurations[REACT_APP_ENVIRONMENT] === undefined)
  throw new Error(
    `There is no configuration object for environment: ${REACT_APP_ENVIRONMENT}. Expected REACT_APP_ENVIRONMENT to be empty or one of: ${Object.keys(
      configurations,
    )}`,
  );

// Create config object based on environment setup
const config = Object.assign({}, configurations[REACT_APP_ENVIRONMENT]);

// Overwrite the environment values with parameters
config.crowdfundingAddress = REACT_APP_CROWDFUNDING_ADDRESS || config.crowdfundingAddress;
config.exchangeRateProviderAddress = REACT_APP_EXCHANGE_RATE_PROVIDER_ADDRESS || config.exchangeRateProviderAddress;
config.tokens.rif.address = REACT_APP_TOKEN_RIF_ADDRESS || config.tokens.rif.address;
config.tokens.doc.address = REACT_APP_TOKEN_DOC_ADDRESS || config.tokens.doc.address;
config.tokenAddresses = REACT_APP_TOKEN_ADDRESSES
  ? JSON.parse(REACT_APP_TOKEN_ADDRESSES)
  : config.tokenAddresses;
config.etherscan = REACT_APP_BLOCKEXPLORER || config.etherscan;
config.feathersConnection = REACT_APP_FEATHERJS_CONNECTION_URL || config.feathersConnection;
config.network.nodeUrl = REACT_APP_NODE_CONNECTION_URL || config.network.nodeUrl;
config.network.requiredId = (REACT_APP_NODE_ID && Number.parseInt(REACT_APP_NODE_ID, 10)) || config.nodeId;
config.decimals = REACT_APP_DECIMALS;
config.bugsEmail = REACT_APP_BUGS_EMAIL;
config.networkName = REACT_APP_NETWORK_NAME || config.networkName;
config.nodeId = (REACT_APP_NODE_ID && Number.parseInt(REACT_APP_NODE_ID, 10)) || config.nodeId;
config.nativeTokenName = REACT_APP_NATIVE_TOKEN_NAME || config.nativeTokenName;

config.ipfsGateway = REACT_APP_IPFS_GATEWAY || config.ipfsGateway;
config.ipfsPinningEnabled = (REACT_APP_IPFS_PINNING_ENABLED !== undefined) ? (REACT_APP_IPFS_PINNING_ENABLED == "true") : config.ipfsPinningEnabled;

//config.sendErrors = ['develop', 'release', 'beta', 'rsk_testnet'].includes(REACT_APP_ENVIRONMENT);

console.log('Configuración', config);

export default config;
