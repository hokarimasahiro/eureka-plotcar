input.onButtonPressed(Button.A, function () {
    watchfont.showIcon(
    "01110",
    "10001",
    "11111",
    "10001",
    "10001"
    )
})
MbitMore.onReceivedTextWithLabel("plot", function (textData) {
    que.push(textData)
    watchfont.showNumber2(que.length)
})
input.onButtonPressed(Button.B, function () {
    watchfont.showIcon(
    "11110",
    "10001",
    "11110",
    "10001",
    "11110"
    )
})
let param = 0
let cmd = ""
let que: string[] = []
eureka_plotter_car.plotter_degree(-10)
eureka_plotter_car.plottercar_pen(pen_onoff.up)
MbitMore.startService()
que = []
basic.forever(function () {
    if (que.length > 0) {
        cmd = que[0].split(",")[0]
        param = parseFloat(que[0].split(",")[1])
        que.shift()
        if (cmd == "f") {
            MbitMore.sendNumberWithLabel("f", param)
            eureka_plotter_car.plottercar_1sou_forward(param)
        } else if (cmd == "b") {
            MbitMore.sendNumberWithLabel("b", param)
            eureka_plotter_car.plottercar_1sou_back(param)
        } else if (cmd == "l") {
            MbitMore.sendNumberWithLabel("l", param)
            eureka_plotter_car.plottercar_L_cycle(param)
        } else if (cmd == "r") {
            MbitMore.sendNumberWithLabel("r", param)
            eureka_plotter_car.plottercar_R_cycle(param)
        } else if (cmd == "u") {
            eureka_plotter_car.plottercar_pen(pen_onoff.up)
            MbitMore.sendNumberWithLabel("u", param)
        } else if (cmd == "d") {
            eureka_plotter_car.plottercar_pen(pen_onoff.down)
            MbitMore.sendNumberWithLabel("d", param)
        } else if (cmd == "c") {
            MbitMore.sendNumberWithLabel("c", param)
            eureka_plotter_car.cycle(param)
        }
        watchfont.showNumber2(que.length)
    }
})
