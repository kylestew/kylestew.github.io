---
title: Notes
---

# Uxn

## Varvara

Useful for development

    F1 - Zoom levels
    F2 - Show debug overlay
    F3 - Screenshot


## Opcodes

### Stack

| opcode     | usage            | name          | info          |
| ---------- | ---------------- | ------------- | ------------- |
| 0x00 `BRK` | ( -- )           | Break         | halts exection (closes subroutine) |
| 0x01 `LIT` | ( a b -- a+b )   | Literal       | fetches value and pushes onto stack |
| 0x02 `---` |                  |               | |
| 0x03 `POP` | ( a -- )         | Pop           | remove top element from the stack |
| 0x04 `DUP` | ( a -- a a )     | Duplicate     | duplicate top element |
| 0x05 `SWP` | ( a b -- b a )   | Swap          | change order |
| 0x06 `OVR` | ( a b -- a b a)  | Over          | push copy of second to top element |
| 0x07 `ROT` | ( a b c -- b c a )| Rotate       | reorder top 3 elements on stack |

### Logic

| opcode     | usage            | name          | info          |
| ---------- | ---------------- | ------------- | ------------- |
| 0x08 `EQU` | ( a b -- a==b )  | Equal         | push 01 on stack if true, 00 otherwise |
| 0x09 `NEQ` | ( a b -- a!=b )  | Not Equal     | push 01 on stack if true, 00 otherwise |
| 0x0a `GTH` | ( a b -- a\>b )  | Greater Than  | push 01 on stack if true, 00 otherwise |
| 0x0b `LTH` | ( a b -- a\<b )  | Lesser Than   | push 01 on stack if true, 00 otherwise |
| 0x0c `JMP` | ( addr -- )      | Jump          | jump unconditionally to address |
| 0x0d `JCN` | ( addr val -- )  | Jump Cond     | jump if value is not zero, otherwise continue |
...

jumps are relative in byte mode (forward or backward from current position, -128 to 127)
in short mode, jumps are absolute

### Memory

| opcode     | usage            | name          | info          |
| ---------- | ---------------- | ------------- | ------------- |
| 0x10 `LDZ` | ( addr -- val )  | Load Zero     | |
| 0x11 `STZ` | ( val addr -- )  | Store Zero    | |
...
| 0x16 `DEI` | ( addr -- val )  | Device In     | grab value from given device address and push onto stack |
| 0x17 `DEO` | ( val addr -- )  | Device Out    | output value into given device address |

### Arithmetic

| opcode     | usage            | name          | info          |
| ---------- | ---------------- | ------------- | ------------- |
| 0x18 `ADD` | ( a b -- a+b )   | Add           | adds two values |
| 0x19 `SUB` | ( a b -- a-b )   | Subtrack      | subtracts two values |
| 0x1a `MUL` | ( a b -- a\*b )  | Multiply      | multiplies two values |
| 0x1b `DIV` | ( a b -- a/b )   | Divide        | divides two values |
| 0x1c `AND` | ( a b -- a&b )   | And           | bitwise AND |
| 0x1d `ORA` | ( a b -- a|b )   | Or            | bitwise OR |
| 0x1e `EOR` | ( a b -- a^b )   | Exclusive Or  | bitwise eclusive-OR |
| 0x1f `SFT` | ( a n -- a\<\<n )| Shift         | bitshifts a value |


## Runes

| rune | name               | what it does       |
| ---- | ------------------ | ------------------ |
| `%`  | macro define       | reuse instructions |

### Pads & Labels

Tells Uxnasm where to place things in memory

| rune | name               | what it does       |
| ---- | ------------------ | ------------------ |
| `|`  | pad absolute       | tell Uxn where to place our code in memory |
| `$`  | pad relative       | where to place code relative to currrent placeholder |
| `@`  | label              | symbolicate location for use later |
| `&`  | sublabel define    | child of previously defined label |
| `/`  | sublabel spacer    | used to recall `label/sublabel` paths |


### Literals

Prepends a `LIT` instruction - shorthand for loading values onto the stack

| rune | name                       | what it does       |
| ---- | -------------------------- | ------------------ |
| `#`  | literal hex                | `#02` --> `LIT 02` |
| `.`  | literal addr (zero-page)   | pushes absolute address in zero page memory (byte) |
| `;`  | absolute address (main)    | pushes absolute address of label onto stack (short) |
| `,`  | relative address (main)    | pushes relative address of label onto stack (byte) |
' `:`  | raw address (main)         | not from a label (short) |

### Raw Values

Translates to raw values stored in code (does not load in stack)

| rune | name               | what it does       |
| ---- | ------------------ | ------------------ |
| `'`  | raw character      | translates ascii char to byte value |


## Varvara

Emulator

### System Device

Can set colors using R/G/B shorts on the System device.
Uxn only allows for 4 colors. Each RGB short is split into 4 pieces to make up those colors.

    |00 @System [ &vector $2 &pad $6 &r $2 &g $2 &b $2 ]

    |0100
        ( set system colors )
        #2ce9 .System/r DEO2
        #01c0 .System/g DEO2
        #2ce5 .System/b DEO2

Read vertically, from left to right

+ Color 0 - R: 2, G: 0, B: 2 (#220022)
+ Color 1 - R: c, G: 1, B: c (#cc11cc)
+ Color 2 - R: e, G: c, B: e (#eeccee)
+ Color 3 - R: 9, G: 0, B: 5 (#990055)

Not sure why they chose to repeat the upper nibble in the lower nibble
It's done by multiplying the 4 bit value by 0x11 (10 + 1)



## More Information

### Execution Model

The VM executes ROM code until a halting condition occurs. 
VM provides run loop and fires vectors into Uxn ROM code as input occurs. 
This means that the VM drives the execution of our Uxn program via input events. 
Single threaded, any running Uxn code needs to finish before returning to the emulator event cycle.

### Vector Interrupts

A ROM (uxn compiled file) can register an interrupt vector for the host emulator to jump to.
The VM keeps a table of these devices that map to the first page of memory (256 bytes).
If the ROM code has registered the vector address in this device area or memory, the VM can jump the PC (program
counter) and execute at this point in ROM code (that is loaded into main memory).

Interrupts can't be serviced until currently running Uxn code is finished, at least in the case of the Varvara computer.

### Memory

Total: 65,536 bytes
I/O: 256 bytes / 16 sections of 16 bytes
Working Stack: 256 bytes
Return Stack: 256 bytes

16-but addresses for main memory
8-bit addresses are assumed to be in the Zero Page

### Zero Page

First 256 bytes of main memory, mean for data storage during runtime

TODO: How is this not the same space as the device table?



