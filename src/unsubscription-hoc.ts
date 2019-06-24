export function Unsubscription(subscriptionKeys: string[]) {
  return (cmpType) => {
    let cmpInstance;
    const originalFactory = cmpType.ngComponentDef.factory;
    cmpType.ngComponentDef.onDestroy = () => {
      if (cmpInstance.ngOnDestroy) {
        cmpInstance.ngOnDestroy();
      }
      subscriptionKeys.forEach((key) => {
        if (cmpInstance[key]) {
          cmpInstance[key].unsubscribe();
        }
      });
    }
    cmpType.ngComponentDef.factory = (...args) => {
      cmpInstance = originalFactory(...args);

      return cmpInstance;
    };
    return cmpType;
  };
}
