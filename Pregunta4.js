
class Material {
    constructor(tipo, cantidad, precioPorUnidad) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precioPorUnidad = precioPorUnidad;
    }

    // Método para verificar el stock
    stock() {
        return this.cantidad;
    }

    // Método para calcular el costo total
    calcularCosto() {
        return this.cantidad * this.precioPorUnidad;
    }

    // Método para mostrar información en la consola
    mostrarInformacion() {
        console.log(`Tipo de material: ${this.tipo}`);
        console.log(`Cantidad en stock: ${this.cantidad}`);
        console.log(`Precio por unidad: $${this.precioPorUnidad}`);
        console.log(`Costo total: $${this.calcularCosto()}`);
    }
}


const material1 = new Material('Cemento', 50, 10); // 50 unidades de cemento a $10 por unidad
const material2 = new Material('Ladrillos', 100, 0.5); // 100 unidades de ladrillos a $0.5 por unidad

// Mostrar información en la consola
material1.mostrarInformacion();
material2.mostrarInformacion();

// Verificar el stock
console.log(`Stock de ${material1.tipo}: ${material1.stock()} unidades`);
console.log(`Stock de ${material2.tipo}: ${material2.stock()} unidades`);

// Calcular el costo total
console.log(`Costo total de ${material1.tipo}: $${material1.calcularCosto()}`);
console.log(`Costo total de ${material2.tipo}: $${material2.calcularCosto()}`);
