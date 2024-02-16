import { IMember } from "../Interface";

export interface IMemberSlice {
  data: IMember;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface IMembersSlice {
  list: IMember[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  totalCount: number;
  currentPage: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface ISettingsSlice {
  table: {
    limit: number;
  };
};

export interface IRootReducer {
  member: {
    member: IMemberSlice;
    members: IMembersSlice;
  };
  settings: ISettingsSlice
}
