function Title({ children, size, position = "center", color = "gray-500" }) {
  return (
    <h3
      className={`text-${size} text-${position}  text-${color} font-bold py-3`}
    >
      {children}
    </h3>
  );
}

export default Title;
