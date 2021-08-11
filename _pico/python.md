---
title: Pico - MicroPython
---

[MicroPython docs](https://docs.micropython.org/en/latest/rp2/quickref.html)

## Using `rshell`

[rshell](https://github.com/dhylands/rshell) will automatically connect to a board if its plugged in

    $ rshell
    > repl

( close REPL <Ctrl-x> )

## Development Cycle

Still trying to figure out a good working cycle.

In theory using Python should allow you to do a lot of dev locally before pushing to the target board.
Having the REPL means you can also interact with Python on remote board to solve unknowns and fold into main code.

1. Write code on local machine
2. Start (or continue) `rshell` session
3. Copy code files over to pyboard `cp main.py /pyboard/`
4. Use rshell `repl` to interact with new code snippets

___`main.py` will boot by default if on the board___

### Simpler Code Deploy

TODO: Can probably ship code via VSCode with a simple command tied to a hot key:

https://github.com/dhylands/rshell#cmd

## IDE

It's hard to beat VSCode's Python support with its built in Jupyter notebooks workflow.

