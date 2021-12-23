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
    ORE,
    ORE_NAME
  } = models;

  if (NETHER && OVERWORLD) {
    var recipeData = {
      format_version: "1.12",
      "minecraft:recipe_furnace": {
        description: {
          identifier: `ore-uni:furnace_nether_${ORE}`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:nether_${ORE}`,
        output: `ore-uni:${IDENTIFIER}_scrap`,
      },
    };
    var langData = `tile.ore-uni:nether_${ORE}.name=Nether ${ORE_NAME}`;
    var blockData = {
      format_version: "1.16.100",
      "minecraft:block": {
        description: {
          identifier: `ore-uni:nether_${ORE}`,
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
              texture: `uni_nether_${ORE}`,
              render_method: "opaque",
            },
          },
          "minecraft:unit_cube": {},
          "minecraft:loot": `loot_tables/${IDENTIFIER}/${ORE}.json`,
        },
      },
    };

    await createFile(
      `BP/blocks/${IDENTIFIER}/nether_${ORE}.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_nether_${ORE}.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:nether_${ORE}`]: {
        sound: "nether",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_nether_${ORE}`]: {
          textures: `textures/blocks/${IDENTIFIER}/nether_${ORE}`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    await expandFile(`BP/features/${ORE}_feature.json`, {
      "minecraft:ore_feature": {
        replace_rules: [
          {
            places_block: {
              name: `ore-uni:nether_${ORE}`,
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
          identifier: `ore-uni:furnace_end_${ORE}`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:end_${ORE}`,
        output: `ore-uni:${IDENTIFIER}_scrap`,
      },
    };
    var langData = `tile.ore-uni:end_${ORE}.name=End ${ORE_NAME}`;
    var blockData = {
      format_version: "1.16.100",
      "minecraft:block": {
        description: {
          identifier: `ore-uni:end_${ORE}`,
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
              texture: `uni_end_${ORE}`,
              render_method: "opaque",
            },
          },
          "minecraft:unit_cube": {},
          "minecraft:loot": `loot_tables/${IDENTIFIER}/${ORE}.json`,
        },
      },
    };

    await createFile(
      `BP/blocks/${IDENTIFIER}/end_${ORE}.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_end_${ORE}.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:end_${ORE}`]: {
        sound: "end",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_end_${ORE}`]: {
          textures: `textures/blocks/${IDENTIFIER}/end_${ORE}`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    await expandFile(`BP/features/${ORE}_feature.json`, {
      "minecraft:ore_feature": {
        replace_rules: [
          {
            places_block: {
              name: `ore-uni:end_${ORE}`,
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
          identifier: `ore-uni:furnace_deepslate_${ORE}`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:deepslate_${ORE}`,
        output: `ore-uni:${IDENTIFIER}_scrap`,
      },
    };
    var langData = `tile.ore-uni:deepslate_${ORE}.name=Deepslate ${ORE_NAME}`;
    var blockData = {
      format_version: "1.16.100",
      "minecraft:block": {
        description: {
          identifier: `ore-uni:deepslate_${ORE}`,
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
              texture: `uni_deepslate_${ORE}`,
              render_method: "opaque",
            },
          },
          "minecraft:unit_cube": {},
          "minecraft:loot": `loot_tables/${IDENTIFIER}/${ORE}.json`,
        },
      },
    };

    await createFile(
      `BP/blocks/${IDENTIFIER}/deepslate_${ORE}.json`,
      JSON.stringify(blockData)
    );

    await createFile(
      `BP/recipes/${IDENTIFIER}/furnace_deepslate_${ORE}.json`,
      JSON.stringify(recipeData)
    );

    await expandFile("RP/blocks.json", {
      [`ore-uni:deepslate_${ORE}`]: {
        sound: "deepslate",
      },
    });

    await expandFile("RP/textures/terrain_texture.json", {
      texture_data: {
        [`uni_deepslate_${ORE}`]: {
          textures: `textures/blocks/${IDENTIFIER}/deepslate_${ORE}`,
        },
      },
    });

    await expandFile("RP/texts/en_US.lang", langData);

    await expandFile(`BP/features/${ORE}_feature.json`, {
      "minecraft:ore_feature": {
        replace_rules: [
          {
            places_block: {
              name: `ore-uni:deepslate_${ORE}`,
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
          identifier: `ore-uni:furnace_${ORE}`,
        },
        tags: ["furnace", "blast_furnace"],
        input: `ore-uni:${ORE}`,
        output: `ore-uni:${IDENTIFIER}_scrap`,
      },
    };
    var langData = `tile.ore-uni:${ORE}.name=${ORE_NAME}`;
    if (OVERWORLD || (NETHER && !OVERWORLD) || (!NETHER && !OVERWORLD && END)) {
      var recipeData = {
        format_version: "1.12",
        "minecraft:recipe_furnace": {
          description: {
            identifier: `ore-uni:furnace_${ORE}`,
          },
          tags: ["furnace", "blast_furnace"],
          input: `ore-uni:${ORE}`,
          output: `ore-uni:${IDENTIFIER}`,
        },
      };
      var langData = `tile.ore-uni:${ORE}.name=${ORE_NAME}`;
      if (OVERWORLD) {
        var blockData = {
          format_version: "1.16.100",
          "minecraft:block": {
            description: {
              identifier: `ore-uni:${ORE}`,
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
                  texture: `uni_${ORE}`,
                  render_method: "opaque",
                },
              },
              "minecraft:unit_cube": {},
              "minecraft:loot": `loot_tables/${IDENTIFIER}/${ORE}.json`,
            },
          },
        };
      }

      if (NETHER) {
        var blockData = {
          format_version: "1.16.100",
          "minecraft:block": {
            description: {
              identifier: `ore-uni:${ORE}`,
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
                  texture: `uni_${ORE}`,
                  render_method: "opaque",
                },
              },
              "minecraft:unit_cube": {},
              "minecraft:loot": `loot_tables/${IDENTIFIER}/${ORE}.json`,
            },
          },
        };
      }

      if (END) {
        var blockData = {
          format_version: "1.16.100",
          "minecraft:block": {
            description: {
              identifier: `ore-uni:${ORE}`,
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
                  texture: `uni_${ORE}`,
                  render_method: "opaque",
                },
              },
              "minecraft:unit_cube": {},
              "minecraft:loot": `loot_tables/${IDENTIFIER}/${ORE}.json`,
            },
          },
        };
      }

      await createFile(
        `BP/blocks/${IDENTIFIER}/${ORE}.json`,
        JSON.stringify(blockData)
      );

      await createFile(
        `BP/recipes/${IDENTIFIER}/furnace_${ORE}.json`,
        JSON.stringify(recipeData)
      );

      await expandFile("RP/blocks.json", {
        [`ore-uni:${ORE}`]: {
          sound: "stone",
        },
      });

      await expandFile("RP/textures/terrain_texture.json", {
        texture_data: {
          [`uni_${ORE}`]: {
            textures: `textures/blocks/${IDENTIFIER}/${ORE}`,
          },
        },
      });

      await expandFile("RP/texts/en_US.lang", langData);

      if (OVERWORLD) {
        await expandFile(`BP/features/${ORE}_feature.json`, {
          "minecraft:ore_feature": {
            replace_rules: [
              {
                places_block: {
                  name: `ore-uni:${ORE}`,
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
        });
      }
      if (NETHER) {
        await expandFile(`BP/features/${ORE}_feature.json`, {
          "minecraft:ore_feature": {
            replace_rules: [
              {
                places_block: {
                  name: `ore-uni:${ORE}`,
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
        await expandFile(`BP/features/${ORE}_feature.json`, {
          "minecraft:ore_feature": {
            replace_rules: [
              {
                places_block: {
                  name: `ore-uni:${ORE}`,
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
  }
};
