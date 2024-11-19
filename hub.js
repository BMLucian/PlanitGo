// Lista de Proveedores
const proveedores = [
    { region: "USA", proveedor: "Expedia TAAP", producto: "Hoteles, actividades, paquetes, coches de alquiler y tours", actividad: "Excelente alcance global", comision: "5.5% - 13%", link: "https://www.expedia.com/TAAP" },
    { region: "EU", proveedor: "Room-Res", producto: "Hoteles, tours, coches de alquiler, transfers", actividad: "Precios competitivos en Europa y América", comision: "11%", link: "https://www.room-res.com/" },
    { region: "LATAM", proveedor: "Viator", producto: "Tours y actividades globales", actividad: "Ideal para actividades locales y tours guiados", comision: "10%", link: "https://www.viator.com/" },
    { region: "USA", proveedor: "Disney Travel Agents", producto: "Hoteles Disney, entradas a parques temáticos, cruceros", actividad: "Perfecto para familias", comision: "10% - 13%", link: "https://www.disneytravelagents.com/" },
    { region: "MEX", proveedor: "Grupo Xcaret", producto: "Parques temáticos", actividad: "Experiencias únicas para vacaciones en familia", comision: "12%", link: "https://www.xcaret.com/es/" },
    { region: "EU", proveedor: "Tour-Radar", producto: "Paquetes turísticos sin vuelos", actividad: "Ideal para clientes que ya tienen vuelos", comision: "10% - 15%", link: "https://www.tourradar.com/" },
    { region: "EU", proveedor: "Trafalgar", producto: "Tours guiados y culturales", actividad: "Ideal para explorar nuevas culturas", comision: "16%", link: "https://www.trafalgar.com/" },
    { region: "EU", proveedor: "Civitatis", producto: "Actividades locales, entradas y transfers", actividad: "Excelente para experiencias personalizadas", comision: "10%", link: "https://www.civitatis.com/" },
    { region: "EU", proveedor: "Petrabax", producto: "Tours y paquetes vacacionales en España y Portugal", actividad: "Especialista en la Península Ibérica", comision: "12% - 17%", link: "https://www.petrabax.com/" },
    { region: "EU", proveedor: "Barceló Pro", producto: "Hoteles en Europa y el Caribe", actividad: "Excelente para viajes de lujo", comision: "14%", link: "https://www.barcelopro.com/" },
    { region: "USA", proveedor: "Exoticca", producto: "Paquetes all-inclusive (excepto vuelos)", actividad: "Ideal para tours organizados", comision: "13%", link: "https://www.exoticca.com/" },
    { region: "CAR", proveedor: "Sandals", producto: "Resorts de lujo en el Caribe", actividad: "Perfecto para lunas de miel o escapadas románticas", comision: "16%", link: "https://www.sandals.com/" },
    { region: "GLOBAL", proveedor: "G-Adventures", producto: "Tours de aventura y culturales", actividad: "Ideal para clientes aventureros", comision: "Pendiente", link: "https://www.gadventures.com/" },
    { region: "USA", proveedor: "Golden Tickets", producto: "Entradas a conciertos, eventos deportivos y culturales", actividad: "Un plus para diversificar ofertas", comision: "10%", link: "https://www.goldentickets.com/" },
    { region: "USA", proveedor: "Pleasant Holidays", producto: "Hoteles y paquetes turísticos en América", actividad: "Excelente opción para el Caribe y EE. UU.", comision: "15%", link: "https://www.pleasantholidays.com/" }
];

// Función para Renderizar la Tabla
function renderTable(filterRegion = "all", searchQuery = "") {
    const tbody = document.querySelector("#hub-table tbody");
    tbody.innerHTML = ""; // Limpia la tabla

    const filteredProveedores = proveedores.filter((prov) => {
        const matchesRegion = filterRegion === "all" || prov.region === filterRegion;
        const matchesSearch = prov.proveedor.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesRegion && matchesSearch;
    });

    filteredProveedores.forEach((prov) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${prov.proveedor}</td>
            <td>${prov.producto}</td>
            <td>${prov.actividad}</td>
            <td>${prov.comision}</td>
            <td><a href="${prov.link}" target="_blank">Ver</a></td>
        `;
        tbody.appendChild(row);
    });
}

// Funcionalidad de Filtros y Búsqueda
document.getElementById("region-filter").addEventListener("change", (e) => {
    renderTable(e.target.value, document.getElementById("search-input").value);
});

document.getElementById("search-input").addEventListener("input", (e) => {
    renderTable(document.getElementById("region-filter").value, e.target.value);
});

document.getElementById("clear-filters").addEventListener("click", () => {
    document.getElementById("region-filter").value = "all";
    document.getElementById("search-input").value = "";
    renderTable();
});

// Render Inicial
renderTable();
