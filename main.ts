radio.onReceivedNumber(function (receivedNumber) {
    count = count + receivedNumber
    if (count < 2) {
        count = 2
    }
    if (count > 60) {
        count = 60
    }
    haloDisplay.clear()
    for (let index = 0; index <= count; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Red))
    }
    haloDisplay.show()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(-3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let count = 0
music.setVolume(8)
count = 2
radio.setGroup(1)
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.clear()
basic.showString("Hello Aran and Maya!")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
music.playTone(262, music.beat(BeatFraction.Eighth))
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (count < 15) {
        basic.pause(2000)
    } else if (count < 30) {
        basic.pause(1000)
    } else if (count < 45) {
        basic.pause(500)
    } else if (count < 55) {
        basic.pause(200)
    } else {
        basic.pause(100)
    }
})
