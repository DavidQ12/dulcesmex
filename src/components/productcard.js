import { useState } from 'react';
import './productcard.css';

function ProductCard({
  name = "Producto",
  price = 0,
  image = "https://gourmetdemexico.com.mx/wp-content/uploads/2024/04/dulces-mexicanos-con-chilito.jpeg",
  onAddToCart,
  isNew = false,
  isOutOfStock = false,
  discount,
  originalPrice,
  category = "Dulces",
  rating = 0,
  reviewCount = 0,
  weight = "",
  flavor = ""
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const safePrice = Number(price) || 0;
  const safeOriginalPrice = Number(originalPrice) || 0;
  const hasDiscount = discount && safeOriginalPrice > safePrice;
  const discountPercentage = hasDiscount 
    ? Math.round(((safeOriginalPrice - safePrice) / safeOriginalPrice) * 100)
    : 0;

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (isOutOfStock || !onAddToCart) return;
    
    setIsAddingToCart(true);
    
    // Simular proceso de agregar al carrito
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      onAddToCart({ 
        name, 
        price: safePrice, 
        image,
        originalPrice: safeOriginalPrice,
        discount: hasDiscount ? discountPercentage : 0,
        weight,
        flavor
      });
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1582058091505-87d6f2c13d84?w=400&h=300&fit=crop&crop=center";
    e.target.alt = "Imagen no disponible";
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    console.log("Producto agregado a favoritos:", name);
    
    // Aquí puedes hacer una llamada a tu API de favoritos
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    console.log("Vista rápida:", name);
    // Aquí puedes abrir un modal con detalles del producto
  };

  const handleProductClick = (e) => {
    // Navegar a la página de detalles del producto
    console.log("Ver detalles de:", name);
    // window.location.href = `/producto/${slug}`;
  };

  // Generar estrellas de rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled">⭐</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star half">⭐</span>);
      } else {
        stars.push(<span key={i} className="star">⭐</span>);
      }
    }

    return stars;
  };

  return (
    <div 
      className={`product-card ${isOutOfStock ? "out-of-stock" : ""} ${hasDiscount ? "has-discount" : ""}`}
      onClick={handleProductClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleProductClick(e)}
    >
      {/* Badges superpuestos */}
      <div className="product-card__badges">
        {isNew && <span className="badge badge--new">✨ Nuevo</span>}
        {hasDiscount && <span className="badge badge--sale">-{discountPercentage}%</span>}
        {isOutOfStock && <span className="badge badge--out">😔 Agotado</span>}
        {category && <span className="badge badge--category">{category}</span>}
        {weight && <span className="badge badge--weight">{weight}</span>}
      </div>

      {/* Botones de acción */}
      <div className="product-card__actions">
        <button
          className={`product-card__favorite ${isFavorite ? "favorited" : ""}`}
          onClick={handleFavorite}
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <button
          className="product-card__quick-view"
          onClick={handleQuickView}
          aria-label="Vista rápida"
        >
          👁️
        </button>
      </div>

      {/* Contenedor de imagen */}
      <div className="product-card__image-container">
        {!imageLoaded && (
          <div className="image-skeleton">
            <div className="skeleton-loader"></div>
          </div>
        )}
        <img
          src={image}
          alt={`${name} - ${category}`}
          className={`product-card__image ${imageLoaded ? "loaded" : ""}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />

        {/* Overlay de acciones */}
        {!isOutOfStock && (
          <div className="product-card__overlay">
            <button
              className={`product-card__add-btn ${isAddingToCart ? "adding" : ""}`}
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              aria-label={`Agregar ${name} al carrito`}
            >
              {isAddingToCart ? (
                <>
                  <span className="add-btn__loader"></span>
                  <span className="add-btn__text">Agregando...</span>
                </>
              ) : (
                <>
                  <span className="add-btn__icon">🛒</span>
                  <span className="add-btn__text">Agregar al Carrito</span>
                </>
              )}
            </button>
            
            <button
              className="product-card__details-btn"
              onClick={handleQuickView}
            >
              <span className="details-btn__icon">🔍</span>
              Ver Detalles
            </button>
          </div>
        )}

        {/* Efecto de producto agotado */}
        {isOutOfStock && (
          <div className="product-card__out-of-stock-overlay">
            <span className="out-of-stock-text">AGOTADO</span>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="product-card__info">
        {/* Categoría y rating */}
        <div className="product-card__meta">
          <span className="product-card__category">{category}</span>
          {rating > 0 && (
            <div className="product-card__rating">
              <div className="rating-stars">
                {renderStars()}
              </div>
              {reviewCount > 0 && (
                <span className="rating-count">({reviewCount})</span>
              )}
            </div>
          )}
        </div>

        {/* Nombre del producto */}
        <h3 className="product-card__name" title={name}>
          {name}
        </h3>

        {/* Sabor (si está disponible) */}
        {flavor && (
          <p className="product-card__flavor">
            Sabor: <span>{flavor}</span>
          </p>
        )}
        
        {/* Precios */}
        <div className="product-card__pricing">
          {hasDiscount && (
            <div className="pricing__discount-info">
              <span className="product-card__original-price">
                ${safeOriginalPrice.toFixed(2)}
              </span>
              <span className="discount-percentage">-{discountPercentage}%</span>
            </div>
          )}
          <div className="pricing__current">
            <span className="product-card__price">
              ${safePrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="product-card__savings">
                Ahorras ${(safeOriginalPrice - safePrice).toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Estado de stock y acciones adicionales */}
        <div className="product-card__footer">
          {isOutOfStock ? (
            <div className="product-card__stock-info">
              <p className="product-card__stock-message">
                ⏳ Próximamente disponible
              </p>
              <button className="notify-btn" aria-label="Notificar cuando esté disponible">
                📧 Avísame
              </button>
            </div>
          ) : (
            <div className="product-card__availability">
              <span className="availability-dot"></span>
              <span className="availability-text">En stock • Envío gratis</span>
              <button 
                className="buy-now-btn"
                onClick={handleAddToCart}
                aria-label="Comprar ahora"
              >
                Comprar ahora
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Efecto de agregado al carrito */}
      {isAddingToCart && (
        <div className="product-card__add-effect">
          <span>+1</span>
        </div>
      )}
    </div>
  );
}

export default ProductCard;