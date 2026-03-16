const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  eager = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  )
}

export default OptimizedImage