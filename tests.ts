// Test parseHeight
control.assert(balloon.parseHeight("u") == 1, "u means go up")
control.assert(balloon.parseHeight("ufg") == 1, "u means go up")
control.assert(balloon.parseHeight("d") == -1, "d means go down")
control.assert(balloon.parseHeight("dfg") == -1, "d means go down")
control.assert(balloon.parseHeight("") == 0, "blank means nothing")
control.assert(balloon.parseHeight("x") == 0, "x means nothing")
control.assert(balloon.parseHeight("abc") == 0, "abc means nothing")

// Test parseDirection
control.assert(balloon.parseDirection("l") == -1, "l means go left")
control.assert(balloon.parseDirection("lgh") == -1, "l means go left")
control.assert(balloon.parseDirection("r") == 1, "r means go right")
control.assert(balloon.parseDirection("rgh") == 1, "r means go right")
control.assert(balloon.parseDirection("") == 0, "blank means nothing")
control.assert(balloon.parseDirection("x") == 0, "x means nothing")
control.assert(balloon.parseDirection("abc") == 0, "abc means nothing")

// Test parseSpeed
control.assert(balloon.parseSpeed("f") == 1, "l means go left")
control.assert(balloon.parseSpeed("fgh") == 1, "l means go left")
control.assert(balloon.parseSpeed("b") == -1, "r means go right")
control.assert(balloon.parseSpeed("bgh") == -1, "r means go right")
control.assert(balloon.parseSpeed("") == 0, "blank means nothing")
control.assert(balloon.parseSpeed("x") == 0, "x means nothing")
control.assert(balloon.parseSpeed("acd") == 0, "abc means nothing")

// Done!
basic.showIcon(IconNames.Yes)
