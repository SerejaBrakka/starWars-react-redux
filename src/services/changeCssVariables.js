export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  const cssVariables = ["header", "image"];

  cssVariables.map((element) => {
    return root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
