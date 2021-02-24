input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
})
input.onButtonPressed(Button.AB, function () {
    moveSMART.send()
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
    moveSMART.stopCounting()
})
basic.forever(function () {
    moveSMART.showStepCount()
})

