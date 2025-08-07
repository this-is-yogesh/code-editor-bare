import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img
        src={
          "https://images.unsplash.com/photo-1754430543609-aae159c530ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        }
        width={300}
        height={300}
      />
    </div>
  );
}
