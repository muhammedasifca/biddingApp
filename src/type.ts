export type UserType = {
  name: string;
  img: string;
  id: number;
} | null;

export type ContextType = {
  userSel: UserType;
  setUserSel: React.Dispatch<React.SetStateAction<UserType>>;
  homeData: DataType;
  setHomeData: React.Dispatch<React.SetStateAction<DataType>>;
  notification: notificationType;
  setNotification: React.Dispatch<React.SetStateAction<notificationType>>;
};

export type DataType = {
  id: number;
  type: string;
  img: string;
  price: number;
}[];

export type HomesProps = {
  data: {
    id: number;
    type: string;
    img: string;
    price: number;
  }[];
};

export type NewNotType = {
  houseName: string;
  userName: string;
  bidAmount: number;
  houseImg: string;
  userImg: string;
};

export type notificationType = {
  houseName: string;
  userName: string;
  bidAmount: number;
  houseImg: string;
  userImg: string;
}[];

export type ProfileProps = {
  data: { id: number; name: string; img: string }[];
};
