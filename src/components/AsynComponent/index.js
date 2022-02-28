import React, { useState, useEffect, useCallback } from "react";
export default function asyncComponent(importComponent) {
  // 制作异步函数组件
  const AsyncComponent = () => {
    const [Component, setComponent] = useState(null);
    const component = useCallback(async () => {
      const { default: components } = await importComponent();
      setComponent(() => components);
    }, []);
    useEffect(() => {
      component();
    }, [component]);
    return Component ? <Component /> : null;
  };
  return AsyncComponent;
}
