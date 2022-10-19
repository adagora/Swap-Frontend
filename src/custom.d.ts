declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.css' {
  const classes: {
    [className: string]: string;
  };
  export = classes;
}

declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '' as string;
}
