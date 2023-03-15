import type { IGroupedData } from "../charts/types";
import { GroupedBarChart } from "../charts/GroupedBarChart";

const GROUPED_BAR_CHART_DATA: IGroupedData[] = [
  { label: "Apples", values: [160, 80, 100], colors: 'black' },
  { label: "Bananas", values: [160, 200, 120], colors: 'blue' },
  { label: "Oranges", values: [60, 40, 10], colors: 'red' }
];

 const Dashboard = () => {
 
  return (

    <div className="div-container">
    <section>
      <GroupedBarChart data={GROUPED_BAR_CHART_DATA} />
    </section>
  </div>
   )
};

export default Dashboard;