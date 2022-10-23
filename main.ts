let bool = false
let bool2 = false
input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    bool = true
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    bool2 = bool || true
    if (bool2) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(200)
    bool = false
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(200)
    basic.showString("" + (!(bool)))
})
input.onGesture(Gesture.TiltRight, function () {
    bool2 = bool && true
    if (bool2) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
})
