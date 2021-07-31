---
title: Notes
time: '22:11:58'
draft: true
---

# Uxn

## Execution Model

The VM executes ROM code until a halting condition occurs. 
VM provides run loop and fires vectors into Uxn ROM code as input occurs. 
This means that the VM drives the execution of our Uxn program via input events. 

TODO: How would a non-interactive program continue to run without locking up the VM
Emulator 

## Vector Interrupts

A ROM (uxn compiled file) can register an interrupt vector for the host emulator to jump to.
The VM keeps a table of these devices that map to the first page of memory (256 bytes).
If the ROM code has registered the vector address in this device area or memory, the VM can jump the PC (program
counter) and execute at this point.

TODO: Can currently running code be interrupted and resumed? The simple VMs are single threaded and won't pick up events
on an event loop until returning from ROM execution. iOS and other multi-threaded environments have the ability to do
so.

## Memory

Total: 65,536 bytes
I/O: 256 bytes / 16 sections of 16 bytes
Working Stack: 256 bytes
Return Stack: 256 bytes

16-but addresses for main memory
8-bit addresses are assumed to be in the Zero Page

### Zero Page

First 256 bytes of main memory, mean for data storage during runtime

TODO: How is this not the same space as the device table?



