input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    while (true) {
        basic.showString("A")
        basic.showString("L")
        basic.showString("A")
        basic.showString("R")
        basic.showString("M")
        basic.showString("E")
    }
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    while (true) {
        basic.showString("A")
        basic.showString("L")
        basic.showString("A")
        basic.showString("R")
        basic.showString("M")
        basic.showString("E")
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
