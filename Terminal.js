command = {
    echo: function(value) {
        this.echo(value);
    }
}

$(function() {
    $("#tty1").terminal(command, {
        greetings: "Welcome To My Portfolio!\n",
        prompt: "[[;white;]>>> ]"
    });

    $("#tty2").terminal(command, {
        greetings: "A Second Terminal Wow\n",
        prompt: "[[;white;]>>> ]"
    });

    $("#tty3").terminal(command, {
        greetings: "A Third Terminal Wow\n",
        prompt: "[[;white;]>>> ]"
    });
})