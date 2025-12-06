// ABRIR MODAL
document.querySelectorAll('.card-stack').forEach(stack => {
    stack.addEventListener('click', () => {
        document.getElementById('modal-img').src = stack.getAttribute('data-img');
        document.getElementById('modal-nombre').innerText = stack.getAttribute('data-nombre');
        document.getElementById('modal-descripcion').innerText = stack.getAttribute('data-descripcion');

        document.getElementById('modal').style.display = 'flex';
    });
});

// CERRAR MODAL (botón X)
document.getElementById('cerrar-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// CERRAR MODAL al hacer click fuera
document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
// =========================
// ABRIR MODAL AL HACER CLICK
// =========================

document.querySelectorAll(".card-stack").forEach(card => {
    card.addEventListener("click", () => {

        const img = card.dataset.img;
        const nombre = card.dataset.nombre;
        const descripcion = card.dataset.descripcion;

        // Insertar en el modal
        document.getElementById("modal-img").src = img;
        document.getElementById("modal-nombre").textContent = nombre;
        document.getElementById("modal-descripcion").textContent = descripcion;

        document.getElementById("modal").style.display = "flex";
    });
});

// =========================
// CERRAR MODAL
// =========================

document.getElementById("cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

// Cerrar modal haciendo clic afuera
window.addEventListener("click", e => {
    const modal = document.getElementById("modal");
    if (e.target === modal) modal.style.display = "none";
});
