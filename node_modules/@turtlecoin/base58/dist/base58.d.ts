/**
 *  Provides methods that encode/decode hex strings to Base58 and back again.
 */
export declare class Base58 {
    /**
     * Decodes a Base58 string to its hexadecimal equivalent
     * @param encoded string The Base58 encoded string
     * @returns The hexadecimal representation of the data
     */
    static decode(encoded: string): string;
    /**
     * Encodes a hexadecimal string to its Base58 equivalent
     * @param decoded string the hexadecimal encoded string
     * @returns The Base58 representation of the data
     */
    static encode(decoded: string): string;
}
