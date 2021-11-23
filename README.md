# MCBE-Unified-Ore

This project aims to create an open sorce repository for custom ores in Minecraft Bedrock!

>  ## Added ores  
> - [X] Tin 
> - [X] White Diamond
> - [X] Topaz
> - [X] Tourmaline
> - [X] Nickel

## General Discussion

You can make suggestions either on github as an ISSUE or on [Discord](https://discord.gg/b7KeMAYdGV)

# Contributing

Thank you for considering to contribute to the **"MCBE-Unified-Ore"** project!

## Starting development

We strongly recommend **"bridge."** to edit the project files as their are presets avilable and a compiler built in to test out the addon in game.

## Presets

With Bridge v2 presets we are able to automate the entire coding process, with a few clicks you can easily create an ore that is semi-customizable and follows the guidelines of the pack! For Loot Tables, please see the loot tables script inside of the loot_tables folder to create them!

## Code Rules

Please be sure to put your name at the top of any code you create so we are able to track who has made what, if you are using the presets this is automatically done for you.

### Verified as working

All code contributed to this repository should be verified as working, meaning you've tested the
functionality at least once and didn't encounter unexpected behaviour.

### Code Style

#### General

We request that all texture/file submissions be nested in a folder with the name of the ore you are submitting.

```
BP/blocks/"ore_name"/deep_slate_"ore_name".json
BP/blocks/"ore_name"/"ore_name".json
BP/blocks/"ore_name"/raw_"ore_name"_block.json

BP/feature_rules/overworld_underground_"ore_name"_ore.json

BP/feature/"ore_name"_feature.json

BP/items/"ore_name"/raw_"ore_name".json

BP/loot_tables/"ore_name"/"ore_name".json

BP/recipes/"ore_name"/furnace_deepslate_"ore_name".json
BP/recipes/"ore_name"/furnace_"ore_name".json
BP/recipes/"ore_name"/furnace_raw_"ore_name".json
BP/recipes/"ore_name"/crafting_raw_"ore_name"_block.json

RP/textures/blocks/"ore_name"/deepslate_"ore_name"_ore
RP/textures/blocks/"ore_name"/"ore_name"_ore
RP/textures/blocks/"ore_name"/"ore_name"_block

RP/textures/items/"ore_name"/raw_"ore_name"
RP/textures/items/"ore_name"/"ore_name"_ingot
```

#### Names

All identifier names should be in the vanilla style and use the namespace **ore-uni:**.

```
ore-uni:deepslate_"ore_name"
ore-uni:"ore_name"
ore-uni:raw_"ore_name"_block

ore-uni:raw_"ore_name"
ore-uni:"ore_name"_ingot
```

### Copyright

Please ensure that **any** and **all** texture submissions are either your own work or submitted with permission of the original creator

### Opening a Pull Request

Please make sure that you have been working with the "dev" branch. Pull requests should use the "dev" branch as their base.
