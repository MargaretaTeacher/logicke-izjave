let bool = false
let broj = 0
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
input.onButtonPressed(Button.AB, function () {
    broj = randint(1, 9)
    basic.showNumber(broj)
    if (broj % 2 == 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
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
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("T")
        basic.showString("I")
        basic.showString("S")
        basic.showString("I")
        basic.showString("N")
        basic.showString("A")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
