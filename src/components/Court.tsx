import React, { useEffect, useState } from "react";
import Player from "./Player";
import type { CourtProps } from "../types";


const Court: React.FC<CourtProps> = ({
	size = 600,
	color = "#2b6cb0",
    players = []
}) => {
    const [rotationIndex, setRotationIndex] = useState(0);
    const [rotation, setRotation] = useState<{ id: number; x: number; y: number }[]>([]);
    const width = Math.round(size * 1);
    const height = (size);
    const [rotationType, setRotationType] = useState("base");

	const rotatePlayersHandler = () => {
		setRotationIndex((prev) => (prev + 1) % players.length);
	};

    useEffect(() => {
        const baseRotation = [
            { id: 1, x: width * 0.8, y: height * 0.7 },
            { id: 2, x: width * 0.8, y: height * 0.2 },
            { id: 3, x: width * 0.5, y: height * 0.2 },
            { id: 4, x: width * 0.2, y: height * 0.2 },
            { id: 5, x: width * 0.2, y: height * 0.7 },
            { id: 6, x: width * 0.5, y: height * 0.7 },
        ];
        const receivingRotation = [
            [
                { id: 1, x: width * 0.9, y: height * 0.8 },
                { id: 2, x: width * 0.8, y: height * 0.7 },
                { id: 3, x: width * 0.1, y: height * 0.2 },
                { id: 4, x: width * 0.05, y: height * 0.1 },
                { id: 5, x: width * 0.2, y: height * 0.7 },
                { id: 6, x: width * 0.5, y: height * 0.7 },
            ],
            [
                { id: 1, x: width * 0.8, y: height * 0.7 },
                { id: 2, x: width * 0.9, y: height * 0.2 },
                { id: 3, x: width * 0.7, y: height * 0.1 },
                { id: 4, x: width * 0.2, y: height * 0.7 },
                { id: 5, x: width * 0.5, y: height * 0.7 },
                { id: 6, x: width * 0.6, y: height * 0.2 },
            ],
            [
                { id: 1, x: width * 0.8, y: height * 0.7 },
                { id: 2, x: width * 0.9, y: height * 0.2 },
                { id: 3, x: width * 0.2, y: height * 0.7 },
                { id: 4, x: width * 0.1, y: height * 0.1 },
                { id: 5, x: width * 0.1, y: height * 0.2 },
                { id: 6, x: width * 0.5, y: height * 0.7 },
            ],
            [
                { id: 1, x: width * 0.9, y: height * 0.8 },
                { id: 2, x: width * 0.2, y: height * 0.7 },
                { id: 3, x: width * 0.1, y: height * 0.1 },
                { id: 4, x: width * 0.05, y: height * 0.2 },
                { id: 5, x: width * 0.5, y: height * 0.7 },
                { id: 6, x: width * 0.8, y: height * 0.7 },
            ],
            [
                { id: 1, x: width * 0.8, y: height * 0.7 },
                { id: 2, x: width * 0.9, y: height * 0.2 },
                { id: 3, x: width * 0.5, y: height * 0.2 },
                { id: 4, x: width * 0.2, y: height * 0.7 },
                { id: 5, x: width * 0.5, y: height * 0.7 },
                { id: 6, x: width * 0.6, y: height * 0.8 },
            ],
            [
                { id: 1, x: width * 0.8, y: height * 0.7 },
                { id: 2, x: width * 0.8, y: height * 0.2 },
                { id: 3, x: width * 0.2, y: height * 0.7 },
                { id: 4, x: width * 0.1, y: height * 0.1 },
                { id: 5, x: width * 0.4, y: height * 0.8 },
                { id: 6, x: width * 0.5, y: height * 0.7 },
            ]
        ];  ;
        setRotation(() => {
            if (rotationType === "base") {
                return baseRotation;
            } else {
                return receivingRotation[rotationIndex] ?? baseRotation;
            }
        } );
    }, [width, height, rotationType, rotationIndex]);

	return (
		<div>
            <div>
                <p>#{`${rotationIndex + 1} ${rotationType === 'base' ? 'Base' : 'Receiving'}`}</p>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "10px", marginBottom: "20px" }}>
                    <button onClick={rotatePlayersHandler}>
                        Show next rotation
                    </button>

                    <button onClick={() => rotationType === 'base' ? setRotationType("receiving") : setRotationType("base")} >
                        {rotationType === 'base' ? "Show Receiving Form" : "Show Base Rotation"}
                    </button>
                </div>
            </div>
            <div>
    			<svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    role="img"
                    aria-label="Court"
                >
                    <rect x={0} y={0} width={width} height={height} rx={8} fill={color} />

                    <line
                        x1={0}
                        y1={0}
                        x2={width}
                        y2={0}
                        stroke="#ffffff"
                        strokeWidth={20}
                        opacity={0.9}
                    />
                    <line
                        x1={0}
                        y1={height / 3}
                        x2={width}
                        y2={height / 3}
                        stroke="#ffffff"
                        strokeWidth={2}
                        opacity={0.9}
                    />

                    { 
                    rotation.map((_, index) => {
                        const currentIdx = (index - rotationIndex + players.length) % players.length;
                        console.log('CurrentIdx:', rotation[currentIdx]);
                        let asd = rotation[currentIdx];

                        return (
                            <g
                                style={{
                                    transform: `translate(${asd.x}px, ${asd.y}px)`,
                                    transition: "transform 0.6s ease-in-out",
                                    transformOrigin: "center center",
                                    pointerEvents: "none",
                                } as React.CSSProperties}
                            >
                                <Player 
                                    key={asd.id}
                                    {...players[index] }
                                    index={asd.id}
                                />
                            </g>
                        )}
                    )
                    }
                </svg>
            </div>
		{
			// (() => {
			// 	const baseRotation = [
			// 		{ id: 1, x: width * 0.8, y: height * 0.7 },
			// 		{ id: 2, x: width * 0.8, y: height * 0.2 },
			// 		{ id: 3, x: width * 0.5, y: height * 0.2 },
			// 		{ id: 4, x: width * 0.2, y: height * 0.2 },
			// 		{ id: 5, x: width * 0.2, y: height * 0.7 },
			// 		{ id: 6, x: width * 0.5, y: height * 0.7 },
			// 	];
				
			// 	return players.map((player, playerIdx) => {
			// 		// Calculate the current position based on rotation
			// 		const currentIdx = (playerIdx - rotation + players.length) % players.length;
			// 		if (currentIdx >= baseRotation.length) return null;
			// 		const pos = baseRotation[currentIdx];
					
			// 		return (
			// 			<g 
			// 				key={player.name}
			// 				style={{
			// 					transform: `translate(${pos.x}px, ${pos.y}px)`,
			// 					transition: "transform 0.6s ease-in-out",
			// 					transformOrigin: "center center",
			// 					pointerEvents: "none",
			// 				} as React.CSSProperties}
			// 			>
			// 				<Player
			// 					{...player}
			// 					x={0}
			// 					y={0}
			// 				/>
			// 			</g>
			// 		);
			// 	});
			// })()
		}

        </div>
	);
};

export default Court;

