module.exports = async ({ createFile, models }) => {
  const {
    ORE,
    ITERATIONS,
    Y_LEVEL_MIN,
    Y_LEVEL_MAX,
    EXTENT_MIN,
    EXTENT_MAX,
    PASS,
    DISTRIBUTION,
    NETHER,
    END,
    OVERWORLD,
  } = models;

  var ore = ORE;
  var iterations = ITERATIONS;
  var yExtent = [Y_LEVEL_MIN, Y_LEVEL_MAX];
  var extent = [EXTENT_MIN, EXTENT_MAX];
  var pass = PASS;
  var distribution = DISTRIBUTION;
  let biomes = [];
  var overworld = OVERWORLD;
  var nether = NETHER;
  var end = END;
  if (nether) {
    biomes.push("nether");
  }
  if (end) {
    biomes.push("end");
  }
  if (overworld) {
    biomes.push("overworld", "overworld_generation");
  }

  function createRule(
    ore,
    biome,
    iterations,
    yExtent,
    extent,
    pass,
    distribution
  ) {
    let path = [];
    let rule = {
      format_version: "1.13.0",
      "minecraft:feature_rules": {
        description: {
          ore: `ore-uni:overworld_underground_${ore}_ore`,
          places_feature: `ore-uni:${ore}_ore_feature`,
        },
        conditions: {
          placement_pass: pass,
          "minecraft:biome_filter": [
            {
              any_of: path,
            },
          ],
        },
        distribution: {
          iterations: iterations,
          coordinate_eval_order: "zyx",
          x: {
            distribution: distribution,
            extent: extent,
          },
          y: {
            distribution: distribution,
            extent: yExtent,
          },
          z: {
            distribution: distribution,
            extent: extent,
          },
        },
      },
    };
    biome.forEach(v => path.push(biomeFilter(v)));
    return rule;
  }
  function biomeFilter(biomes) {
    return {
      test: "has_biome_tag",
      operator: "==",
      value: biomes,
    };
  }

  await createFile(
    `BP/feature_rules/overworld_underground_${ORE}_ore.json`,
    JSON.stringify(
      createRule(
        ore,
        biomes,
        iterations,
        yExtent,
        extent,
        pass,
        distribution
      )
    )
  );
};
