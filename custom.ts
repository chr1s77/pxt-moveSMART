
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#BB8FCE icon="\uf00c"
namespace check {
    /**
     * TODO: drag your step variable here
     * @param n describe parameter here, eg: step
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function send(n:number): void {
        // Add code here
        bluetooth.advertiseUrl("https://check.com?step=" + ("" + n), 7, false)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }

}
