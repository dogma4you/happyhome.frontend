const Arrow = ({width, height, ...props}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <path id="Path" d="M2 13.5L8 7.5L2 1.5" strokeWidth="2.8" strokeLinecap="round"
                          strokeLinejoin="round"/>
        </svg>
    )
}

export default Arrow