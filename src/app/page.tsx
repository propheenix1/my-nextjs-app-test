'use client';

import Image from "next/image";
import Card from "./components/Card";
import { withAuth } from './components/withAuth'; // Adjust the path accordingly

function Home() {
  return (
    <div>
      <Card />
    </div>
  );
}
export default withAuth(Home);