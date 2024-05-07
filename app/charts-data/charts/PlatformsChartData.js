import { faker } from "@faker-js/faker";

const labels = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export const Data = {
  type: "bar",
  data: {
    labels,
    datasets: [
      {
        type: "line",
        label: "Tech consultoria",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
        backgroundColor: "transparent",
        borderColor: "#a700ff",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
        borderWidth: 3,
      },
      {
        label: "Tech Plataforma",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
        backgroundColor: "transparent",
        borderColor: "#ef4444",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
        borderWidth: 3,
      },
      {
        label: "Tech Serviços",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
        backgroundColor: "transparent",
        borderColor: "#3cd856",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        align: "center",
        position: "bottom",
        maxHeight: 30,
        labels: {
          color: "rgb(148, 163, 184)",
          boxWidth: 5,
          boxHeight: 5,
          padding: 15,
          font: {
            size: 10,
            family: "Roboto",
          },
        },
      },
    },
    scales: {
      display: false,
      responsive: true,
      x: {
        ticks: {
          font: {
            size: 10,
            family: "Roboto",
          },
          padding: 10,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#CDCDCD",
          font: {
            size: 10,
            family: "Roboto",
          },
        },
        grid: {
          display: true,
          color: "#000",
        },
      },
    },
  },
};
