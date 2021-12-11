module.exports = async ({ createFile, models }) => {
	const {
		IDENTIFIER,
		DROP_AMT_MIN,
		DROP_AMT_MAX,
		FORTUNE_ROLLS_MIN,
		FORTUNE_ROLLS_MAX,
		TOOL
	} = models

	var dropAmtMin = DROP_AMT_MIN
	var dropAmtMax = DROP_AMT_MAX
	var drop = `ore-uni:raw_${IDENTIFIER}`
	var fortuneRollsMin = FORTUNE_ROLLS_MIN
	var fortuneRollsMax = FORTUNE_ROLLS_MAX 

	if (TOOL === "WOOD") {
		var tool = ["minecraft:wooden_pickaxe", "minecraft:stone_pickaxe", "minecraft:gold_pickaxe", "minecraft:iron_pickaxe", "minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe"]
	}

	if (TOOL === "STONE") {
		var tool = ["minecraft:stone_pickaxe", "minecraft:gold_pickaxe", "minecraft:iron_pickaxe", "minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe"]
	}

	if (TOOL === "GOLD") {
		var tool = ["minecraft:gold_pickaxe", "minecraft:iron_pickaxe", "minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe"]
	}

	if (TOOL === "IRON") {
		var tool = ["minecraft:iron_pickaxe", "minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe"]
	}

	if (TOOL === "DIAMOND") {
		var tool = ["minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe"]
	}

	if (TOOL === "NETHERITE") {
		var tool = ["minecraft:netherite_pickaxe"]
	}

	function createTable(tools, drop, dropAmtMin, dropAmtMax, fortuneRollsMin, fortuneRollsMax) {
		let table = {
			pools: []
		}
		tools.forEach(v => table.pools.push(rolls(v, drop, dropAmtMin, dropAmtMax, fortuneRollsMin, fortuneRollsMax)))
		return table
	}
	function rolls(tool, drop, dropAmtMin, dropAmtMax, fortuneRollsMin, fortuneRollsMax) {
		return {
			"rolls": 1,
			"conditions": [
				{
					"condition": "match_tool",
					"item": tool,
					"count": 1
				}
			],
			"entries": [
				{
					"weight": 1,
					"type": "item",
					"name": drop,
					"count": {
						"min": dropAmtMin,
						"max": dropAmtMax
					},
					"pools": [
						{
							"rolls": {
								"min": fortuneRollsMin,
								"max": fortuneRollsMax
							},
							"entries": [
								{
									"type": "item",
									"name": drop,
									"functions": [
										{
											"function": "set_count",
											"count": {
												"min": 0,
												"max": 1
											},
											"conditions": [
												{
													"condition": "match_tool",
													"item": tool,
													"count": 1,
													"enchantments": [
														{
															"enchantment": "fortune",
															"level": {
																"min": 1,
																"max": 1
															}
														},
														{
															"enchantment": "efficiency",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "mending",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "vanishing_curse",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "unbreaking",
															"level": {
																"min": 0,
																"max": 999
															}
														}
													]
												}
											]
										},
										{
											"function": "set_count",
											"count": {
												"min": 0,
												"max": 2
											},
											"conditions": [
												{
													"condition": "match_tool",
													"item": tool,
													"count": 1,
													"enchantments": [
														{
															"enchantment": "fortune",
															"level": {
																"min": 2,
																"max": 2
															}
														},
														{
															"enchantment": "efficiency",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "mending",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "vanishing_curse",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "unbreaking",
															"level": {
																"min": 0,
																"max": 999
															}
														}
													]
												}
											]
										},
										{
											"function": "set_count",
											"count": {
												"min": 0,
												"max": 3
											},
											"conditions": [
												{
													"condition": "match_tool",
													"item": tool,
													"count": 1,
													"enchantments": [
														{
															"enchantment": "fortune",
															"level": {
																"min": 3,
																"max": 3
															}
														},
														{
															"enchantment": "efficiency",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "mending",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "vanishing_curse",
															"level": {
																"min": 0,
																"max": 999
															}
														},
														{
															"enchantment": "unbreaking",
															"level": {
																"min": 0,
																"max": 999
															}
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	}

	await createFile(
		`BP/loot_tables/${IDENTIFIER}/${IDENTIFIER}_ore.json`,
		JSON.stringify(createTable(tool, drop, dropAmtMin, dropAmtMax, fortuneRollsMin, fortuneRollsMax))
	)
}