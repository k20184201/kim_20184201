import { Suspense } from "react";
const SplitMe = React.lazy(() => import("./19.2.1-1(SplitMe)"));

<Suspense fallback={<div>loading...</div>}>
  <SplitMe />
</Suspense>;
