function Title({
  children,
  size,
  position = "center",
  color = "gray-600",
  etiqueta,
}) {
  return !etiqueta ? (
    <h3
      className={`text-${size} text-${position}  text-${color} font-bold py-3`}
    >
      {children}
    </h3>
  ) : (
    <h1
      className={`text-${size} text-${position}  text-${color} font-bold py-3`}
    >
      {children}
    </h1>
  );
}

export default Title;
