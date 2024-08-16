import { useCallback, useLayoutEffect, useState } from "react";

import { PerfectCursor } from "perfect-cursors";

export function usePerfectCursor(
  cb: (point: number[]) => void,
  point?: number[],
) {
  const [pc] = useState(() => new PerfectCursor(cb));

  useLayoutEffect(() => {
    if (point) pc.addPoint(point);
    return () => pc.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pc]);

  const onPointChange = useCallback(
    (point: number[]) => pc.addPoint(point),
    [pc],
  );

  return onPointChange;
}
