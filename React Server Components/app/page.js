import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import UsePromiseDemo from "@/components/UsePromiseDemo";
import { Suspense } from "react";


export default async function Home() {
    
  return (
    <main>
      <p>Let's go!</p>
      <Suspense fallback={<p>Loading...</p>}>
         <UsePromiseDemo/>
      </Suspense>
    </main>
  );
}
