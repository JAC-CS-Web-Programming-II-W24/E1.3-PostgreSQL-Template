import postgres from "postgres";

const sql = postgres({
	database: "YourDB", // Replace with your DB name.
});

// --- Start of your code ---

/**
 * Please read the exercise for more detailed instructions.
 *
 * 1. Declare the interface.
 * 2. Declare the variable using the interface as the type.
 * 3. INSERT a new row and retrieve the newly inserted ID.
 * 4. SELECT the new row.
 * 5. (Optional) UPDATE the row.
 * 6. (Optional) DELETE the row.
 * 7. console.log() after each operation.
 */

// --- End of your code ---

await sql.end();
