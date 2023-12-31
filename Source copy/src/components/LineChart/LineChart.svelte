<script lang="ts">
  import { type ChartData, type ChartOptions } from "chart.js/auto";
  import { colorSchemeStore } from "../../stores/color-scheme";
  import { darkModeStore } from "../../stores/dark-mode";
  import Chart from "../../base-components/Chart";
  import { getColor } from "../../utils/colors";

  let width: number = undefined;
  let height: number = undefined;
  let className: string = undefined;

  export { width, height, className as class };

  let data: ChartData;
  let options: ChartOptions<"line">;

  $: data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Html Template",
        data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
        borderWidth: 2,
        borderColor: $colorSchemeStore.value ? getColor("primary") : "",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        tension: 0.4,
      },
      {
        label: "VueJs Template",
        data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
        borderWidth: 2,
        borderDash: [2, 2],
        borderColor: $darkModeStore.value
          ? getColor("slate.400", 0.6)
          : getColor("slate.400"),
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  $: options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: getColor("slate.500", 0.8),
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: getColor("slate.500", 0.8),
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: getColor("slate.500", 0.8),
          callback: function (value) {
            return "$" + value;
          },
        },
        grid: {
          color: $darkModeStore.value
            ? getColor("slate.500", 0.3)
            : getColor("slate.300"),
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
    },
  };
</script>

<Chart type="line" {width} {height} {data} {options} class={className} />
