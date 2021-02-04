input.onButtonPressed(Button.A, function () {
    check.startCounting()
})
input.onButtonPressed(Button.AB, function () {
    check.send()
})
// input.onButtonPressed(Button.AB, function () {
// let step = 0
// startTime = control.millis()
// bluetooth.advertiseUrl(
// "https://haha.com?step=" + ("" + step),
// 7,
// false
// )
// basic.clearScreen()
// led.plot(3, 3)
// while (control.millis() - startTime < 1000 * 5) {
// basic.showIcon(IconNames.Butterfly)
// }
// bluetooth.stopAdvertising()
// basic.showIcon(IconNames.StickFigure)
// })
input.onButtonPressed(Button.B, function () {
    check.stopCounting()
})
basic.forever(function () {
    check.showStepCount()
})
