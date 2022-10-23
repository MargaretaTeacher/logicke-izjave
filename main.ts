let a = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        a = true
        basic.showString("" + (a))
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        a = false
        basic.showString("" + (a))
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
})
