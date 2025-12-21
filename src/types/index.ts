export type NavLink = {
  id: string;
  title: string;
};

export type CocktailList = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export type ProfileList = {
  imgPath: string;
};

export type StoreInfo = {
  heading: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
};

export type OpeningHour = { day: string; time: string };

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface SliderItem {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

export type FooterLink = {
  label: string;
  link: string;
};
