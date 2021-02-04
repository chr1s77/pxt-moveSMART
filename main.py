step = 0

def on_button_pressed_a():
    bluetooth.advertise_url("https://haha.com?step=" + ("" + str(step)), 7, False)
    basic.clear_screen()
    led.plot(3, 3)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    bluetooth.stop_advertising()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global step
    step += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    basic.show_number(step)
    basic.pause(100)
basic.forever(on_forever)
