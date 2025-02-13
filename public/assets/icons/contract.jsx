const Contract = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="7.01562"
        y="13.4375"
        width="38.5"
        height="25.6667"
        rx="2"
        stroke="#265EF7"
        strokeWidth="3"
      />
      <path
        d="M13.4316 19.8555H17.7094"
        stroke="#265EF7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M34.8213 32.6875H39.0991"
        stroke="#265EF7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="26.2653"
        cy="26.2721"
        r="4.91667"
        stroke="#265EF7"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Contract;
