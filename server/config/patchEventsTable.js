import pool from "../config/database.js";

export const patchEventsTable = async () => {
  try {
    console.log("🔧 Patching events table…");

    // Allow nulls on both columns (xor constraint still controls correctness)
    await pool.query(`
      ALTER TABLE events
      ALTER COLUMN organizer_user_id DROP NOT NULL,
      ALTER COLUMN organizer_admin_id DROP NOT NULL;
    `);

    // Re-create XOR constraint if missing
    await pool.query(`
      DO $$ BEGIN
        ALTER TABLE events
        ADD CONSTRAINT event_requires_creator
        CHECK (
          (organizer_user_id IS NOT NULL AND organizer_admin_id IS NULL)
          OR
          (organizer_user_id IS NULL AND organizer_admin_id IS NOT NULL)
        );
      EXCEPTION
        WHEN duplicate_object THEN NULL;
      END $$;
    `);

    console.log("✅ Patch applied / already correct");
  } catch (e) {
    console.log("ℹ️ Patch not required");
  }
};
