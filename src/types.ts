export const Roles = {
  SET: "SET",
  LIB: "LIB",
  OH4: "OH4",
  OH2: "OH2",
  OP: "OP",
  MB1: "MB1",
  MB2: "MB2",
} as const;

export type Role = typeof Roles[keyof typeof Roles];

export type Player = {
  name: string;
  role: Role;
}

export type Position = {
	id: number;
	x: number;
	y: number;
};

export type Rotations = {
  baseRotation: Position[];
  receivingRotation: Position[];
}

export type CourtProps = {
	size?: number;
	color?: string;
	players?: Player[];
};

export type PlayerProps = {
	name: string;
	role: string;
	x?: number;
	y?: number;
	radius?: number;
	color?: string;
	index: number;
};



