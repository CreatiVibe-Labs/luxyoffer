export default function LoadingSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="24"
            height="24"
            style={{
                shapeRendering: "auto",
                display: "block",
                background: "transparent",
            }}
        >
            <g>
                <circle
                    strokeDasharray="160.22122533307947 55.40707511102649"
                    r="34"
                    strokeWidth="10"
                    stroke="#ffffff"
                    fill="none"
                    cy="50"
                    cx="50"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1.8867924528301885s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                    />
                </circle>
            </g>
        </svg>
    );
}
