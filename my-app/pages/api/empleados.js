
const empleados = [
    "Martin",
    "Maria",
    "Juan",
    "Roberta"
];

export default function handler(request, response) {
    if (request.method === 'GET') {
        response.json({ empleados: empleados });
    }

    if (request.method === 'POST') {
        // POST
    }
}
