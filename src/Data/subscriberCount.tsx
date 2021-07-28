const subscriberCount = {
  style: {
    mainDark: "#27201A",
    mainLight: "#CBBE8F",
    secondDark: "#EEAE3C",
    secondLight: "#E2BD64",
    thirdDark: "#DF4239",
    thirdLight: "#F99D5C",
  },
  years: [
    {
      id: 2019,
      name: "2019",
      //     jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //     New subscribers
      data: [1, 0, 2, 1, 3, 1, 0, 0, 4, 3, 2, 4],
      //     Total subscribers
      data2: [1, 1, 3, 4, 7, 8, 8, 8, 12, 15, 17, 21]
    },
    {
      id: 2020,
      name: "2020",
      //     jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //     New subscribers
      data: [3, 3, 2, 1, 0, 1, 1, 3, 4, 3, 4, 2],
      //     Total subscribers
      data2: [24, 27, 29, 30, 30, 31, 32, 35, 39, 42, 46, 48]
    },
    {
      id: 2021,
      name: "2021",
      //     jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec
      //     New subscribers
      data: [5, 4, 3, 3, 5, 6, 4],
      //     Total subscribers
      data2: [53, 57, 60, 63, 68, 74, 78]
    }
  ]
};

export { subscriberCount };
