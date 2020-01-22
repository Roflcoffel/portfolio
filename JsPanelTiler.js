//Manage all Jspanels and tiles them.

class JsPanelTiler {

    constructor(master) {
        this.panels = [];

        this.AddPanel(master);
    }

    AddPanel(panel) {
        this.panels.push(panel);
        this.Render();
    }

    //On specific keybind, switch master with the highlighted panel
    SwitchMaster() {

    }

    //Draw And Resize All Panels
    Render() {
        if(this.panels.length == 1) 
        {
            //Full screen master
            this.panels[0].resize({
                width: $(document).width(),
                height: $(document).height()
            })
        } 
        else if(this.panels.length == 2)
        {
            //Master 50%, Right-Top 50%
            for (let i = 0; i < this.panels.length; i++) {
                this.panels[i].resize({
                    width: $(document).width()/2,
                    height: $(document).height()
                })
            }
           
            this.panels[1].reposition("right-top 0 0")
        } 
        else if(this.panels.length == 3)
        {
            //Master 50%, Right-Top 50% 50%, Right-Bottom, 50% 50%
            for (let i = 1; i < this.panels.length; i++) {
                this.panels[i].resize({
                    width: $(document).width()/2,
                    height: $(document).height()/2
                })
            }

            this.panels[2].reposition("right-bottom 0 0")
        }
    }
}