---
title: Arm Debugging
---

Connect to target with OpenOCD, which will host a port we will connect to later with GDB.

Interfaces and Targets might live here if you installed OpenOCD via brew:
(/usr/local/Cellar/open-ocd/0.11.0/share/openocd/scripts)

    $ openocd -f interface/stlink.cfg -f target/stm32f0x.cfg

Open another terminal window, which will connect to the hosted port for debugging 
Note: port may be different, see output of above command

    $ arm-none-eabi-gdb main.elf
    > target extended-remote :3333
    > load

GDB Quick Guide
https://beej.us/guide/bggdb/
