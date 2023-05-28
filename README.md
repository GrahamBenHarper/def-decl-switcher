# def-decl-switcher

A VSCode extension to switch between `*_def.hpp` and `*_decl.hpp` files. This extension is designed primarily for use with the Trilinos library, although it should work in any other codes which follow a similar pattern.

## Features

Open the VSCode context menu with ctrl+P and enter `>Switch Def/Decl` to switch your file.
It's that simple!

**Note:** This only works if your `*_def.hpp` and `*_decl.hpp` file are in the same directory as each other. There are no fancy tricks under the hood! This takes the full path of your editor's open file, replaces `*_def.hpp` with `*_decl.hpp` and vice versa, then opens it.
