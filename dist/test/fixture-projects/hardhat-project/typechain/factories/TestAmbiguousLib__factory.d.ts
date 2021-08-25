import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestAmbiguousLib, TestAmbiguousLibInterface } from "../TestAmbiguousLib";
export declare class TestAmbiguousLib__factory extends ContractFactory {
    constructor(linkLibraryAddresses: TestAmbiguousLibLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: TestAmbiguousLibLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestAmbiguousLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestAmbiguousLib;
    connect(signer: Signer): TestAmbiguousLib__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101cb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063652d3c4814610030575b600080fd5b61005c6004803603602081101561004657600080fd5b8101908080359060200190929190505050610072565b6040518082815260200191505060405180910390f35b60008073__$98bea154346e974824b31ef1c76a4ec620$__6305b8c7c2846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156100c457600080fd5b505af41580156100d8573d6000803e3d6000fd5b505050506040513d60208110156100ee57600080fd5b8101908080519060200190929190505050905073__$8affc084a2ef6471c45cb2d56a14f2ff1a$__6305b8c7c2826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561015057600080fd5b505af4158015610164573d6000803e3d6000fd5b505050506040513d602081101561017a57600080fd5b810190808051906020019092919050505090508091505091905056fea265627a7a723158200ef31bcc1317ee673d0e545727a657fdd6cd70a07b2440d648bc895e5a294e6a64736f6c634300050f0032";
    static readonly abi: {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): TestAmbiguousLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAmbiguousLib;
}
export interface TestAmbiguousLibLibraryAddresses {
    ["contracts/AmbiguousLibrary.sol:AmbiguousLibrary"]: string;
    ["contracts/AmbiguousLibrary2.sol:AmbiguousLibrary"]: string;
}
//# sourceMappingURL=TestAmbiguousLib__factory.d.ts.map