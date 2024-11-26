import Link from "next/link";
const SubtractPage = () => {
    return (
      <div className="p-4">
        <Link className="p-4" href="/numericals">GO BACK</Link>
        <h1 className="text-2xl font-bold">Addition</h1>
        <p>Here you can substract numbers!</p>
      </div>
    );
  };
  
  export default SubtractPage;