export class ComponentPC {
    constructor({ nombre, categoria, marca, precio, stock }) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = parseFloat(precio.toFixed(2));
        this.stock = stock;
    }

    render() {
        return (
            <>
                <td>{this.nombre}</td>
                <td>{this.categoria}</td>
                <td>{this.marca}</td>
                <td>{this.precio}</td>
                <td>{this.stock}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            
            </>
        );
    }
}

export class CPU extends ComponentPC {
    constructor({ nombre, categoria, marca, precio, stock, nucleos, frecuencia }) {
        super({ nombre, categoria, marca, precio, stock });
        this.nucleos = nucleos;
        this.frecuencia = frecuencia;
    }

    render() {
        return (
            <>
                <td>{this.nombre}</td>
                <td>{this.categoria}</td>
                <td>{this.marca}</td>
                <td>{this.precio}</td>
                <td>{this.stock}</td>
                <td>{this.nucleos}</td>
                <td>{this.frecuencia}Ghz</td>
                <td>-</td>
                <td>-</td>
            </>
        );
    }
}

export class GPU extends ComponentPC {
    constructor({ nombre, categoria, marca, precio, stock, memoria, tdp }) {
        super({ nombre, categoria, marca, precio, stock });
        this.memoria = memoria;
        this.tdp = tdp;
    }

    render() {
        return (
            <>
                <td>{this.nombre}</td>
                <td>{this.categoria}</td>
                <td>{this.marca}</td>
                <td>{this.precio}</td>
                <td>{this.stock}</td>
                <td>-</td>
                <td>-</td>
                <td>{this.memoria}GB</td>
                <td>{this.tdp}W </td>
            </>
        );
    }
}

export const components = [
  new ComponentPC({ nombre: 'Placa Base B550M', categoria: 'Motherboard', marca: 'MSI', precio: 129.99, stock: 5 }),
  new ComponentPC({ nombre: 'Memoria RAM 16GB DDR4', categoria: 'RAM', marca: 'Corsair', precio: 79.99, stock: 20 }),
  new GPU({ nombre: 'Tarjeta Gráfica RTX 3060', categoria: 'GPU', marca: 'NVIDIA', precio: 349.99, stock: 0, memoria: 12, tdp: 170 }),
  new ComponentPC({ nombre: 'Fuente de Alimentación 750W', categoria: 'PSU', marca: 'EVGA', precio: 99.99, stock: 15 }),
  new ComponentPC({ nombre: 'Disco Duro 1TB SSD', categoria: 'Storage', marca: 'Samsung', precio: 119.99, stock: 8 }),
  new ComponentPC({ nombre: 'Caja ATX', categoria: 'Case', marca: 'NZXT', precio: 79.99, stock: 3 }),
  new ComponentPC({ nombre: 'Disipador CPU', categoria: 'Cooler', marca: 'Cooler Master', precio: 49.99, stock: 12 }),
  new CPU({ nombre: 'Intel Core i9-10900K', categoria: 'CPU', marca: 'Intel', precio: 499.99, stock: 7, nucleos: 10, frecuencia: 3.7 }),
  new GPU({ nombre: 'Tarjeta Gráfica RX 6800 XT', categoria: 'GPU', marca: 'AMD', precio: 649.99, stock: 2, memoria: 16, tdp: 300 }),
  new ComponentPC({ nombre: 'Memoria RAM 32GB DDR4', categoria: 'RAM', marca: 'G.Skill', precio: 149.99, stock: 10 }),
  new ComponentPC({ nombre: 'Placa Base Z490', categoria: 'Motherboard', marca: 'ASUS', precio: 179.99, stock: 4 }),
  new GPU({ nombre: 'Tarjeta Gráfica GTX 1660', categoria: 'GPU', marca: 'NVIDIA', precio: 229.99, stock: 6, memoria: 6, tdp: 120 })
];

