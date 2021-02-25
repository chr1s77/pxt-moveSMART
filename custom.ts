
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
//% weight=100 color=#FF3F00 icon="\uf1ae"
namespace moveSMART{
    //variables
    let step = 0;
    let counting: Boolean = false;
    let sendingBluetooth: Boolean = false;

    
    /**
     * TODO: start counting steps
     */
    //%block weight=3000
    export function startCounting(): void {
        counting = true
    }
    /**
     * TODO: stop counting steps
     */
    //%block weight=2000
    export function stopCounting(): void {
        counting = false
    }

    /**
     * TODO: show number of steps
     */
    //%block weight=1000
    export function showStepCount(): void {
        if (!sendingBluetooth) {
            basic.showNumber(step_count())
            basic.pause(100)
        }
    }

    /**
     * TODO: drag your step variable here
     * @param n describe parameter here, eg: step
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block weight=100
    export function send(): void {
        // Add code here
        sendingBluetooth = true;
        let startTime = control.millis()
        bluetooth.advertiseUrl("https://check.com?step=" + ("" + step), 7, false)
        basic.clearScreen()
        while (control.millis() - startTime < 1000 * 5) {
            basic.showIcon(IconNames.Happy)
        }
        bluetooth.stopAdvertising()
        sendingBluetooth = false;
        basic.showIcon(IconNames.StickFigure)
    }

    //helper functions

    input.onGesture(Gesture.Shake, function () {
        if (counting) {
            step += 1
        }
    })

    function step_count(): number {
        return step
    }

}
