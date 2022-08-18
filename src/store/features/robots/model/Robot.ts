export interface ProtoRobot {
  name: string;
  image: string;
  creationDate: Date;
}

export interface Robot extends ProtoRobot {
  id: string;
  owner: {
    _id: string;
    owner: string;
  };
}

export type Robots = Robot[];
