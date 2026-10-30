import sql from 'better-sqlite3'

const db = sql('meals.db')

// De normal esto no devuelve una promise, pero como es una base de datos local, no hay problema en usarlo así. 
// En un entorno de producción, probablemente querrías usar algo que devuelva promesas para manejar la asincronía.
export async function getAllMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simula un retraso de 2 segundos
    return db.prepare('SELECT * FROM meals').all()
}

export function getMealById(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}