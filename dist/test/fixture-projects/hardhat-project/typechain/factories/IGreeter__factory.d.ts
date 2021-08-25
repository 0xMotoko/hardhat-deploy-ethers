import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGreeter, IGreeterInterface } from "../IGreeter";
export declare class IGreeter__factory {
    static readonly abi: {
        constant: boolean;
        inputs: never[];
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
    static createInterface(): IGreeterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGreeter;
}
//# sourceMappingURL=IGreeter__factory.d.ts.map