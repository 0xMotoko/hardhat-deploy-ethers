import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestContractLib, TestContractLibInterface } from "../TestContractLib";
export declare class TestContractLib__factory extends ContractFactory {
    constructor(linkLibraryAddresses: TestContractLibLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: TestContractLibLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestContractLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestContractLib;
    connect(signer: Signer): TestContractLib__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061013f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063652d3c4814610030575b600080fd5b61005c6004803603602081101561004657600080fd5b8101908080359060200190929190505050610072565b6040518082815260200191505060405180910390f35b60008073__$1aa4b765fd76494370265694b8fdfe4a87$__6305b8c7c2846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156100c457600080fd5b505af41580156100d8573d6000803e3d6000fd5b505050506040513d60208110156100ee57600080fd5b810190808051906020019092919050505090508091505091905056fea265627a7a7231582040518aaaf0ae19783cb9192cc96dea50f49665e488d2c4b64138ac331e33920f64736f6c634300050f0032";
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
    static createInterface(): TestContractLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestContractLib;
}
export interface TestContractLibLibraryAddresses {
    ["contracts/TestContractLib.sol:TestLibrary"]: string;
}
//# sourceMappingURL=TestContractLib__factory.d.ts.map