<?php
$productos = [
  [
    "nombre" => "Nike Air Max 270",
    "precio" => 150,
    "imagen" => "https://via.placeholder.com/300x200?text=Nike+Air+Max+270"
  ],
  [
    "nombre" => "Adidas Yeezy Boost",
    "precio" => 220,
    "imagen" => "https://via.placeholder.com/300x200?text=Adidas+Yeezy"
  ],
  [
    "nombre" => "Puma Future Rider",
    "precio" => 120,
    "imagen" => "https://via.placeholder.com/300x200?text=Puma+Future+Rider"
  ],
  [
    "nombre" => "New Balance 574",
    "precio" => 110,
    "imagen" => "https://via.placeholder.com/300x200?text=NB+574"
  ]
];

foreach ($productos as $producto): ?>
  <div class="product-card">
    <img src="<?= $producto['imagen'] ?>" alt="<?= htmlspecialchars($producto['nombre']) ?>">
    <div class="product-info">
      <h3><?= htmlspecialchars($producto['nombre']) ?></h3>
      <p>Precio: $<?= number_format($producto['precio'], 2) ?></p>
      <button class="btn" onclick="agregarAlCarrito('<?= addslashes($producto['nombre']) ?>')">Agregar al carrito</button>
    </div>
  </div>
<?php endforeach; ?>
