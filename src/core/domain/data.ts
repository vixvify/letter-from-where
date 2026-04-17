export interface IData {
  id: string;
  scene_1: string;
  created_at: string;
}

export interface ICreateData {
  name: string;
  age: number;
  scene_18: string; // choice
  scene_29: string; // choice
  scene_30?: string;
  scene_40: string; // choice
  scene_41?: string;
  scene_46: string;
  scene_52: string; // choice
  scene_69: string; // choice
  scene_70?: string;
  scene_94: string; // choice
}

export interface IScene3 {
  name: string;
  age: number;
}

export interface IScene30 {
  scene_30: string;
}
