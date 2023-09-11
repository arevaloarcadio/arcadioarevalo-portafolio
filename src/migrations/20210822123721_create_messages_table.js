
export async function up(knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('subject');
        table.text('message');
        table.timestamps();
    });
}


export async function down(knex) {
    return knex.schema.dropTable('messages');
}

