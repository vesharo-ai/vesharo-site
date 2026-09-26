import React, { useEffect, useState } from "react";
import RawCountUp from "react-countup";

export default function CountUp(props: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span>{props.end ?? props.start ?? 0}</span>;
  }

  const Component: any = (RawCountUp as any)?.default?.default || (RawCountUp as any)?.default || RawCountUp;
  if (typeof Component === "function") {
    return <Component {...props} />;
  }
  return <span>{props.end ?? 0}</span>;
}
