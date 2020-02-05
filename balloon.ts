/**
 * Utility functions for controlling a balloon with a Micro:bit
 */

//% weight=100 color=#0fbc11 icon="\uf1ec" 
namespace balloon {
    /**
     * Parse an up/down instruction received over the radio.
     * Instruction is expected to contain "u" or "d".
     * Returns 1 for up and -1 for down
     * @param instruction the instruction
     */
    //% block
    export function parseHeight(instruction: string): number {
        if (instruction.indexOf("u") >= 0) {
            return 1
        }
        if (instruction.indexOf("d") >= 0) {
            return -1
        }

        return 0
    }

    /**
     * Parse an left/right instruction received over the radio.
     * Instruction is expected to contain "l" or "r".
     * Returns -1 for left and 1 for right
     * @param instruction the instruction
     */
    //% block
    export function parseDirection(instruction: string): number {
        if (instruction.indexOf("l") >= 0) {
            return -1
        }
        if (instruction.indexOf("r") >= 0) {
            return 1
        }

        return 0
    }

    /**
     * Parse an forward/backward instruction received over the radio.
     * Instruction is expected to contain "f" or "b".
     * Returns 1 for forward and -1 for backward
     * @param instruction the instruction
     */
    //% block
    export function parseSpeed(instruction: string): number {
        if (instruction.indexOf("f") >= 0) {
            return 1
        }
        if (instruction.indexOf("b") >= 0) {
            return -1
        }

        return 0
    }
}
