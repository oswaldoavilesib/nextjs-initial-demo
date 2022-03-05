import React from "react";
import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const Pricing = () => {
  return (
    <MainLayout>
      <h1>Pricing</h1>
      <h1 className={"title"}>
        Go to:
        <Link
          href={{
            pathname: "/",
            query: { slug: "test" },
          }}
        >
          <a>Home</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
};

export default Pricing;
