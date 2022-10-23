let bool = false
input.onButtonPressed(Button.A, function () {
    bool = true
    basic.showString("" + (bool))
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    bool = false
    basic.showString("" + (bool))
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
})
