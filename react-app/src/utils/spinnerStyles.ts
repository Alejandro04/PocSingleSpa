export class SpinnerStyles {
    static baseStyle = {
      display: "inline-block",
      border: "4px solid #f3f3f3", /* color del borde */
      borderTop: "4px solid #3498db", /* color de la parte superior del borde */
      borderRadius: "50%",
      width: "116px",
      height: "116px",
      animation: "spin 4s linear infinite"
    };

    greenStyle = {
      ...SpinnerStyles.baseStyle,
      borderTopColor: "#28a745"
    };
  }