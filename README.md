# def-decl-switcher

A VSCode extension to switch between `*_def.hpp` and `*_decl.hpp` files. This extension is designed primarily for use with the Trilinos library, although it should work in any other codes which follow a similar pattern.

![animated](https://github.com/GrahamBenHarper/def-decl-switcher/assets/12531152/6d6a0cf9-9a57-41ae-bdda-2eb8a96e89a9)

## Features

Open the VSCode context menu with ctrl+P and enter `>Switch Def/Decl` to switch your file.
It's that simple!

**Note:** This only works if your `*_def.hpp` and `*_decl.hpp` file are in the same directory as each other. There are no fancy tricks under the hood! This takes the full path of your editor's open file, replaces `*_def.hpp` with `*_decl.hpp` and vice versa, then opens it.

## How to use

The easiest way to use this extension is to simply download it through the VSCode extension marketplace, listed as "Def/Decl Switcher" with a Trilinos icon.

![image](https://github.com/GrahamBenHarper/def-decl-switcher/assets/12531152/26e5f6c6-a269-4aaa-97c7-f1c17997a04c)

## Compatibility

This extension requires VSCode 1.78 or later.
