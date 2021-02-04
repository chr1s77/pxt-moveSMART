let step = 0
input.onButtonPressed(Button.A, function () {
    check.send(step)
})
input.onButtonPressed(Button.AB, function () {
    bluetooth.advertiseUrl(
    "https://haha.com?step=" + ("" + step),
    7,
    false
    )
    basic.clearScreen()
    led.plot(3, 3)
})
input.onButtonPressed(Button.B, function () {
    bluetooth.stopAdvertising()
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
basic.forever(function () {
    basic.showNumber(step)
    basic.pause(100)
})
