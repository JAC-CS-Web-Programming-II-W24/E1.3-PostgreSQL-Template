import postgres from "postgres";

const sql = postgres({
	database: "PokemonDB", // Replace with your DB name.
});

const connection = await sql.reserve();

interface Pokemon {
	name: string;
	type: string;
}

const pokemon = {
	name: "Pikachu",
	type: "Electric",
};

const result = await connection<Pokemon[]>`
		INSERT INTO pokemon
			(name, type)
		VALUES
			(${pokemon.name}, ${pokemon.type})
		RETURNING id
	`;

console.log("Inserted?", result);

const results = await connection<Pokemon[]>`
		SELECT *
		FROM pokemon
		WHERE id = 1
	`;

if (results.length === 0) {
	console.log("bad");
}

console.log("Selected?", results);

await connection.release();
await sql.end();
