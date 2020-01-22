// create a default jsPanel
var tty = ["tty1", "tty2", "tty3"]
var ttyID = 0;

var options = {
    closeOnEscape: true,
    dragit: {
        disabled: true
    },
    resizeit: {
        disabled: true
    },
    theme: {
        bgPanel: 'white',
        bgContent: 'black',
        colorHeader: 'black',
        colorContent: 'white',
        border: '1px solid black'
    },
       header: false,
    position: 'left-top 0 0',
    contentSize: '500 500',
    callback: function () {
        this.content.innerHTML = "<div id=" + tty[ttyID] + "></div>";
        ttyID++;
    },
}

Tiler = new JsPanelTiler(
    jsPanel.create(options).resizeit('disable').dragit('disable')
);

Tiler.AddPanel(jsPanel.create(options).resizeit('disable').dragit('disable'))
Tiler.AddPanel(jsPanel.create(options).resizeit('disable').dragit('disable'))