import React from "react";
import type { PlayerProps, Role } from "../types";

const colorMap: { [key in Role]: string } = {
    SET: "#4a7cf1ff", // red
    LIB: "#48bb78", // green
    OH4: "#ecaa75ff", // blue
    OH2: "#ed8936", // orange
    OP: "#9f7aea", // purple
    MB1: "#4be4ecff", // yellow
    MB2: "#38b2ac", // teal
};

const roleMap: { [key in Role]: string } = {
    SET: "A",
    LIB: "L",
    OH4: "E4",
    OH2: "E2",
    OP: "Op",
    MB1: "C1",
    MB2: "C2",
};

const Player: React.FC<PlayerProps> = ({
	name,
	role,
	x = 0,
	y = 0,
	radius = 40,
	index,
}) => {

	return (
		<g>
				{index < 2 || index > 4 ? 
			    <circle cx={x} cy={y} r={radius} fill={colorMap[role as Role]} opacity={0.95} />
            :   <polygon points={`${0} ${-60}, ${40} ${20}, ${-40} ${20}`} fill={colorMap[role as Role]} opacity={0.95}
                style={{
                    transform: `scale(1)`,
                    transition: "transform 4.6s ease-in-out",
                    // transformOrigin: "center center",
                    // pointerEvents: "none",
                }}
            /> 
            }
			<text
				x={x}
				y={y - 8}
				fontSize={14}
				fill="#333"
				textAnchor="middle"
				dominantBaseline="central"
				fontWeight="bold"
			>
				{name}
			</text>
			<text
				x={x}
				y={y + 12}
				fontSize={12}
				fill="#000"
				textAnchor="middle"
				dominantBaseline="central"
			>
				{roleMap[role as Role]}
			</text>
		</g>
	);
};

export default Player;
