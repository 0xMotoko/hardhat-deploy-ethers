"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAmbiguousLib__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "printNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101cb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063652d3c4814610030575b600080fd5b61005c6004803603602081101561004657600080fd5b8101908080359060200190929190505050610072565b6040518082815260200191505060405180910390f35b60008073__$98bea154346e974824b31ef1c76a4ec620$__6305b8c7c2846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156100c457600080fd5b505af41580156100d8573d6000803e3d6000fd5b505050506040513d60208110156100ee57600080fd5b8101908080519060200190929190505050905073__$8affc084a2ef6471c45cb2d56a14f2ff1a$__6305b8c7c2826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561015057600080fd5b505af4158015610164573d6000803e3d6000fd5b505050506040513d602081101561017a57600080fd5b810190808051906020019092919050505090508091505091905056fea265627a7a723158200ef31bcc1317ee673d0e545727a657fdd6cd70a07b2440d648bc895e5a294e6a64736f6c634300050f0032";
class TestAmbiguousLib__factory extends ethers_1.ContractFactory {
    constructor(linkLibraryAddresses, signer) {
        super(_abi, TestAmbiguousLib__factory.linkBytecode(linkLibraryAddresses), signer);
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$98bea154346e974824b31ef1c76a4ec620\\$__", "g"), linkLibraryAddresses["contracts/AmbiguousLibrary.sol:AmbiguousLibrary"]
            .replace(/^0x/, "")
            .toLowerCase());
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$8affc084a2ef6471c45cb2d56a14f2ff1a\\$__", "g"), linkLibraryAddresses["contracts/AmbiguousLibrary2.sol:AmbiguousLibrary"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestAmbiguousLib__factory = TestAmbiguousLib__factory;
TestAmbiguousLib__factory.bytecode = _bytecode;
TestAmbiguousLib__factory.abi = _abi;
//# sourceMappingURL=TestAmbiguousLib__factory.js.map