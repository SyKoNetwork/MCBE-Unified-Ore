const fs = require("fs")

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

var drop = "your drop" //put your ore name here, do not include raw
if (!fs.existsSync(`./${drop}`))
fs.mkdirSync(`./${drop}`)
//list your pickaxes down here make sure minecraft: is there and delete any you dont want, also put your drop here after the pickaxes as well, be sure to INCLUDE raw if its a metal, then you have drop amount min, drop amount max, fortune rolls min, fortune rolls max, make sure they are numbers
fs.writeFileSync(`./${drop}/${drop}_ore.json`, JSON.stringify(createTable(["minecraft:wooden_pickaxe", "minecraft:stone_pickaxe", "minecraft:gold_pickaxe", "minecraft:iron_pickaxe", "minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe"], "your drop", 1, 1, 1, 3)))
