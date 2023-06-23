import PieChart from "@/components/piechart"

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    const data = {
      "first": 1,
      "second": 2,
      "third": 3,
      "fourth": 4,
      "fifth": 5,
        }
    return(
     <div>
      <h1>Pie Chart</h1>
      <PieChart data={data}/>
     </div>
    )
  }