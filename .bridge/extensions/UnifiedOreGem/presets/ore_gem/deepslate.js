module.exports = async ({ createFile, expandFile, models }) => {
  const {
    IDENTIFIER,
    EXPLOSION_RESISTANCE,
    DEEPSLATE_EXPLOSION_RESISTANCE,
    NETHER_EXPLOSION_RESISTANCE,
    END_EXPLOSION_RESISTANCE,
    OVERWORLD,
    END,
    NETHER,
    IDENTIFIER_NAME,
  } = models;

  if (NETHER && OVERWORLD) {
    var recipeData = {
      format_version: "1.12",
      "minecraft:recipe_furnace": {
        description: {
          identifier: `ore-uni:furnace_nether_${IDENTIFIER}_ore`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:nether_${IDENTIFIER}_ore`,
        output: `ore-uni:${IDENTIFIER}`,
      },
    };
    var langData = `tile.ore-uni:nether_${IDENTIFIER}_ore.name=Nether ${IDENTIFIER_NAME} Ore`;
    var blockData = {
      format_version: "1.16.100",
      "minecraft:block": {
        description: {
          identifier: `ore-uni:nether_${IDENTIFIER}_ore`,
        },
        components: {
          "minecraft:creative_category": {
            category: "nature",
            group: "itemGroup.name.ore",
          },
          "minecraft:destroy_time": 1.5,
          "minecraft:explosion_resistance": NETHER_EXPLOSION_RESISTANCE,
          "minecraft:material_instances": {
            "*": {
              texture: `uni_nether_${IDENTIFIER}_ore`,
              render_method: "opaque",
            },
          },
          "minecraft:unit_cube": {},
          "minecraft:loot": `loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
        },
      },
    };

    await createFile(
      `BP/blocks/${IDENTIFIER}/nether_${IDENTIFIER}_ore.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_nether_${IDENTIFIER}_ore.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:nether_${IDENTIFIER}_ore`]: {
        sound: "nether",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_nether_${IDENTIFIER}_ore`]: {
          textures: `textures/blocks/${IDENTIFIER}/nether_${IDENTIFIER}_ore`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    await expandFile(`BP/features/${IDENTIFIER}_ore_feature.json`, {
      "minecraft:ore_feature": {
        replace_rules: [
          {
            places_block: {
              name: `ore-uni:nether_${IDENTIFIER}_ore`,
              states: {},
            },
            may_replace: [
              {
                name: "minecraft:netherrack",
                states: {},
              },
              {
                name: "minecraft:soul_sand",
                states: {},
              },
              {
                name: "minecraft:soul_soil",
                states: {},
              },
              {
                name: "minecraft:blackstone",
                states: {},
              },
              {
                name: "minecraft:basalt",
                states: {},
              },
            ],
          },
        ],
      },
    });
  }

  if (END && (OVERWORLD || NETHER)) {
    var recipeData = {
      format_version: "1.12",
      "minecraft:recipe_furnace": {
        description: {
          identifier: `ore-uni:furnace_end_${IDENTIFIER}_ore`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:end_${IDENTIFIER}_ore`,
        output: `ore-uni:${IDENTIFIER}`,
      },
    };
    var langData = `tile.ore-uni:end_${IDENTIFIER}_ore.name=End ${IDENTIFIER_NAME} Ore`;
    var blockData = {
      format_version: "1.16.100",
      "minecraft:block": {
        description: {
          identifier: `ore-uni:end_${IDENTIFIER}_ore`,
        },
        components: {
          "minecraft:creative_category": {
            category: "nature",
            group: "itemGroup.name.ore",
          },
          "minecraft:destroy_time": 1.5,
          "minecraft:explosion_resistance": END_EXPLOSION_RESISTANCE,
          "minecraft:material_instances": {
            "*": {
              texture: `uni_end_${IDENTIFIER}_ore`,
              render_method: "opaque",
            },
          },
          "minecraft:unit_cube": {},
          "minecraft:loot": `loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
        },
      },
    };

    await createFile(
      `BP/blocks/${IDENTIFIER}/end_${IDENTIFIER}_ore.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_end_${IDENTIFIER}_ore.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:end_${IDENTIFIER}_ore`]: {
        sound: "end",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_end_${IDENTIFIER}_ore`]: {
          textures: `textures/blocks/${IDENTIFIER}/end_${IDENTIFIER}_ore`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    await expandFile(`BP/features/${IDENTIFIER}_ore_feature.json`, {
      "minecraft:ore_feature": {
        replace_rules: [
          {
            places_block: {
              name: `ore-uni:end_${IDENTIFIER}_ore`,
              states: {},
            },
            may_replace: [
              {
                name: "minecraft:end_stone",
                states: {},
              },
            ],
          },
        ],
      },
    });
  }

  if (OVERWORLD) {
    var recipeData = {
      format_version: "1.12",
      "minecraft:recipe_furnace": {
        description: {
          identifier: `ore-uni:furnace_deepslate_${IDENTIFIER}_ore`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:deepslate_${IDENTIFIER}_ore`,
        output: `ore-uni:${IDENTIFIER}`,
      },
    };
    var langData = `tile.ore-uni:deepslate_${IDENTIFIER}_ore.name=Deepslate ${IDENTIFIER_NAME} Ore`;
    var blockData = {
      format_version: "1.16.100",
      "minecraft:block": {
        description: {
          identifier: `ore-uni:deepslate_${IDENTIFIER}_ore`,
        },
        components: {
          "minecraft:creative_category": {
            category: "nature",
            group: "itemGroup.name.ore",
          },
          "minecraft:destroy_time": 1.5,
          "minecraft:explosion_resistance": DEEPSLATE_EXPLOSION_RESISTANCE,
          "minecraft:material_instances": {
            "*": {
              texture: `uni_deepslate_${IDENTIFIER}_ore`,
              rdeepslateer_method: "opaque",
            },
          },
          "minecraft:unit_cube": {},
          "minecraft:loot": `loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
        },
      },
    };

    await createFile(
      `BP/blocks/${IDENTIFIER}/deepslate_${IDENTIFIER}_ore.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_deepslate_${IDENTIFIER}_ore.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:deepslate_${IDENTIFIER}_ore`]: {
        sound: "deepslate",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_deepslate_${IDENTIFIER}_ore`]: {
          textures: `textures/blocks/${IDENTIFIER}/deepslate_${IDENTIFIER}_ore`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    await expandFile(`BP/features/${IDENTIFIER}_ore_feature.json`, {
      "minecraft:ore_feature": {
        replace_rules: [
          {
            places_block: {
              name: `ore-uni:deepslate_${IDENTIFIER}_ore`,
              states: {},
            },
            may_replace: [
              {
                name: "minecraft:deepslate",
                states: {},
              },
              {
                name: "minecraft:tuff",
                states: {},
              },
            ],
          },
        ],
      },
    });
  }

  if (OVERWORLD || (NETHER && !OVERWORLD) || (!NETHER && !OVERWORLD && END)) {
    var recipeData = {
      format_version: "1.12",
      "minecraft:recipe_furnace": {
        description: {
          identifier: `ore-uni:furnace_${IDENTIFIER}_ore`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:${IDENTIFIER}_ore`,
        output: `ore-uni:${IDENTIFIER}`,
      },
    };
    var langData = `tile.ore-uni:${IDENTIFIER}_ore.name=${IDENTIFIER_NAME} Ore`;
    if (OVERWORLD) {
      var blockData = {
        format_version: "1.16.100",
        "minecraft:block": {
          description: {
            identifier: `ore-uni:${IDENTIFIER}_ore`,
          },
          components: {
            "minecraft:creative_category": {
              category: "nature",
              group: "itemGroup.name.ore",
            },
            "minecraft:destroy_time": 1.5,
            "minecraft:explosion_resistance": EXPLOSION_RESISTANCE,
            "minecraft:material_instances": {
              "*": {
                texture: `uni_${IDENTIFIER}_ore`,
                rdeepslateer_method: "opaque",
              },
            },
            "minecraft:unit_cube": {},
            "minecraft:loot": `loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
          },
        },
      };
    }

    if (NETHER) {
      var blockData = {
        format_version: "1.16.100",
        "minecraft:block": {
          description: {
            identifier: `ore-uni:${IDENTIFIER}_ore`,
          },
          components: {
            "minecraft:creative_category": {
              category: "nature",
              group: "itemGroup.name.ore",
            },
            "minecraft:destroy_time": 1.5,
            "minecraft:explosion_resistance": NETHER_EXPLOSION_RESISTANCE,
            "minecraft:material_instances": {
              "*": {
                texture: `uni_${IDENTIFIER}_ore`,
                rdeepslateer_method: "opaque",
              },
            },
            "minecraft:unit_cube": {},
            "minecraft:loot": `loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
          },
        },
      };
    }

    if (END) {
      var blockData = {
        format_version: "1.16.100",
        "minecraft:block": {
          description: {
            identifier: `ore-uni:${IDENTIFIER}_ore`,
          },
          components: {
            "minecraft:creative_category": {
              category: "nature",
              group: "itemGroup.name.ore",
            },
            "minecraft:destroy_time": 1.5,
            "minecraft:explosion_resistance": END_EXPLOSION_RESISTANCE,
            "minecraft:material_instances": {
              "*": {
                texture: `uni_${IDENTIFIER}_ore`,
                rdeepslateer_method: "opaque",
              },
            },
            "minecraft:unit_cube": {},
            "minecraft:loot": `loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
          },
        },
      };
    }

    await createFile(
      `BP/blocks/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_${IDENTIFIER}_ore.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:${IDENTIFIER}_ore`]: {
        sound: "stone",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_${IDENTIFIER}_ore`]: {
          textures: `textures/blocks/${IDENTIFIER}/${IDENTIFIER}_ore`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    if (OVERWORLD) {
      await expandFile(`BP/features/${IDENTIFIER}_ore_feature.json`, {
        "minecraft:ore_feature": {
          replace_rules: [
            {
              places_block: {
                name: `ore-uni:${IDENTIFIER}_ore`,
                states: {},
              },
              replace_rules: [
                {
                  places_block: {
                    name: `ore-uni:${IDENTIFIER}_ore`,
                    states: {},
                  },
                  may_replace: [
                    {
                      name: "minecraft:stone",
                      states: {
                        stone_type: "stone",
                      },
                    },
                    {
                      name: "minecraft:stone",
                      states: {
                        stone_type: "andesite",
                      },
                    },
                    {
                      name: "minecraft:stone",
                      states: {
                        stone_type: "granite",
                      },
                    },
                    {
                      name: "minecraft:stone",
                      states: {
                        stone_type: "diorite",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      });
    }
    if (NETHER) {
      await expandFile(`BP/features/${IDENTIFIER}_ore_feature.json`, {
        "minecraft:ore_feature": {
          replace_rules: [
            {
              places_block: {
                name: `ore-uni:${IDENTIFIER}_ore`,
                states: {},
              },
              may_replace: [
                {
                  name: "minecraft:netherrack",
                  states: {},
                },
                {
                  name: "minecraft:soul_sand",
                  states: {},
                },
                {
                  name: "minecraft:soul_soil",
                  states: {},
                },
                {
                  name: "minecraft:blackstone",
                  states: {},
                },
                {
                  name: "minecraft:basalt",
                  states: {},
                },
              ],
            },
          ],
        },
      });
    }
    if (END) {
      await expandFile(`BP/features/${IDENTIFIER}_ore_feature.json`, {
        "minecraft:ore_feature": {
          replace_rules: [
            {
              places_block: {
                name: `ore-uni:${IDENTIFIER}_ore`,
                states: {},
              },
              may_replace: [
                {
                  name: "minecraft:end_stone",
                  states: {},
                },
              ],
            },
          ],
        },
      });
    }
  }
};
