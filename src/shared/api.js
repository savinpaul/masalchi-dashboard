import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/todos/";

export let getAPIData = async () => {
  let res = await axios.get(baseURL);
  return res.data;
};
export let getAllProducts = () => {
  return [
    {
      provider: "VM",
      packageType: "BB",
      packageName: "M100 Fibre",
      price: "54",
      date: "04/02/2022",
      speed: "110",
      contractLength: "24",
    },
    {
      provider: "VM",
      packageType: "TV",
      packageName: "Entertainment Fibre",
      price: "24",
      date: "04/02/2022",
      speed: "110",
      contractLength: "24",
    },
    {
      provider: "BT",
      packageType: "TV",
      packageName: "Entertainment",
      description: "200+ TV channels",
      price: "45",
      date: "04/02/2022",
      contractLength: "18",
    },
    {
      provider: "VM",
      packageType: "TV",
      packageName: "M30 Broadband",
      description: "200+ TV channels",
      price: "45",
      date: "04/02/2022",
      contractLength: "18",
    },
    {
      provider: "SKY",
      packageType: "TV",
      packageName: "SKy entertainment",
      description: "200+ TV channels",
      price: "45",
      date: "04/02/2022",
      contractLength: "18",
    },
  ];
};
export let getHistoricData = () => {
  return [
    {
      provider: "BT",
      packageType: "BB",
      totalProducts: "10",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/02/2022",
    },
    {
      provider: "BT",
      packageType: "BB",
      totalProducts: "20",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/01/2022",
    },
    {
      provider: "VM",
      packageType: "BB",
      totalProducts: "20",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/03/2022",
    },
    {
      provider: "VM",
      packageType: "TV",
      totalProducts: "18",
      addedToday: "1",
      priceHiked: "4",
      priceDropped: "1",
      date: "04/05/2022",
    },
    {
      provider: "VM",
      packageType: "TV",
      totalProducts: "13",
      addedToday: "1",
      priceHiked: "4",
      priceDropped: "1",
      date: "04/06/2022",
    },
    {
      provider: "SKY",
      packageType: "BB",
      totalProducts: "8",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/04/2022",
    },
    {
      provider: "VM",
      packageType: "TV",
      totalProducts: "15",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/01/2022",
    },
    {
      provider: "BT",
      packageType: "BB",
      totalProducts: "10",
      addedToday: "2",
      priceHiked: "1",
      priceDropped: "1",
      date: "04/03/2022",
    },
    {
      provider: "BT",
      packageType: "BB",
      totalProducts: "20",
      addedToday: "1",
      priceHiked: "2",
      priceDropped: "1",
      date: "04/06/2022",
    },
  ];
};
export let getData = () => {
  return [
    {
      provider: "BT",
      packageType: "BB",
      totalProducts: "10",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/02/2022",
    },
    {
      sp: "BT",
      totalProducts: "20",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/01/2022",
    },
    {
      sp: "BT",
      totalProducts: "15",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/08/2022",
    },
    {
      sp: "SKY",
      totalProducts: "18",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/03/2022",
    },
    {
      sp: "BT",
      totalProducts: "12",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/04/2022",
    },
    {
      sp: "SKY",
      totalProducts: "20",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/05/2022",
    },
    {
      sp: "BT",
      totalProducts: "20",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/06/2022",
    },
    {
      sp: "SKY",
      totalProducts: "20",
      addedToday: "2",
      priceHiked: "3",
      priceDropped: "1",
      date: "04/02/2022",
    },
  ];
};
