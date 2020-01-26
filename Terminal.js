var filesystem = {
    children: {
        'Projects': {
            'Challenges': {
                children: {
                    'index.html': {
                        path: './Projects/Challenges/index.html' //Link to a real index.html
                    },
                    'Agemashite': {
                        children: {
                            'index.html': {
                                path: './Projects/Challenges/Agemashite/index.html' //Link to a real index.html
                            }
                        }
                    },
                    'Fractal_Tree': {
                        children: {
                            'index.html': {
                                path: './Projects/Challenges/Fractal_Tree/index.html' //Link to a real index.html
                            }
                        }
                    },
                    'Maurer_Rose': {
                        children: {
                            'index.html': {
                                path: './Projects/Challenges/Maurer_Rose/index.html' //Link to a real index.html
                            }
                        }
                    },
                    'LW_Challenge': {
                        children: {
                            'index.html': {
                                path: './Projects/Challenges/LW_Challenge/index.html' //Link to a real index.html
                            }
                        }
                    }
                }
            },
            'Games': {
                children: {
                    'Ultimate_Tic_Tac_Toe': {
                        children: {

                        }
                    },
                    'Gnop': {
                        children: {

                        }
                    },
                    'Snake': {
                        children: {
                            'Lua_ver': {
                                children: {

                                }
                            },
                            'JS_v1': {
                                children: {

                                }
                            },
                            'JS_v2': {
                                children: {

                                }
                            }
                        }
                    },
                    'Breakout': {
                        children: {

                        }
                    },
                    'Tetris': {
                        children: {

                        }
                    },
                    'Roguelike': {
                        children: {

                        }
                    },
                    'Magissa': {
                        children: {

                        }
                    }
                }
            },
            'Tools': {
                children: {

                }
            },
            'Hardware_Stuff': {
                children: {
                    'Midi_Visualizer': {
                        children: {

                        }
                    },
                    'BASIC_Retro_Computer': {
                        children: {

                        }
                    }
                }
            },
            'Web': {
                children: {
                    'Lattice': {
                        children: {

                        }
                    }
                }
            },
            'Mods': {
                children: {
                    'Gensokyo_EU4': {

                    }
                }
            }
        },
        'Music': {
            children: {
                'index.html': {
                    path: './Music/index.html'
                },
                'Cantabile_Score.pdf': {
                    path: './Music/Cantabile_Score.pdf' //link to real pdf
                },
                'Lunaria_Score.pdf': {
                    path: './Music/Lunaria_Score.pdf' //link to real pdf
                }
            }            
        },
        'Stuff': {
            children: {
                'Hello_World_With_8_Operators': {
                    children:  {

                    }
                },
                'Hello_World_In_X86_And_Binary': {
                    children: {

                    }
                },
                'Functional_Programming_In_Haskell_Lua_C#': {
                    children: {

                    }
                },
                'C64->GEOS->RSC_Channel->Discord': {
                    children: {

                    }
                },
                'The_transformation_of_Roflcoffel.se': {
                    children: {

                    }
                },
                'Webio_and_Webvideo_Java': {
                    children: {

                    }
                },
                'JavaFX_Saker': {
                    children: {

                    }
                },
                'A_Billion_Programs_(Scripting)': {
                    children: {

                    }
                },
                'Linux_From_Scratch': {
                    children: {

                    }
                }
            }
        }
    }
}

var path = [];
var cwd = fs;
function restore_cwd(fs, path) {
    path = path.slice();
    while (path.length) {
        var dir_name = path.shift();
        if (!fs[dir_name].children) {
            throw new Error('Internal Error Invalid directory ' + $.terminal.escape_brackets(dir_name));
        }
        fs = fs[dir_name];
    }
    return fs;
}
function is_dir(obj) {
    return !!(obj && obj.children);
}
function is_file(obj) {
    return !!obj && typeof obj.path === 'string';
}
var commands = {
    cd: function(dir) {
        if (dir === '/') {
            path = [];
            cwd = restore_cwd(fs, path);
        } else if (dir === '..') {
            if (path.length) {
                path.pop(); // remove from end
                cwd = restore_cwd(fs, path);
            }
        } else if (!is_dir(cwd.children[dir])) {
            this.error($.terminal.escape_brackets(dir) + ' is not a directory');
        } else {
            cwd = cwd.children[dir];
            path.push(dir);
        }
    },
    ls: function() {
        if (!cwd.children) {
            throw new Error('Internal Error Invalid directory');
        }
        var dir = Object.keys(cwd.children).map(function(key) {
            if (is_dir(cwd.children[key])) {
                return key + '/';
            }
            return key;
        });
        this.echo(dir.join('\n'));
    },
    cat: function(file) {
        
        if (!is_file(cwd.children[file])) {
            this.error($.terminal.escape_brackets(file) + " don't exists");
        } else {
            this.echo(cwd.children[file].content);
            /*
            $.get(cwd.children[file].path, this.echo).fail(() => {
                this.error("AJAX error can't find the file " + file);
            });
            */
        }
    },
    help: function() {
        this.echo('Available commands: ' + Object.keys(commands).join(', '));
    }
};

$(function() {
    $("#tty1").terminal(command, {
        greetings: "Welcome To My Portfolio!\n",
        prompt: "[[;white;]" + path.join("/") + "$ ]" 
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