module.exports = async ({ createFile, models }) => {
	let {
		TOOL,
		IDENTIFIER,
		DEFAULT_TEXTURE,
        AUTHOR,
        DROP_AMT_MIN,
        DROP_AMT_MAX,
        FORTUNE_ROLLS_MIN,
        FORTUNE_ROLLS_MAX
	} = models
	await createFile(`textures/loot_tables/${IDENTIFIER}/${IDENTIFIER}.json`, IDENTIFIER, { packPath: 'behaviorPack' })
}